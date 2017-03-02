function highlightRows() {
  if (!document.getElementsByTagName) return false;
  var rows = document.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function() {
      this.style.fontWeight = "bold";  //this此处指的是这个元素节点
    }
    rows[i].onmouseout = function() {
    //  this.style.fontSize = '20px';
      this.style.fontWeight = "normal";
    }
  }
}

addLoadEvent(highlightRows);
