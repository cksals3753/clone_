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
setInterval(() => slideNumHandler(1), 3000);

// 스크롤을 내리면 팝업 배너의 height = 0 으로 변환
window.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const popup = document.querySelector(".popup_img");
  if (scrollY > 185) {
    popup.style.height = "0px";
  }
});

const eventSlide = document.querySelector(".event_slide_list");
const eventSlides = document.querySelectorAll(".event_slide");
const eventSlideCtrlBtns = document.querySelectorAll(".event_ctrl_btn");

let eventSlideNum = 0;

function eventSlideChange() {
  eventSlide.style.left = eventSlideNum * -1220 + "px";
}

function eventSlideBtnHandler() {
  for (let btn of eventSlideCtrlBtns) {
    btn.classList = "event_ctrl_btn";
  }
  document
    .querySelector(".event_ctrl_btn:nth-child(" + (eventSlideNum + 1) + ")")
    .classList.add("active");
  eventSlideChange();
}

for (let btn of eventSlideCtrlBtns) {
  btn.addEventListener("click", (e) => {
    console.log(parseInt(e.currentTarget.dataset.page));
    eventSlideNum = parseInt(e.currentTarget.dataset.page);
    eventSlideBtnHandler();
  });
}
