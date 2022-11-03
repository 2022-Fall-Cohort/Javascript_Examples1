function startup(){

// 1 - How do you define a class in Javascript and what is the idea of 
//     "Classes in Javascript", called within the programming community?
//
// 2 - Why is it important to use "Functions" in Javascript?
//
// 3 - Create a class in Javascript to do the following:
//
//    a - Create a method within the class
//    a - Within the above method, get the "body" element from the DOM
//    b - Change its "backgroundColor" to whatever you like
//        Of course, different from whatever it is now :).
//    c - Instantiate the class and execute the method.
//
// 4 - Why is TDD "easier" in Javascript?
//
// 5 - Provide an example of a "Higher Level Function" in Javascript and
//     show an example of using it.
//

  // class Shape {
  //   constructor(){
  //     console.log("This is the constructor for Shape");
  //   }
  // }

  // class Square extends Shape {
  //   constructor(length, width) {
  //     super();
  //     console.log("This is the constructor for Square");

  //     this.length = length;
  //     this.width = width;
  //   }

  //   getArea() {
  //     return this.length * this.width;
  //   }
  // }

  // var squareExample = new Square(25, 30);

  // // var someObj1 = new Object(Square);


  // // var someObj2 = new Object(someObj1);

  // someObj1 = new Object();

  // // someObj2 = new Object(someObj1);

  // someObj2 = someObj1;

  // someObj2.newProperty = "abc";

  // console.log(someObj1.newProperty);

  // const myHeading = document.querySelector("h1");
  // myHeading.style.backgroundColor = "blue";
  // myHeading.style.color = "white";
  // myHeading.style.padding = "1em";

  // class Dom{
  //     updateBackgroundColor(element, color){
  //           element.style.backgroundColor = color
  //       return element
  //     }
  //     updateColor(element, color) {
  //       element.style.color = color
  //       return element
  //     }
  //     updatePadding(element, space) {
  //       element.style.padding = space
  //       return element
  //     }
  // }

  // Dom = new Dom();

  // const myHeading = document.querySelector("h1");
  // Dom.updateBackgroundColor(myHeading, "blue");
  // Dom.updateColor(myHeading, "white");
  // Dom.updatePadding(myHeading, "1em");

  // function Xreverse(array, fn) {
  //   const newArray = array
  //   return fn(newArray.reverse())
  // }
  
  // function log(message) {
  //   console.log(message)
  // }
  
  // Xreverse([1, 2, 3, 4, 5], log) // prints [5, 4, 3, 2, 1]

  // var xarray = [ "a", "b", "c" ];

  // console.log(xarray.reverse());

// Without Currying
// function makeElement(elementType, elementContent) {
//   const element = document.createElement(elementType)
//   element.innerHTML = elementContent
// }

// With Currying
// const makeCurriedElement = (elementType) => (elementContent) => {
//   const element = document.createElement(elementType)
//   element.innerHTML = elementContent
// }

// const makeArticle = makeCurriedElement("article")

// console.log(makeElement("article", "<h2>Here's my article</h2>"))
// console.log(makeArticle("<h2>Here's my more easily read article</h2>"))

// xyz = (a) => 
// {  
//   return function(x) { console.log("Hello ", x); }
// }


// xyz(1042)("abc");

// console.log(xyz);

// console.log("Hello ");


// () => { console.log("Hello"); }


}