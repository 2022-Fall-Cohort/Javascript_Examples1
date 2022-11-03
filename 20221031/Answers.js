function startup() {

// 1 - How do you define a class in Javascript and what is the idea of 
//     "Classes in Javascript", called within the programming community?
//

// Answer is: "Syntactic Sugar". It makes the protype system a little
// easier to work with.
//
// Example of a Javascript class is as follows:

class Automobile {
  constructor() {
    this.numberOfWheels = 4;
    this.motor = true;
    this.numberOfDoors = 4;
    this.color = "Blue";
  }
}

class Car extends Automobile {
  constructor() {
    super();

    this.color = "Red";
    this.airConditioning = true;
  }
}

var car = new Car();

console.log("car is ", car);

// 2 - Why is it important to use "Functions" in Javascript?
//

// Answer is: You want to keep your code organized.
//            This helps show you what the code is doing and
//            maintains "Testability"

// 3 - Create a class in Javascript to do the following:
//
//    a - Create a method within the class
//    a - Within the above method, get the "body" element from the DOM
//    b - Change its "backgroundColor" to whatever you like
//        Of course, different from whatever it is now :).
//    c - Instantiate the class and execute the method.
//
// Answer follows:
//

  class ChangeBGColor {

    adjustBodyColor(color){
      document.body.style.backgroundColor = color;
    }

  }

  var makeItHappen = new ChangeBGColor();

  makeItHappen.adjustBodyColor("yellow");

// 4 - Why is TDD "easier" in Javascript?
//
// Answer is: If you adhere to the standards of organizing your code in
//            classes/objects and functions, Test Driven Development will
//            be easier to carry out.
//

// 5 - Provide an example of a "Higher Level Function" in Javascript and
//     show an example of using it.
//
// Answer follows:
//
// One example that is used a great deal is "find":
//

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

// The definition of "find" in MDN is:
//
// The find() method returns the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.
//
// The criteria provided here in the arrow function is "element > 10", 
// so the expected output is: 12

// This next set of code is just another example of a very highly used
// array method, called "map". This is not needed for the answer.
// It is just some additional information you should have.
//
// Feel free to try out the code and try to figure out what it is
// doing. This particular code is difficult, so don't be discouraged
// if you struggle with it. 
// Hint: The thing to look at is the "..." in the return statement.
// Those 3 dots (...) are called the "spread" operator. 
// Look up the "spread operator in Javascript" on the web.
// 
// Good Luck!
// Please let me know if you have further questions.
//
// Thank You.
//

class testCache {

  items = [ "a", "b", "c", "bb", "cc", "ddd", "eeee"];

  constructor (cache) {
    this._cache = cache;
  }

  cachedList () {
    return this.items.map(it => {
      console.log(it);
      return {...it};
    });
  };  
}

var itemsArray =  new testCache();

console.log(itemsArray.cachedList());


}