function addLoadEvent(func) {
  var oldonload = window.onload;
  if (type window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = func() {
      oldonload();
      func();
    }
  }
}
