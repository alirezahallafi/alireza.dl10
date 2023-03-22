// navbar variables
const toggleBtn = document.querySelector(".toggle-btn"),
  collapseMenu = document.querySelector(".collapse-menu"),
  //end navbar variables

  // slider variables
  nextBtn = document.querySelector(".right-btn"),
  prevBtn = document.querySelector(".left-btn"),
  slider = document.querySelector(".slider"),
  // end of slider variables

  // tabs variables
  tabsBtn = document.querySelectorAll(".tab-btn"),
  // coment section variable
  comentNextBtn = document.querySelector(".coment-slide .right-btn"),
  comentPrevBtn = document.querySelector(".coment-slide .left-btn"),
  comentSlider = document.querySelector(".coment-slider");
//end of coment section variable

// variable for slider
let indexHero = 0;
// variable for show class at fliter tabs
let showClass = "show";

// variable for coment section
let comentIndex = 0;

// navbar btn toggle
toggleBtn.addEventListener("click", () => {
  collapseMenu.classList.toggle("active");
});

// hero section slider
nextBtn.addEventListener("click", () => {
  indexHero += 100;
  if (indexHero > 200) indexHero = 0;
  slider.style = `transform: translateX(-${indexHero}%)`;
});
prevBtn.addEventListener("click", () => {
  indexHero -= 100;
  if (indexHero < 0) indexHero = 200;
  slider.style = `transform: translateX(-${indexHero}%)`;
});

// tab section

// active btn
tabsBtn.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    tabsBtn.forEach((tab) => tab.classList.remove("active"));
    tabBtn.classList.add("active");
  });
});

// fuction to filter the element
function filterSelection(filter) {
  const boxs = document.querySelectorAll(".col-tab");
  if (filter == "all") filter = "";
  for (let box of boxs) {
    classRemove(box);
    if (box.className.includes(filter)) displayElement(box);
  }
}

// fuction to display element
function displayElement(element) {
  let elementClass = element.className.split(" ");
  if (!elementClass.includes(showClass)) element.classList.add(showClass);
}
// function to remove show class
function classRemove(element) {
  let elementClass = element.className.split(" ");
  if (elementClass.includes(showClass))
    elementClass.splice(elementClass.indexOf(showClass), 1);

  element.className = elementClass.join(" ");
}
// EventListener whene the page is loded
window.addEventListener("load", () => {
  document.querySelectorAll(".tab-btn")[0].click();
});

// coment section
comentNextBtn.addEventListener("click", () => {
  comentIndex += 100;
  // call the fuction
  checkIndex();
  comentSlider.style = `transform: translateX(-${comentIndex}%)`;
});
comentPrevBtn.addEventListener("click", () => {
  comentIndex -= 100;
  // call the fuction
  checkIndex();
  comentSlider.style = `transform: translateX(-${comentIndex}%)`;
});

// display or undisplay next and prev btn of the slider
function checkIndex() {
  if (comentIndex >= 200) comentNextBtn.style.display = "none";
  else if (comentIndex <= 0) comentPrevBtn.style.display = "none";
  else {
    comentPrevBtn.style.display = "block";
    comentNextBtn.style.display = "block";
  }
}
