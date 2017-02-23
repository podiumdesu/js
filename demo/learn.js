/**
 * Created by petnakanojo on 2/22/17.
 */


/* Get someone's age*/

'use strict'
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
console.log(getAge.apply(xiaoming, [])); // 25, this指向xiaoming, 参数为空


/* apply() & call() */
console.log(Math.max.apply(null,[1,2,4]));
console.log(Math.max.call(1,2,5,6));


/*use our function to replace window.function to accomplish some new results */
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3

var arr = [1, 3, 5, 7, 9];
var sum2 = arr.reduce(function (x, y) {
    return x + y;
});   // 25
console.log(sum2);



var arr = [2,2,5];
var sum = arr.reduce(function (x, y) {
    return x * y;
});
console.log(sum);



/*filter*/
var arr = [1,2,4,5,6,7,8,9,4,52];
var sum = arr.filter(function(x) {
    return x % 2 !== 0;
});
console.log(sum);


/*filter 素数*/
'use strict';

function get_primes(arr) {
    return arr.filter(function(x) {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }

    });

    /*var sum = arr.filter(function(x) {
     for (let i = 0; i < 50 ; i++){
     if (x % i !== 0){
     return x;
     }
     });
     return sum;*/
}


// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
