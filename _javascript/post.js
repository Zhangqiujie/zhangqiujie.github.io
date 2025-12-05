import { basic, initTopbar, initSidebar } from './modules/layouts';

import {
  loadImg,
  imgPopup,
  initLocaleDatetime,
  initClipboard,
  initToc,
  loadMermaid,
  startHandleMarkmap
} from './modules/components';

startHandleMarkmap();
loadImg();
initToc();
imgPopup();
initSidebar();
initLocaleDatetime();
initClipboard();
initTopbar();
loadMermaid();
basic();
