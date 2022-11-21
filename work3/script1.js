var arr = [114514,520,1314,486,42,147,76]
for (var i = 0; i < arr.length - 1; i++) {  
    for (var j = 0; j < arr.length - 1 - i; j++) {  
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }
}
console.log(arr)