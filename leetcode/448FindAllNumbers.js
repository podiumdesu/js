//448.Find All Numbers Disappeared in an ARRAY

//Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//Find all the elements of [1, n] inclusive that do not appear in this array.
//Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

//Example:

/**Input:
*    [4,3,2,7,8,2,3,1]
*
*Output:
*    [5,6]
**/

var numberDisappeared = function (x) {
    var array = [];
    for (var i = 1 ; i <= x.length ; i++){
        console.log(i);
        if (x.indexOf(i) == -1){
            array.push(i);
        }
        console.log(array);
    }
    return array;
};

console.log(numberDisappeared([2,2,3,4,6,6]))