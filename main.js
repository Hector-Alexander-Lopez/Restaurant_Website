document
  .getElementsByClassName("breakfast")[0]
  .addEventListener("click", breakfast);

function breakfast() {
  if (window.matchMedia("(max-width: 481px)").matches) {
    document.querySelector(".first-section > section").style.height = "320px";
  } else {
    document.querySelector(".first-section > section").style.height = "460px";
  }

  document.querySelector(".bottom_img_section").style.display = "none";
  document.querySelector("#food-img1").style.backgroundImage =
    "url(images/breakfast1.jpg)";
  document.querySelector("#food-img2").style.backgroundImage =
    "url(images/breakfast2.jpg)";
  document.querySelector("#food-img3").style.backgroundImage =
    "url(images/breakfast3.jpg)";
  document.querySelector("#food-img4").style.backgroundImage =
    "url(images/breakfast4.jpg)";
  document.querySelector(".first-section").style.height = "50%";
}

document.getElementsByClassName("lunch")[0].addEventListener("click", lunch);

function lunch() {
  if (window.matchMedia("(max-width: 481px)").matches) {
    document.querySelector(".first-section > section").style.height = "320px";
  } else {
    document.querySelector(".first-section > section").style.height = "460px";
  }

  document.querySelector(".bottom_img_section").style.display = "none";
  document.querySelector("#food-img1").style.backgroundImage =
    "url(images/lunch1.jpg)";
  document.querySelector("#food-img2").style.backgroundImage =
    "url(images/lunch2.jpg)";
  document.querySelector("#food-img3").style.backgroundImage =
    "url(images/lunch3.jpg)";
  document.querySelector("#food-img4").style.backgroundImage =
    "url(images/lunch4.jpg)";
  document.querySelector(".first-section").style.height = "50%";
}

document.getElementsByClassName("dinner")[0].addEventListener("click", dinner);

function dinner() {
  if (window.matchMedia("(max-width: 481px)").matches) {
    document.querySelector(".first-section > section").style.height = "320px";
  } else {
    document.querySelector(".first-section > section").style.height = "460px";
  }

  document.querySelector(".bottom_img_section").style.display = "none";
  document.querySelector("#food-img1").style.backgroundImage =
    "url(images/dinner1.jpg)";
  document.querySelector("#food-img2").style.backgroundImage =
    "url(images/dinner2.jpg)";
  document.querySelector("#food-img3").style.backgroundImage =
    "url(images/dinner3.jpg)";
  document.querySelector("#food-img4").style.backgroundImage =
    "url(images/dinner4.jpg)";
  document.querySelector(".first-section").style.height = "50%";
}

document
  .getElementsByClassName("desserts")[0]
  .addEventListener("click", desserts);

function desserts() {
  if (window.matchMedia("(max-width: 481px)").matches) {
    document.querySelector(".first-section > section").style.height = "320px";
  } else {
    document.querySelector(".first-section > section").style.height = "460px";
  }

  document.querySelector(".bottom_img_section").style.display = "none";
  document.querySelector("#food-img1").style.backgroundImage =
    "url(images/dessert1.jpg)";
  document.querySelector("#food-img2").style.backgroundImage =
    "url(images/dessert2.jpg)";
  document.querySelector("#food-img3").style.backgroundImage =
    "url(images/dessert3.jpg)";
  document.querySelector("#food-img4").style.backgroundImage =
    "url(images/dessert4.jpg)";
  document.querySelector(".first-section").style.height = "50%";
}

document.getElementById("main-menu").addEventListener("click", specials);

function specials() {
  if (window.matchMedia("(max-width: 481px)").matches) {
    document.querySelector(".first-section > section").style.height = "320px";
  } else {
    document.querySelector(".first-section > section").style.height = "460px";
  }

  document.querySelector("#food-img1").style.backgroundImage =
    "url(images/special1.jpg)";
  document.querySelector("#food-img2").style.backgroundImage =
    "url(images/special2.jpg)";
  document.querySelector("#food-img3").style.backgroundImage =
    "url(images/special3.jpg)";
  document.querySelector("#food-img4").style.backgroundImage =
    "url(images/special4.jpg)";
}
