"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

const scrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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
