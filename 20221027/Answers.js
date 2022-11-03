function startup(){

  // Question 1

  function name(firstName, lastName){
    return firstName + " " + lastName;
  }

  // Question 2

  var msg = name("Jim", "Kocsis");
  alert(msg);

  // Question 3

  function runName(nameFunction, firstName, lastName){
    console.log(nameFunction(firstName, lastName));
  }

  var namePTR = name;

  runName(namePTR, "Jim", "Kocsis");

  // Question 4

  function testCallBack(callback) {
    callback();
  }

  testCallBack(() => {
    console.log("Hello World");
  });

  // Question 5

  document.getElementById("alertButton").addEventListener("click",
  () => { alert("Have a Great Day!")});

}