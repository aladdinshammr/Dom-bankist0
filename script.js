"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const scrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabContainer = document.querySelector(".operations__tab-container");
const allTabs = document.querySelectorAll(".operations__tab");
const allContents = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

///////////////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

scrollTo.addEventListener("click", function (e) {
  const s1cort = section1.getBoundingClientRect();
  console.log(s1cort);
  console.log(`current scroll ${window.pageXOffset} ${window.pageYOffset}`);

  console.log(
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1cort.left + window.pageXOffset,
  //   s1cort.top + window.pageYOffset
  // );

  // old school way

  // window.scrollTo({
  //   left: s1cort.left + window.pageXOffset,
  //   top: s1cort.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

// document.querySelectorAll(".nav__link").forEach((ele) =>
//   ele.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   })
// );

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document
      .getElementById(id.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  }
});

//Tabbed componunt

tabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;
  allTabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  allContents.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

////////////////////////////////////////////////////

const handleMouse = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    // const parent = link.closest("nav");
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const img = link.closest(".nav").querySelector(".nav__logo");
    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
    img.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleMouse.bind("0.5"));

nav.addEventListener("mouseout", handleMouse.bind("1"));

////////////////////////////////////////////////////

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget);
// });
