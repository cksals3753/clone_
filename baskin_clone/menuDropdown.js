/**
 * @filename : menuDropdown.js
 * @author : 문태호 (mun05170@gmail.com)
 * @description : 배스킨라빈스 메뉴바 영역 기능 구현
 */

const menuBar = document.querySelector(".menu_bar");
const nav = document.querySelector("nav");

nav.addEventListener("mouseover", () => {
  menuBar.style.height = 274 + 46 + "px";
});

menuBar.addEventListener("mouseout", () => {
  menuBar.style.height = "46px";
});
