const slider = document.querySelector(".slider");
const sliderInner = document.querySelector(".slider__inner");
const slides = document.querySelectorAll(".slider__inner__slide");
const sliderCenterLeft = slider.getBoundingClientRect().width / 2 - 20;
const sliderCenterRight = slider.getBoundingClientRect().width / 2 + 20;

let grabbed = false;

sliderInner.addEventListener("mousedown", e => {
  grabbed = true;
  slider.style.cursor = "grabbing";
});

sliderInner.addEventListener("mouseup", e => {
  grabbed = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", e => {
  grabbed = false;
  slider.style.cursor = "grab";
});

sliderInner.addEventListener("mousemove", e => {
  if (grabbed) {
    //mousemove.scrollLeft = amount of pixels the inner element has moved
    //mousemove.movementX = difference between previous and current mouse pos
    slider.scrollLeft = slider.scrollLeft - e.movementX;
  }
});

sliderInner.addEventListener("wheel", e => {
  e.preventDefault();
  //scroll is dictated by mouse scroll
  slider.scrollLeft = slider.scrollLeft + e.deltaY / 2;
});

//to display data later

// const options = {};
// const callback = entries => {
//   entries.forEach(entry => {
//     if (entry.boundingClientRect.right <= slider.getBoundingClientRect().x) {
//       entry.target.removeAttribute(["data-id"]);
//       entry.target.nextElementSibling.setAttribute(["data-id"], "active");
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);
// slides.forEach(slide => {
//   observer.observe(slide);
// });
