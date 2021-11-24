/**
 * @filename : slide.js
 * @author : 문태호 (mun05170@gmail.com)
 * @description : 배스킨라빈스 슬라이드 영역 기능 구현
 */

const slide = document.querySelector(".slide_list");
const slides = document.querySelectorAll(".slide");
const slideLeft = document.querySelector(".slide_arrow.left");
const slideRight = document.querySelector(".slide_arrow.right");
const slideCtrlBtns = document.querySelectorAll(".slide_ctrl_btn");

let slideNum = 0;

for (let btn of slideCtrlBtns) {
  btn.addEventListener("click", (e) => {
    slideNum = parseInt(e.currentTarget.dataset.page);
    slideBtnHandle();
  });
}

function slideChange() {
  slide.style.left = slideNum * -100 + "vw";
}

function slideBtnHandle() {
  for (let btn of slideCtrlBtns) {
    btn.classList = "slide_ctrl_btn";
  }
  document.getElementById("page" + slideNum).classList.add("active");
  slideChange();
}

function slideNumHandler(num) {
  slideNum += num;
  if (slideNum < 0) {
    slideNum = slides.legnth;
  }
  slideNum = slideNum % slides.length;
  slideBtnHandle();
}

slideLeft.addEventListener("click", () => slideNumHandler(-1));
slideRight.addEventListener("click", () => slideNumHandler(1));

slideBtnHandle();