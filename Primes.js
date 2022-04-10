// console.log("Test");

// a prime number is a number that is not divisible by any previous prime number



const printPrime = () => {
  let primesList = [1]

  for (let i=1; i<=200; i++){
    if(i === 1) continue;
    if(i !== 2 && i%2 === 0) continue;
    if(i !== 3 && i%3 === 0) continue;
    if(i !== 5 && i%5 === 0) continue;
    if(i !== 7 && i%7 === 0) continue;
    if(i !== 11 && i%11 === 0) continue;

    primesList.push(i)
  }

  return primesList;
}



const primesTo100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]

console.log(JSON.stringify(printPrime()) === JSON.stringify(primesTo100));
console.log("===========================");

console.log(printPrime());
// console.log(primesTo100);

