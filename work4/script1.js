let arr = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
let newArray = arr.flat(Infinity)
console.log(newArray);

let arr1 = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
arr1 += '';
arr1 = arr1.split(',');
console.log(arr1);

let arr2 = [1, 2, [3, 4, 5, [6, 7], [8, 9, [10]]], [11, 12]]
function recursion(arr2) {     
        let newArr = [];
    let toArr = function(arr2){
        arr2.forEach(function(item){
            item instanceof Array ? toArr(item) : newArr.push(item);
        });
    }
    toArr(arr2);
    return newArr;
}
console.log(recursion(arr2));