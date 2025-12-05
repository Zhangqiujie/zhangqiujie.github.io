export function startHandleMarkmap() {
  document.addEventListener('DOMContentLoaded', () => {
    waitForMarkmap()
    .then(() => {
        const blocks = document.querySelectorAll('pre code.language-markmap');
        blocks.forEach((block) => {
        markmap.autoLoader.render(block);
        });
    })
    .catch((err) => console.error(err));
    });
}

function waitForMarkmap(timeout = 5000) {
  return new Promise((resolve, reject) => {
    const interval = 50; // 每 50ms 检查一次
    let elapsed = 0;

    const check = () => {
      if (window.markmap && markmap.autoLoader && window.markmap.Transformer) {
        resolve();
      } else {
        elapsed += interval;
        if (elapsed >= timeout) {
          reject(new Error('Markmap load timeout'));
        } else {
          setTimeout(check, interval);
        }
      }
    };

    check();
  });
}