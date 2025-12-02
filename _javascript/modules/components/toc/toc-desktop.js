export class TocDesktop {
  /* Tocbot options Ref: https://github.com/tscanlin/tocbot#usage */
  static options = {
    tocSelector: '#toc',
    contentSelector: '.content',
    ignoreSelector: '[data-toc-skip]',
    headingSelector: 'h1, h2, h3, h4, h5, h6',
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 7,
    headingsOffset: 16 * 2 // 2rem
  };

  static refresh() {
    tocbot.refresh(this.options);
  }

  static init() {
    tocbot.init(this.options);
  }
}
