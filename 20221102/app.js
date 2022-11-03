function startup(){

  // const getEvenRandomNumberBetweenTwoAndTen = new Promise((resolve, reject) => {
  //   // const randomNumber = Math.floor(Math.random * 10 + 1)
  //   const randomNumber = 5;
  //   const isEven = number => number % 2 === 0
  //   // console.log("randomNumber is ", randomNumber)

  //   isEven(randomNumber) ? resolve(`Your random even number is ${randomNumber}`) : reject(`Number returned was odd.`)
  // })
  
  // getEvenRandomNumberBetweenTwoAndTen
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err))
{

 var TimeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {console.log("Hi");}, 3000)
  sum = 0;
  for (i =0; i <100000000; i++){
    sum++;
  }

  resolve("Everything ran fine; sum is ");
  // reject("Something went wrong");
})
}

console.log(sum);
TimeoutPromise.then((res) => console.log("Success", res)).catch((res) => console.log("Failure",res));

console.log("Main program is continuing to run ... ");












}