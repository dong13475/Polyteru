//  POLYTERU item JS - item.js

/////////////////// 로드구역 ///////////////////////////
window.addEventListener("DOMContentLoaded", () => {
  // console.log("로딩완료!");

  // 드래그 방지 함수 //
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  // 새로고침시 스크롤 맨위로 //
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); // 0.1초정도는 줘야효과있음!

  // 메인영역 태그넣기함수 호출
  subPageMain();

  /****************************************** 
    상단 이동버튼 스크롤시 클래스 on 넣기/빼기
  ******************************************/
  // 버튼박스 변수지정
  const move_top = document.querySelector(".move_top");
  // console.log(move_top);
  window.addEventListener("scroll", () => {
    let scrl = window.scrollY;
    if (scrl > 600) {
      move_top.classList.add("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 if
    else {
      move_top.classList.remove("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 else
  }); ////////// scroll ///////////////

  /********************************************** 
    버튼클릭 이벤트들 (상단이동버튼, more버튼 2개)
    부드러운 스크롤 pos 스크롤 위치값 업데이트필요!
  **********************************************/
  // 1. move_top 클릭시 상단이동함수
  move_top.onclick = (e) => {
    // 기본이동막기
    // 전달변수 e대신 바로 event.preventDefault를 쓰면
    // 문서 전역에 클릭이벤트가 적용된다!
    e.preventDefault();
    // 부드러운 스크롤 전역 스크롤 값을
    // 0으로 변경하여 위치값 일치시킴!
    pos = 0;
    // 위치이동하기
    window.scrollTo(0, 0);
  }; /////// click //////////

  /********************************************** 
    상단 탑메뉴 햄버거 버튼 클릭시 토글기능구현
  **********************************************/
  // 1. 대상 : .ham(이벤트/변경), .gnb_bx(변경), body, html
  const ham = document.querySelector(".ham");
  const gnb_bx = document.querySelector(".gnb_bx");
  // console.log(ham,gnb_bx);

  // 대상 배열에 담아 클릭시 한번에 "on"주기
  let click_ham = [ham, gnb_bx, document.body, document.querySelector("html")];
  // console.log(click_ham);
  // 2. 이벤트설정
  ham.onclick = () => {
    for (let x of click_ham) {
      x.classList.toggle("on");
    }
  }; /////////// 햄버거버튼 클릭 함수 /////////

  /*************************************** 
    GNB 마우스 오버시 li 밑줄효과 (on,on2)
  ***************************************/

  // GNB 마우스 오버시 서브메뉴 등장 변수 //
  // gnb밑의 li
  let li = document.querySelectorAll(".gnb>ul>li");
  // console.log(li);
  // .smenu
  const smenu = document.querySelector(".smenu");
  // .smenu ol 의 높이변수
  let shv = smenu.querySelector(".smenu ol").clientHeight;
  // console.log(shv);

  li.forEach((ele, idx) => {
    ele.onmouseenter = () => {
      // 마우스오버시 클래스 on주고 on2지우기
      ele.classList.add("on");
      ele.classList.remove("on2");
      // 두번째 li에 오버시 smenu보이기
      if (idx == 1) {
        smenu.style.opacity = 1;
        smenu.style.height = shv + "px";
      } //////// if /////////
    }; /////// mouseenter ////////
    ele.onmouseleave = () => {
      // 마우스아웃시 클래스 on2주기
      ele.classList.add("on2");
      ele.classList.remove("on");
      // 두번째 li에 아웃시 smenu 안보이기
      if (idx == 1) {
        smenu.style.opacity = 0;
        smenu.style.height = 0;
      } //////// if ////////
    }; ////// mouseleave ///////
  }); /////// forEach ////////

  ///////////////// 여기까지 공통영역 //////////////////

  /***************************** 
  서브페이지 페이드함수 만들기
  *****************************/
  // 페이드 li 변수
  let fadeList = document.querySelectorAll(".fade li");
  // console.log(fadeList);
  // 페이드 번호 변수
  let snum = 0;

  // const fade = () => {
    setInterval(() => {
      fadeList.forEach((ele) => {
        // 분기한 li에 on을 지우고
        ele.classList.remove("on");
      }); ////// forEach ////////

      // li에 snum숫자대로 on을 넣기
      fadeList[snum].classList.add("on");
      // 이때 snum은 1씩 증가한다
      snum++;
      // snum의 수가 li갯수보다 같거나 많이지면
      // snum은 다시 0으로 돌아감
      if (snum >= fadeList.length) snum = 0;
    }, 1800); // 페이드 타임아웃 함수
  // }; //////////// fade함수 ////////////////
  // fade함수 호출
  // fade();

  ////////////////// 메인영역 태그넣기 ////////////////
  function subPageMain() {
    // 태그 넣을 영역
    const item_list = document.querySelector(".item_list ul");

    // 태그담을 변수
    let main_code = "";

    /* 
      <img src="./images/item_imgs/${subPage_item[x]["구분"]}/${subPage_item[x]["경로"]}/${subPage_item[x]["경로"]}Full/${subPage_item[x]["전체"]}${cnt}.jpg" alt="이미지">
      */
    // <li class="on">
    //   <img src="./images/item_imgs/outer/light_puffer/light_pufferFull/light_pufferF1.jpg" alt="이미지">
    // </li>
    // <li>
    //   <img src="./images/item_imgs/outer/light_puffer/light_pufferFull/light_pufferF2.jpg" alt="이미지">
    // </li>
    // <li>
    //   <img src="./images/item_imgs/outer/light_puffer/light_pufferFull/light_pufferF3.jpg" alt="이미지">
    // </li>
    // <li>
    //   <img src="./images/item_imgs/outer/light_puffer/light_pufferFull/light_pufferF4.jpg" alt="이미지">
    // </li>
    // <li>
    //   <img src="./images/item_imgs/outer/light_puffer/light_pufferFull/light_pufferF5.jpg" alt="이미지">
    // </li>
    //////////////////// 수정된곳 /////////////////////
    let pm = decodeURIComponent(location.href.split("?")[1].split("=")[1]);
    // console.log("ㅎㅎ", pm);


    // 배너 Full 이미지 함수
    let makeListF = (num) => {
      return `
        <li>
          <img src="./images/item_imgs/${subPage_item[pm]["구분"]}/${subPage_item[pm]["경로"]}/${subPage_item[pm]["경로"]}Full/${subPage_item[pm]["전체"] + num}.jpg" alt="이미지">
        </li>
      `;
    }; ////////// makeListF //////////
    // 태그변수
    let fCode = "";
    // 전체수 코드더하기
    for(let x = 1; x <= subPage_item[pm]["전체수"]; x++){
      fCode += makeListF(x);
    } ////////// for ///////////////

    // 아이템 Detail 이미지 함수
    let makeListD = (num) => {
      return `
        <li class>
          <img src="./images/item_imgs/${subPage_item[pm]["구분"]}/${subPage_item[pm]["경로"]}/${subPage_item[pm]["경로"]}Detail/${subPage_item[pm]["디테일"] + num}.jpg" alt="이미지">
        </li>
      `;
    }; ////////// makeListD //////////
    // 태그변수
    let dCode = "";
    // 디테일수 코드더하기
    for(let y = 1; y <= subPage_item[pm]["디테일수"]; y++){
      dCode += makeListD(y);
    } ////////// for ///////////////

    
    main_code += `
        <!---------- 플렉스 섹션 1 ---------->
        <li class="sec1">
          <div class="stk_bx">
            <ul class="fade">
              ${fCode}
            </ul>
          </div>
          </li>
          
        <!---------- 플렉스 섹션 2 ---------->
        <li class="sec2">
          <!-- 섹션 속박스 -->
          <div class="sec2_detail">
            <h2>${subPage_item[pm]["상품명"]}</h2>
            <h3>${subPage_item[pm]["가격"]}</h3>
            <!-- 적립금 -->
            <ol class="point">
              <li>적립금</li>
              <li>3％ ⓘ</li>
            </ol>
            <!-- 배송비 -->
            <ol class="shipping">
              <li>배송비</li>
              <li>
                무료 <br />
                제주 3,000원, 제주 외 도서 산간 <br />
                4,500원 추가
              </li>
            </ol>
            <!-- 수량조건 -->
            <ol class="count">
              <li>수량 조건</li>
              <li>
                주문당 최대 1개
                <br />
                회원당 최대 1개
              </li>
            </ol>
            <div class="sizetit">
              <h2>SIZE</h2>
            </div>
            <div class="size-select">
              <select>
                <option value="">선택해주세요</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
              </select>
            </div>
            <!-- 주문 수량 -->
            <ol class="scount">
              <li>주문 수량</li>
              <li>0개</li>
            </ol>
            <!-- 총상품 금액 -->
            <ol class="total">
              <li>총 상품 금액</li>
              <li>0원</li>
            </ol>
            <!-- 구매 / 장바구니 버튼 -->
            <ol class="buy">
              <div class="buying">
                구매하기
              </div>
              <div class="cart">
                장바구니
              </div>
            </ol>
            <!-- 상품 설명 텍스트 -->
            <!-- 상품 상세 이미지 -->
          </div>
            <section class="main_dimg">
              <div class="mimg">
                ${dCode}
              </div>
            </section>
        </li>
        `;
    // } //////////// for in ///////////
    // 메인영역 태그넣기
    item_list.innerHTML = main_code;
  } /////////// subPageMain 함수 ////////////////////
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
