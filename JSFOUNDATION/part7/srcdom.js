console.log("SCRIPT");

//example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "The paragraph is changed";
    // console.log(this);
    //output:- points to the whoel button'<button id="changeTextButton">Change Text</button>'
    /*But whenever we use the => (arrow function) then, it gives the window object because `this`
is pointing to the global this. */
  });

//example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    citieslist.firstElementChild.classList.add("highlight");
  });

//example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

//example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs"; // new element creation , not been added to dom yet.

  document.getElementById("shoppinglist").appendChild(newItem);
  //appendchild accepts a node because its a document object model, the new we created is also a node not a html element because html is being processed by the c++ in the browser which gives the dom tree.
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let tasklist = document.getElementById("taskList");
    tasklist.lastElementChild.remove();
  });

//example 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("It's Me Satyam");
});

//example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  /*if there was console.log(event) same as in params, it would have been a pointerEvent, we can use event.target to get the target we hoisting the eventlistner to.
   */
  if (
    event.target &&
    event.target.matches(".teaItem")
  ) /*matches is used for selectors for Id '#' and for class'.' it is used here so if there were more items in li it dont target those.
  Our code have run even without 'event.target.matches('.teaItem')' but its used for extra caution so it dont affect the other items.
  */
  {
    alert("You selected:" + event.target.textContent);
  }
});

//example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback); (.value can be used in console too.)
    let output = document.getElementById("feedbackDisplay");
    output.textContent = `Feedback is: ${feedback}`;
    output.style.fontWeight = "bold";
    output.style.backgroundColor = "lightblue";
    output.style.color = "black";

    let label = document.querySelector('label[for="feedbackInput');
    label.style.color = "red";
    label.style.fontWeight = "bold";
  });

//example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
