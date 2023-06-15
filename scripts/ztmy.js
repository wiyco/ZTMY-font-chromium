window.addEventListener("load", niraChan);

function niraChan() {
  const path = chrome.runtime.getURL("fonts/ZTMY_MOJI-R.otf");
  const pathf = chrome.runtime.getURL("fonts/PixelMplus12-Regular.ttf");
  const font = new FontFace("ZTMY", `url(${path})`);
  const fontf = new FontFace("pixelmplus12regular", `url(${pathf})`);
  document.fonts.add(font);
  document.fonts.add(fontf);

  document.body.classList.add("__ZTMY__");
}
