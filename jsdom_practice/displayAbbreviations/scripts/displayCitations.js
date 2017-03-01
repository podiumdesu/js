function displayCitations() {
  var quotes = document.getElementsByTagName("blockquote");
  //if (quotes.length < 1) return false;
  for (var i = 0; i < quotes.length; i++) {
//    var currentCite = cites[i];
    //var cite_text = currentCite.getAttribute("cite");
    //var display = new Array();
    //display[i] = cite_text;
    if (!quotes[i].getAttribute("cite")) continue; //跳出此次循环
    var url = quotes[i].getAttribute("cite");
    var quoteChildren = quotes[i].getElementsByTagName("*");  //获取所有的节点
    //漏了一个i，啊为什么我一直犯错误啊
    if (quoteChildren.length < 1) continue;　　//判断节点长度
    var elem = quoteChildren[quoteChildren.length - 1];　　//找到最后一个节点


    var links = document.createElement("a");
    var link_text = document.createTextNode("source");

    links.appendChild(link_text);

    links.setAttribute("href",url);

    var insert = document.createElement("sup");

    insert.appendChild(links);

    elem.appendChild(insert);

  }

}

addLoadEvent(displayCitations);
//window.onload = displayCitations;
