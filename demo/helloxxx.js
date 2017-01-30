//利用循环遍历数组中的每个名字，并显示hello,xxx!
//arr = ['Bart','Lisa','Adam']

//利用for循环正序
'use strict'
var arr = ['Bart','Lisa','Adam'];
for (var i in arr){
  alert(`hello,${arr[i]}!`);
}


//利用for循环倒序
'use strict'
var arr = ['Bart','Lisa','Adam'];
var i = arr.length-1;
for (;i>=0;i--){    //省略某一个条件时记得加上分号
    alert(`hello,${arr[i]}!`);
}

//利用while循环正序
'use strict'
var arr = ['Bart','Lisa','Adam'];
var i = 0;
while (i<arr.length){
    alert(`hello,${arr[i]}!`);
    i++;
}

//利用while循环倒序
'use strict'
var arr = ['Bart'.'Lisa','Adam'];
var i = arr.length-1;
while (i>=0){
    alert(`hello,${arr[i]}`);
    i--;
}
