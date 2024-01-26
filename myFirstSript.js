let clickableImage = document.getElementById("clickableImage");
let hiddenImage = document.getElementById("hiddenImage");
let clickableImage2 = document.getElementById("clickableImage2");
let hiddenImage2 = document.getElementById("hiddenImage2");
let clickableImage3 = document.getElementById("clickableImage3");
let hiddenImage3 = document.getElementById("hiddenImage3");
let clickableImage4 = document.getElementById("clickableImage4");
let hiddenImage4 = document.getElementById("hiddenImage4");
let first_text = document.getElementById("first-text");
let second_text = document.getElementById("second-text");
let third_text = document.getElementById("third-text");
let fourth_text = document.getElementById("fourth-text");

clickableImage.addEventListener("click", function () {
  prosper(clickableImage, hiddenImage);
});
clickableImage.addEventListener("click", function () {
  hello(first_text);
});

hiddenImage.addEventListener("click", function () {
  paul(hiddenImage, clickableImage);
});
hiddenImage.addEventListener("click", function () {
  hi(first_text);
});
clickableImage2.addEventListener("click", function () {
  prosper(clickableImage2, hiddenImage2);
});
clickableImage2.addEventListener("click", function () {
  hello(second_text);
});
hiddenImage2.addEventListener("click", function () {
  paul(hiddenImage2, clickableImage2);
});
hiddenImage2.addEventListener("click", function () {
  hi(second_text);
});
clickableImage3.addEventListener("click", function () {
  prosper(clickableImage3, hiddenImage3);
});
clickableImage3.addEventListener("click", function () {
  hello(third_text);
});
hiddenImage3.addEventListener("click", function () {
  paul(hiddenImage3, clickableImage3);
});
hiddenImage3.addEventListener("click", function () {
  hi(third_text);
});
clickableImage4.addEventListener("click", function () {
  prosper(clickableImage4, hiddenImage4);
});
clickableImage4.addEventListener("click", function () {
  hello(fourth_text);
});
hiddenImage4.addEventListener("click", function () {
  paul(hiddenImage4, clickableImage4);
});
hiddenImage4.addEventListener("click", function () {
  hi(fourth_text);
});

function prosper(firstimage, secondimage) {
  firstimage.style.display = "none";
  secondimage.style.display = "block";
}
function paul(secondimage, firstimage) {
  secondimage.style.display = "none";
  firstimage.style.display = "block";
}

function hello(text) {
  text.style.display = "block";
}
function hi(text) {
  text.style.display = "none";
}
