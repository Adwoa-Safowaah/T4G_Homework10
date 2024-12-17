//Manipulate the title
let title = document.getElementById("title");
title.style.color = "white";
title.style.backgroundColor = "blue";
title.style.padding = "10px";
title.style.borderRadius = "8px";
title.innerHTML = "Learning how to manipulate the DOM using JS 💪";

//Manipulate content blocks
//Add event listeners

let Q1 = document.getElementById("Q1");
Q1.addEventListener(`click`, function () {
    Q1.style.backgroundColor = "lightgray";
    Q1.style.color = "black";
    Q1.innerHTML = "I know now what the DOM is🙌";
});


let Q2 = document.getElementById("Q2");
Q2.addEventListener(`dblclick`, function () {
    Q2.style.backgroundColor = "yellow";
    Q2.style.color = "black";
    Q2.innerHTML = "I know how to access / select elements in the DOM. 👊";
});

let Q3 = document.getElementById("Q3");
Q3.addEventListener(`mouseenter`, function () {
    Q3.style.backgroundColor = "green";
    Q3.style.color = "black";
    Q3.style.textShadow = `2px 2px 5px rgba (0, 0, 0, 0.7)`;
    Q3.innerHTML = "I know how to use the style methods to change the style of an element in the DOM ✅";
});

let Q4 = document.getElementById("Q4");
Q4.addEventListener(`click`, function () {
    Q4.style.backgroundColor = "purple";
    Q4.style.color = "white";
    Q4.innerHTML = "I know how the styling properties differ in JS from CSS👍";
});

let Q5 = document.getElementById("Q5");
Q5.addEventListener(`dblclick`, function () {
    Q5.style.backgroundColor = "black";
    Q5.style.color = "white";
    Q5.innerHTML = "Yes I did it!! I manipulated the DOM and styled my elements🥰🥰🥰🥰";
});

// Button

// Select elements by their IDs
let viewImageBtn = document.getElementById(`viewImageBtn`);
let closeImageBtn = document.getElementById(`closeImageBtn`);
let image = document.getElementById(`image`);

// Initially, the `Click to view image` button is visible, and others are hidden
viewImageBtn.style.display = `block`;
closeImageBtn.style.display = `none`;
image.style.display = `none`;

// Add event listener for `Click to view image` button
viewImageBtn.addEventListener(`click`, function () {
    //Hide the `view image` button, show the `close image` button and image
    viewImageBtn.style.display = `none`;
    closeImageBtn.style.display = `block`;
    image.style.display = `block`;
});

// Add event listener for `Click to close image` button
closeImageBtn.addEventListener(`click`, function () {
    // Show the `view image` button, hide the `close image` button and image
    closeImageBtn.style.display = `none`;
    viewImageBtn.style.display = `block`;
    image.style.display = `none`;
});