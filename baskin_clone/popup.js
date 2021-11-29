/**
 * @filename : popup.js
 * @author : 문태호 (mun05170@gmail.com)
 * @description : 배스킨라빈스 팝업 배너 기능 구현
 */

// 스크롤을 내리면 팝업 배너의 height = 0 으로 변환
window.addEventListener("scroll", (e) => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const popup = document.querySelector(".popup_img");
  if (scrollY > 185) {
    popup.style.height = "0px";
  }
});
