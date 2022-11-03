function startup(){

// DOM_Lesson.js
// This tells our browser that we are
// referencing this specific element
// and sets it to a variable.

// h1_title = document.getElementById("Xtitle");

// h1_title.innerText = "This is dynamically set text.";

// h1_title.innerHTML = "This is <span style=" + "color:blue" + ">dynamically</span> set text!";


// console.log("title is ", h1_title);

// const titleId = h1_title.getAttribute("id");

// console.log("titleId is ", titleId);

// hasAttribute = h1_title.hasAttribute("href");

// console.log("hasAttribute is ", hasAttribute);

// query = document.querySelector("h1");

// console.log("query is ", query);

// queryAll = document.querySelectorAll("h1")

// console.log("queryAll is ", queryAll);

// title = document.querySelector("#Xtitle")

// This is going to make your 'h1' tag(s)
// be '50px' when you click it
// title.addEventListener("click", function() {
//   title.style.fontSize = "150px"
// })

// title = document.querySelector("#Xtitle")
// title.onclick = function() {
//   title.style.fontSize = "150px"
// }

const body = document.body

body.addEventListener("click", function(e) {
  if (e.target.classList.contains("someClass")) {
    console.log("you pressed the thing that was a class list of 'someClass'")
  }
})

logToTheConsole = (e) => {
  console.log(`Print me to the console!`,e);


}




}

