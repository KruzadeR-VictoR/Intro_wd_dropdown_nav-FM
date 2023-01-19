const featureBtn = document.querySelector(".features");
const companyBtn = document.querySelector(".company");
const fArrw = document.querySelector(".f-arrow");
const cArrw = document.querySelector(".c-arrow");
const dropdown = document.querySelector(".dropdown-menu");
const dropdownCompany = document.querySelector(".dropdown-company");

const control = document.querySelector(".control");
const mobile = document.querySelector(" .mobile .menulist");
const section = document.querySelector("main");

control.addEventListener("click", () => {
  mobile.classList.toggle("toggle-menu");
  section.classList.toggle("overlay");
  if (control.src.includes("close")) {
    control.src = "./images/icon-menu.svg";
  } else {
    control.src = "./images/icon-close-menu.svg";
  }
});

// Features Dropdown
featureBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("active");
  fArrw.classList.toggle("arrow");
  // displays one dropdown at a time
  dropdownCompany.classList.remove("active");
  cArrw.classList.remove("arrow");
});

// Company Dropdown
companyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownCompany.classList.toggle("active");
  cArrw.classList.toggle("arrow");
  // displays one dropdown at a time
  dropdown.classList.remove("active");
  fArrw.classList.remove("arrow");
});

//| Mobile Dropdown
const featureMobile = document.querySelector(".feature-mobile");
const dropdownMobile = document.querySelector(".dropdown-feature");
const fAr = document.querySelector(".f-arrw");
const compMobile = document.querySelector(".company-mobile");
const compDropdownMobile = document.querySelector(".dropdown-comp");
const cAr = document.querySelector(".c-arrw");

featureMobile.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMobile.classList.toggle("active");
  fAr.classList.toggle("arrow");
});
compMobile.addEventListener("click", (e) => {
  e.preventDefault();
  compDropdownMobile.classList.toggle("active");
  cAr.classList.toggle("arrow");
});

//| Animation
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({ defaults: { duration: 1, stagger: { amount: 1 } } });

tl.from(".navbar", {
  y: -100,
  duration: 1,
  opacity: 0,
});

tl.from(".caption", {
  y: 100,
  opacity: 0,
});

gsap.from(".right img", {
  x: 200,
  opacity: 0,
  duration: 2,
});
