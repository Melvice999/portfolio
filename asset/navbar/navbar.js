let mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

let button = document.querySelector("button").getElementsByTagName("span");
let animate = document.querySelector("#span-scroll").classList;
let logo = document.querySelector("img");
let list = document.querySelector(".main_list").getElementsByTagName("a");
let delay = 100;

window.onscroll = function (event) {
  let scroll = window.scrollY;

  if (scroll > 1) {
    // adding animate
    animate.add("span-scroll");

    // change nav list color
    for (let a = 0; a < list.length; a++) {
      let lists = list[a];
      lists.style.color = "black";
    }

    // change color span button
    for (let a = 0; a < button.length; a++) {
      let target = button[a];
      target.style.backgroundColor = "black";
    }

    // change logo
    setTimeout(() => {
      logo.src = "./asset/img/logo-dark.png";
    }, delay);
  }

  if (scroll === 0) {
    // replace animate
    animate.remove("span-scroll");
    animate.add("span-back");

    // change nav list color
    for (let a = 0; a < list.length; a++) {
      let lists = list[a];
      lists.style.color = "white";
    }

    // change color span button
    for (let a = 0; a < button.length; a++) {
      let target = button[a];
      target.style.backgroundColor = "white";
    }

    // change logo
    setTimeout(() => {
      logo.src = "./asset/img/logo-light.png";
    }, delay);
  }
};
