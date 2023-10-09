function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
  }
  
 console.log(calculateSum(5));
 console.log(calculateSum(10));
 
  function printEvenNumbers(n) {
    let i=2;
    while ( i<=n){
        console.log(i);
        i +=2;
    }
  }
  
  console.log("Even numbers up to 10:");
  printEvenNumbers(10);
  console.log("Even numbers up to 20:");
  printEvenNumbers(20);