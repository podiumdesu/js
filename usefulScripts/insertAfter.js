function insertAfter (newElement, targetElement) {
  var parent = targetElement.parentNode;//获得该节点的上一个父节点，可以是元素节点，也可以是文本节点
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
