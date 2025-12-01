---
title: MySQL - InnoDB的记录结构
description: 
author: zhang
date: 2025-11-30 11:33:00 +0800
categories: [MySQL, MySQL是怎样运行的 - 笔记]
tags: [MySQL, Reading Notes]
pin: false
math: true
mermaid: true
---
## InnoDB页简介

`InnoDB`是一个将表中的数据存储到磁盘上的存储引擎。真正处理数据的过程是发生在内存中的，所以需要把磁盘中的数据加载到内存中。InnoDB采取的方式是：将数据划分为若干个页，以页作为磁盘和内存之间交互的基本单位，**InnoDB中页的大小一般为 16 KB**。也就是在一般情况下，一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。

## InnoDB行格式

InnoDB存储引擎设计了4种不同类型的行格式，分别是`Compact`、`Redundant`、`Dynamic`和`Compressed`。

### 指定行格式的语法

```
CREATE TABLE 表名 (列的信息) ROW_FORMAT=行格式名称
    
ALTER TABLE 表名 ROW_FORMAT=行格式名称
```

