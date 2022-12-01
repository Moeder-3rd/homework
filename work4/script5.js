function shallowCopy() {  
    var arr = new Array(2,4,6,8)
    var arr1 = arr
    arr[0]=1
    console.log(arr);
    console.log(arr1);
}
shallowCopy()
function deepCopy() {   
    var arr2 = new Array(2,4,6,8)
    var arr3 = Array.from(arr2)
    arr2[0]=3
    console.log(arr2);
    console.log(arr3);
}
deepCopy()