function displayCitations() {
  var quotes = document.getElementsByTagName("blockquote");
  if (quotes.length < 1) return false;
  for (var i = 0; i < quotes.length; i++) {
//    var currentCite = cites[i];
    //var cite_text = currentCite.getAttribute("cite");
    //var display = new Array();
    //display[i] = cite_text;
    if (!quotes[i].getAttribute("cite")) continue; //跳出此次循环
    var url = quotes[i].getAttribute("cite");
    var quoteChildren = quotes.getElementsByTagName("*");
    if (quoteChildren.length < 1) continue;
    var elem = quoteChildren[quoteChildren.length - 1];


    var link = document.createElement("a");
    var link_text = document.createTextNode("source");
    link.appendChild(link_text);

    link.setAttribute("href",url);

    var insert = document.createElement("sup");
    insert.appendChild(link);

    elem.appendChild(insert);

  }

}

addLoadEvent(displayCitations);
//window.onload = displayCitations;
