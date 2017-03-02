function stripeTables() {
  var tables = document.getElementsByTagName("table");
  var odd = false;

  for(var i = 0; i < tables.length; i++) {
    var current_table = tables[i];
    var rows = current_table.getElementsByTagName("tr");
    for (var j = 0; j < rows.length; j++) {
      if (odd) {
        rows[j].style.backgroundColor = "#ffc";
        odd = false;
      } else {
        odd = true;
      }
    }
  }
}

addLoadEvent(stripeTables);
