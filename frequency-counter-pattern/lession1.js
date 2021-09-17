/*
    Write a function called same, which accepts two arrays.
    The function should return true, if every value in the array has
    it's corresponding value squared in the second array.
    The frequency of values must be the same.

    same([1,2,3], [4,1,9]) // true
    same([1,2,3] , [1,9]) // false
    same([1,2,1] ,  [4,4,1]) // false (must be same frequency)
*/

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};

    for(let val of arr1){
        obj1[val] = ++obj1[val] || 1;
    }

    for(let val of arr2){
        obj2[val] = ++obj2[val] || 1;
    }

    for(let key in obj1){
        if(!((key**2) in obj2)){
            return false;
        }
        if(obj2[key] !== obj1[key]){
            return false;
        }
    }

    return true;

}