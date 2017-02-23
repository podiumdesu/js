/**
 * Created by petnakanojo on 2/23/17.
 */
'use strict';

function get_primes(arr) {
    return arr.filter(function(x) {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return x !== 1;

    });

// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 2000; x++) {
    arr.push(x);
}

r = get_primes(arr);

console.log(r.toString());
