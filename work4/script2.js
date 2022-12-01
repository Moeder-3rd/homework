const add = (...nums) => {
    let sum = 1;
    for (let i of nums) {
      sum *= i;
    }
    return sum;
  }
  console.log(add(1,5,9,7,3)) 