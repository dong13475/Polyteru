//  POLYTERU item JS - item.js

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

  styleBx();

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
  const stit = document.querySelector(".style_tit");


    let hcode = "";
  
    hcode += `
      <div class="subNavi">
      <ul class="location">
          <a href="#">
          <li>HOME&nbsp;/ </li>
          </a>
          <li>&nbsp; STYLE</li>
          </ul>
          <div class="item_tit"> STYLE</div>
        </div>
        `;
    // 서브네비 태그넣기
    stit.innerHTML = hcode;

  
  const s_item = document.querySelectorAll(".sitem");
  // 아이템박스 로딩시 "on"주고 트랜지션 따로주기
  setTimeout(() => {
    s_item.forEach((ele, idx) => {
      ele.classList.add("on");
      ele.style.transitionDelay = `${idx * 0.1}s`;
    }); //////// 그리드아이템 분기 forEach //////////
  }, 200); //////////// 그리드 아이템 0.2초후에 등장 ///////////

  /****************************
    스타일 페이지 태그 넣기
  ****************************/
  function styleBx() {
    // 상품 넣을 박스
    const style_box = document.querySelector(".style_box");
    console.log(style_box);

    let scode = "";

    for (let x in gdsStyleAll) {
      scode += `
      <div class="sitem">
          <div class="simg">
            <img src="./images/item_imgs/styleall/${gdsStyleAll[x]["이미지1"]}.jpg">
          </div>
      </div>
    `;
    } /////////// for in ////////////

    // 스타일 구역 태그넣기
    style_box.innerHTML = scode;
  } ///////////// styleBx 함수 /////////////

  /*************************************** 
    .simg에 마우스 오버시 클래스 .on추가
  ***************************************/
  const simg = document.querySelectorAll(".simg");
  simg.forEach((ele)=>{
    ele.onmouseenter = () => {
      ele.classList.add("on");
    };
    ele.onmouseleave = () => {
      ele.classList.remove("on");
    };
  });
  

  // /***********************************************
  //   linksys.js에서 넘어온 url 받기
  // ***********************************************/
  // // 넘어온 url 받기! pm -> 전달값변수
  // let pm = location.href;
  // console.log("pm:", pm);
  // // location.href 가 이퀄 오른쪽에 있으면 url주소 읽어옴!

  // // 문자열 잘라서 값 읽어오기
  // // -> 물음표로 잘라서 두번째값, 이퀄로 잘라서 두번째값
  // pm = pm.split("?")[1].split("=")[1];

  // // pm값 특수문자 복원하기
  // pm = decodeURIComponent(pm);

  // console.log("그래서 pm은?", pm);

  // // 그리드 / 타이틀 등장 함수에 파리미터로 pm값 보내기
  // changeItem(pm);
  // changeTit(pm);
  linkFn();
}); ////////////////// 로드구역 ///////////////////
//////////////////////////////////////////////////
