const notiLi = document.querySelectorAll(".get");
let currentIndex = 0;

setInterval(() => {
  for (let i of notiLi) {
    i.classList = ".get home";
  }
  currentIndex = (currentIndex + 1) % notiLi.length;
  notiLi[currentIndex].classList.remove("home");
}, 5000); 

/* 프로모션 화살표 다운 & 업 */ 
const eventBox = document.querySelector("#promBtn");
var promotionBtn = "true";
const page = document.querySelector("#slide_border");

eventBox.addEventListener("click", function(e) {
        
  if(promotionBtn == "false") {
    promotionBtn = "true";
    e.currentTarget.innerHTML = '<img src="img/btn_prom_down.png"/>';
    page.style.display = "block";
                
    } else if (promotionBtn == "true") {
      promotionBtn = "false";
      e.currentTarget.innerHTML = '<img src="img/btn_prom_up.png"/>';
      page.style.display = "none";
    }
});





