function addClass(element,class) {
  if (!element.className) {
    element.className = class;
  } else {
    element.className += " class"
  }
}
