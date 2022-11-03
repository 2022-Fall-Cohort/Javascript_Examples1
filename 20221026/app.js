// Make the h1 in header have different text

document.getElementById("h1Element").innerText = "Different Text";

// Make <li> elements in the <ul> in the <nav> get larger when you hover over them

document.getElementById("ulElement").addEventListener("mouseover", () => {
  document.getElementById("ulElement").className = "changeFontSize";
})

document.getElementById("ulElement").addEventListener("mouseout", () => {
  document.getElementById("ulElement").className = "";
})

// Add any element to the main element (Maybe a p? Dare you try to put an image in there?)

// var tag = document.createElement("p");
// var text = document.createTextNode("This is a dynamically created Text Node");
// tag.appendChild(text);
// var element = document.getElementById("mainElement");
// element.appendChild(tag);

var elem = document.createElement("img");
  elem.setAttribute("src", "./image.png");
  elem.setAttribute("height", "768");
  elem.setAttribute("width", "1024");
  elem.setAttribute("alt", "Dynamically Generated Image of Async/Await Process");
  document.getElementById("mainElement").appendChild(elem);

// Dynamically change the color of the background on the "footerElement" when the user hovers over it

document.getElementById("footerElement").addEventListener("mouseover", () => {
  document.getElementById("footerElement").className = "changeBGColor";
})

document.getElementById("footerElement").addEventListener("mouseout", () => {
  document.getElementById("footerElement").className = "";
})


// Change the font size of the paragraphs in the main element when the user clicks them

document.getElementById("mainElement").addEventListener("click", () => {
  document.getElementById("mainElement").className = "changeFontSize";
})

document.getElementById("mainElement").addEventListener("dblclick", () => {
  document.getElementById("mainElement").className = "";
})

// Change what the text says in the "footerElement" when the user clicks it

oldFooterText = document.getElementById("footerElement").innerText;

document.getElementById("footerElement").addEventListener("click", () => {
  document.getElementById("footerElement").innerText = "Four Score and Seven Years Ago ...";
})

document.getElementById("footerElement").addEventListener("dblclick", () => {
  document.getElementById("footerElement").innerText = oldFooterText;;
})

// Remove/Toggle Visiblity the h1 element in the header (hint: do you already have this saved in a variable from earlier?)

oldOpacity = document.getElementById("h1Element").style.opacity;

document.getElementById("h1Element").addEventListener("click", () => {
  document.getElementById("h1Element").style.opacity = "0";
})

document.getElementById("h1Element").addEventListener("dblclick", () => {
  document.getElementById("h1Element").style.opacity = oldOpacity;
})

// Add the copyright back in to the "footerElement" in another element and change it to 2022 (or whatever year it might be. I'm just a voice in the past here. You are the future!)

document.getElementById("h1Element").innerText = oldFooterText;

document.getElementById("footerElement").innerText = "Copyright MyApp 2022";

oldFooterText = document.getElementById("footerElement").innerText;

// I copied this code from above just to make things consistent

document.getElementById("footerElement").addEventListener("click", () => {
  document.getElementById("footerElement").innerText = "Four Score and Seven Years Ago ...";
})

document.getElementById("footerElement").addEventListener("dblclick", () => {
  document.getElementById("footerElement").innerText = oldFooterText;
})

// Change the text in one of the paragraph tags in the main element

paraGraphs = document.getElementsByTagName("p");

paraGraphs[1].innerText = "This is Jim's new paragraph";

// Change the width of the header element to 200px 

document.getElementById("headerElement").style.width = "200px";
