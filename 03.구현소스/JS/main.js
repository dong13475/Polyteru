// 웹프로젝트 POLYTERU JS - main.js

//////////// 로드구역 /////////////
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

  // GNB 마우스 오버시 서브메뉴 등장 변수 //

  // gnb밑의 li
  let li = document.querySelectorAll(".gnb>ul>li");
  // console.log(li);
  
  const move_top = document.querySelector(".move_top");
  // console.log(move_top);

  

  /********************************************** 
    상단 탑메뉴 햄버거 버튼 클릭시 토글기능구현
  **********************************************/
  // 1. 대상 : .ham(이벤트/변경), .gnb_bx(변경)
  const ham = document.querySelector(".ham");
  const gnb_bx = document.querySelector(".gnb_bx");
  // console.log(ham,gnb_bx);

  // 2. 이벤트설정
  ham.onclick = () => {
    ham.classList.toggle("on");
    gnb_bx.classList.toggle("on");
    document.body.classList.toggle("on");
    document.querySelector("html").classList.toggle("on");
  }; /////////// 햄버거버튼 클릭 함수 /////////

  /***************************************** 
    GNB 마우스 오버시 li 밑줄효과 (on,on2),
    두번째 li에 마우스 오버시 smenu보이기
  *****************************************/
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
      if (idx === 1) {
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

  /************************************** 
    [ 메인페이지 페이드 배너 넣기 함수 ]
    함수명 : go_fade
  **************************************/

  // 페이드박스 li 변수 //
  const fadeBx = document.querySelectorAll(".fade_bx li");
  // console.log(fadeBx);

  // 슬라이드번호 변수 :
  // 배너 이미지와 블릿을 통일시켜주는 중요한변수
  let snum = 0;
  // 페이드개수 변수
  let scnt = fadeBx.length;
  // console.log("페이드개수",scnt);
  
  const go_fade = (dir, seq) => {
    // dir-방향,seq-순번
    // console.log("페이드번호",dir,seq);
    if (dir) {
      // console.log("dir",dir);
      snum++;
      if (snum === scnt) snum = 0;
    } ///// if /////
    else {
      // dir이 0일경우(즉, 블릿클릭일때)
      snum = seq;
    } ///// else /////

    // 페이드 블릿 변경 함수호출
    chgBanner(fadeBx);
    chgBanner(bulit);
  }; ///////// go_fade 함수 //////////

  // 이벤트 대상 : .bulit
  const bulit = document.querySelectorAll(".bulit");
  // console.log(bulit);

  bulit.forEach((ele, idx) => {
    // 클릭이벤트는 부모인 li에 걸어줌!
    // (클릭영역이 너무 작아서...)
    ele.parentElement.onclick = () => {
      clearAuto();
      go_fade(0, idx);
    }; ///// click /////
  }); ///////// forEach ////////////

  /*********************************** 
    페이드 / 블릿 변경기능 공통함수
    함수명 : chgBanner
  ***********************************/
  function chgBanner(obj) {
    // 전체 리스트 초기화
    obj.forEach((ele) => ele.classList.remove("on"));
    // 해당순번 li에 클래스 "on" 넣기
    obj[snum].classList.add("on");
  } ////////// chgBanner 함수 /////////////

  // 페이드 블릿 변경 함수호출
  chgBanner(fadeBx);
  chgBanner(bulit);

  /************************************** 
    [ 인터발함수 설정하기 ]
    함수명 : autoFade
  **************************************/
  let autoI;
  function autoFade() {
    autoI = setInterval(() => go_fade(1, 0), 4000);
  } //////// autoFade함수 /////////

  // autoFade함수 호출!
  autoFade();

  /****************************************** 
    [ 블릿 클릭시 인터발함수 지우고 다시셋팅 ]
    함수명 : clearAuto
  ******************************************/
  let autoT;
  function clearAuto() {
    clearInterval(autoI);
    clearTimeout(autoT);
    autoT = setTimeout(autoFade, 3000);
  } /////// clearAuto함수 /////////

  // *** 태그넣기 ***
  // 그리드태그 hcode를 함수로 만들어 위쪽에 호출한다!
  // * 스크롤이벤트 / 함수 아래쪽에 써서 인식안되었음! *
  gridbxTags();
  // 스타일 그리드 태그넣기
  gridbxStyle();

  /********************************************************** 
    스크롤 등장액션 구현하기 (그리드영역,스타일영역,상단이동버튼)
  **********************************************************/

  // 스크롤 이벤트 셋팅 /////////
  window.addEventListener("scroll", () => {
    grid_item.forEach((ele, idx) => {
      classIt(ele, idx);
    }); //////// 그리드아이템 분기 forEach //////////
    s_item.forEach((ele, idx) => {
      classIt(ele, idx);
    }); /////////// 스타일 아이템 분기 forEach /////////
  }); ///////// scroll //////////////

  // 스크롤 그리드 등장대상: .item
  const grid_item = document.querySelectorAll(".item");
  // console.log(grid_item);
  // 스크롤 스타일 등장대상: .sitem
  const s_item = document.querySelectorAll(".sitem");
  // 화면높이값의 2/3구하기
  const whv = (window.innerHeight / 3) * 2;
  // console.log("2/3높이:",whv);
  // 등장액션 대상 위치값 리턴함수
  const retVal = (ele) => ele.getBoundingClientRect().top;

  // 대상의 위치값을 리턴해서 등장액션 클래스"on"주기 함수 //
  const classIt = (ele, idx) => {
    // ele - 등장요소, idx - 요소순번
    // 대상요소의 현재 스크롤 위치
    let grid_Val = retVal(ele);

    // 0보다 크고 화면의 2/3보다  작은 구간!
    if (grid_Val < whv && grid_Val > 0) {
      ele.classList.add("on");
      ele.style.transitionDelay = `${idx * 0.07}s`;
    } ////// 구간에 들어올시 "on"적용 if문 //////

    // 상단 이동버튼 클래스 on 넣기/빼기
    let scrl = window.scrollY;
    if (scrl > 600) {
      move_top.classList.add("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 if
    else {
      move_top.classList.remove("on");
    } // 상단 이동버튼 클래스 on 넣기/빼기 else
  }; ///////// classIt 함수 /////////

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

  // 2. more버튼 클릭시 item페이지 all로 이동
  const mvtn = document.querySelector(".more_bt");
  // console.log(mvtn);
  mvtn.onclick = () => {
    location.href = "item.html?item=all";
  }; /////// 버튼 click ////////////
  // 3. 스타일 more버튼 클릭시 style페이지로 이동
  const smvtn = document.querySelector(".btn2");
  // console.log(smvtn);
  smvtn.onclick = () => {
    location.href = "style.html";
  }; /////// 버튼 click ////////////

  /* 
    [ 질문할것 ]
    - 폰트 전체에 줄수있는지 (영문,한글따로)
    - 블릿요소 크기가 제각각 (따로 영역을 넓히는 방법)
      (common.css - 220)
    - 상단영역 max-width : 1300px 로 주고 부모박스에 
      배경색 흰색으로 해서 구분하는법 (common.css - 17)
    - 그리드 영역 스크롤액션 적용안됨 (common.css - 177)
    - 그리드영역 아이템박스 마우스 오버시 다음 이미지 나타내기
      (객체에서 "이미지1"을 "이미지2"로 변경) (main.js - 190)
  */

  // 오버시 상품 뒤면 이미지 변경하기
  // 대상: .iimg img
  // const iimg = document.querySelectorAll(".iimg img");
  // iimg.forEach(ele=>{
  //   ele.onmouseenter=()=>ele.setAttribute("src",ele.getAttribute("src").replace("1","2"));
  //   ele.onmouseleave=()=>ele.setAttribute("src",ele.getAttribute("src").replace("2","1"));
  //   // ele.onmouseleave=()=>ele.setAttribute(속성명,값);
  //   // ele.getAttribute("src").replace("2","1")
  //   // ele.getAttribute(속성명).replace(바뀔값,바꿀값)
  // });

  ///////////////////// grid구역 태그넣기 //////////////////////////
  function gridbxTags() {
    // 상품넣을 박스
    const gridbx = document.querySelector(".gridbx");

    // 상품객체만큼 화면에 태그 데이터바인딩하기
    let hcode = "";

    // //////////////////////// 수정된곳
    for (let x in gdsObj) {
      // x는 속성명
      hcode += `
      <div class="item">
        <a href="#" data-id="${x.replace("상품코드", "리스트")}">
            <div class="iimg">
              <img src="./images/item_imgs/all/${gdsObj[x]["이미지1"]}.jpg">
              <img src="./images/item_imgs/all/${gdsObj[x]["이미지2"]}.jpg">
            </div>
        </a>
        <div class="itxt">
          <div class="iname1">
            <a href="#" data-id="${x.replace("상품코드", "리스트")}">
              ${gdsObj[x]["상품명"]}
            </a>
          </div>
          <div class="ssn">
            ${gdsObj[x]["구분"]}
          </div>
          <span>${gdsObj[x]["가격"]}</span>
        </div>
      </div>
      `;
    } ////////// for in /////////

    // grid구역 태그넣기
    gridbx.innerHTML = hcode;
  } /////////////// gridbx_Tags함수 ////////////////////////

  ////////////// 스타일 그리드 구역 태그넣기 //////////////
  function gridbxStyle() {
    // 상품 넣을 박스
    const grid_style = document.querySelector(".grid_style");
    // console.log(grid_style);

    let scode = "";

    for (let x in gdsStyle) {
      scode += `
      <div class="sitem">
          <div class="simg">
            <img src="./images/item_imgs/style/${gdsStyle[x]["이미지1"]}.jpg">
            <img src="./images/item_imgs/style/${gdsStyle[x]["이미지2"]}.jpg">
          </div>
      </div>
    `;
    } /////////// for in ////////////

    // 스타일 구역 태그넣기
    grid_style.innerHTML = scode;
  } ///////////// gridbx_style 함수 /////////////

  // 링크 Fn함수 불러오기 - linksys.js
  linkFn();
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
