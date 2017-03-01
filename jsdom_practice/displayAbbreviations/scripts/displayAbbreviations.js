function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode )  return false;



  //取得所有缩略词
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();

  //遍历这些缩略词
  for (var i = 0; i < abbreviations.length; i++) {
    var currentDefs = abbreviations[i];
    var key = currentDefs.lastChild.nodeValue;
    var definition = currentDefs.getAttribute("title");

    defs[key] = definition;   //？？？真的是绝望，debug半小时，结果是这里difinition少打了一个i
  }



　
　//　定义一个列表
  var dlist = document.createElement("dl");
  //　遍历定义
  for (key in defs) {
    var dtitle = document.createElement("dt");
    var title_text = document.createTextNode(key);
    dtitle.appendChild(title_text);


    var ddesc = document.createElement("dd")
    var ddesc_text = document.createTextNode(defs[key]);
    ddesc.appendChild(ddesc_text);
　　//　添加到定义表
    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);

  }

　//　定义一个header
  var header = document.createElement("h2");
  var header_text = document.createTextNode("abbreviations");
  header.appendChild(header_text);


  //将header和dlist插入到文档中去
//  var body = document.getElementsByTagName("body")[0];
  document.body.appendChild(header);
  document.body.appendChild(dlist);

}

addLoadEvent(displayAbbreviations);
//window.onload = displayAbbreviations;
