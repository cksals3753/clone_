/**
 * @filename : footerDropdown.js
 * @author : 전찬민 (cksals3753@gmail.com)
 * @description : 배스킨라빈스 Footer바 영역 기능 구현
 */


/* 드롭다운 */
    document.querySelector(".drop").addEventListener("submit", e => {
        e.preventDefault();

        // dropdown 객체
        const dropdown = document.querySelector("#subject");
        // 선택된 항목의 index -> <option>의 순서대로 0,1,2,3
        const choose = dropdown.selectedIndex;
        if (choose == 0) {
            return;
        }

          
    });
