function displayAccesskey() {
  var links = document.getElementsByTagName("a");
  var akeys = new Array();

  if (links.length < 1) return false;

  for (var i = 0 ; i < links.length; i++) {
    var current_link = links[i];
    if (!current_link.getAttribute("accesskey")) continue;
    var key = current_link.getAttribute("accesskey");
    var text = current_link.lastChild.nodeValue;
    akeys[key] = text;
   }

  var llist = document.createElement("ul");

  for (key in akeys) {
    var text = akeys[key];
    var str = key + ": " + text;
    var livalue = document.createElement("li");
    var livalue_text = document.createTextNode(str);
    livalue.appendChild(livalue_text);
    llist.appendChild(livalue);
  }


  var header = document.createElement("h2");
  var header_text = document.createTextNode("accesskeys");
  header.appendChild(header_text);

  document.body.appendChild(header);
  document.body.appendChild(llist);

}

addLoadEvent(displayAccesskey);
