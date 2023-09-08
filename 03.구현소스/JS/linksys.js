// 폴리테루 링크시스템 JS - linksys.js

////////// 로딩구역 ///////////
window.addEventListener("DOMContentLoaded",linkFn);

////// 링크시스템 로드함수 ////////
function linkFn(){
  // console.log("링크완료!")

  // 링크 대상 선정 :
  // (1) sli : .smenu a
  const sli = document.querySelectorAll(".smenu a");
  // console.log(sli);
  // (2) 로고 : .logo a
  const logo = document.querySelector(".logo a");
  // console.log(logo);


  // 클릭이벤트 설정하기
  // (1) sli 클릭설정 ///////
  for(let x of sli){
    x.onclick = (e) => {
      // 클릭이동막기
      e.preventDefault();

      // 클릭된 a요소 텍스트 읽기
      let atxt = x.innerText.toLowerCase().trim();

      // console.log("넌뭐야",atxt)

      // 서브페이지 이동하기
      if(atxt !== ""){
        location.href = "item.html?item="
        +encodeURIComponent(atxt);
      } ////// if ////////
    }; ////////// click ///////////
  } ////////// for of ////////////

  // (2) 로고 클릭설정
  logo.onclick = (e) => {
    e.preventDefault();

    // 홈으로 이동하기
    location.href = "./index.html";
  }; ///////// click /////////


  /********************************************** 
    각각 아이템 클릭시 itemdetail 페이지로 이동
  **********************************************/
    const allItem = document.querySelectorAll(".item a[href='#']");
    // console.log("아이템페이지는?",allItem);


    // 수정한곳
    allItem.forEach((ele)=>{
      ele.onclick = () => {
        location.href = "itemdetail.html?item="+ele.getAttribute("data-id");
      } ///// click //////
    }); //////// forEach //////////

  /************* 
    STYLE,ABOUT 클릭
  *************/
  const about = document.querySelectorAll(".gnb>ul>li");
  console.log(about[4]);
  // ABOUT클릭시 이동
  about[4].onclick = () => {
    location.href = "introduce.html";
  };
  // STYLE클릭시 이동
  about[2].onclick = () => {
    location.href = "style.html";
  };


  
} /////////// linkFn 함수 //////////////


/*********************************************************** 
  현재 수정해야하는 기능

  1. get방식 이동 문제
  index.html 에서 .smenu a를 클릭시 item.html 페이지로 
  이동하는데 item.html 싱글페이지여서 첫로딩은 어떤 a요소를 
  클릭해도 처음페이지로 이동하고 그후에 각각요소 클릭시
  display:none/block 이 적용된다.
  따라서 index.html 에서 네비li 클릭시 바로 이동이되게해야함  


  현재 구현하고싶은 기능

  2. 두번째 서브페이지 코드 뿌리기
  아이템요소 클릭시 itemdetail.html로 이동하는데 현재 
  html태그를 자바스크립트로 뿌려 이미지 경로나 아이템 이름같이
  요소에 맞게 바뀌어야 할부분에 객체 subPage_item 에서 
  ${}로 아이템에 맞게 구분해서 뿌려주게하기

  *** 궁금한것 ***
  함수를 이벤트 발생시 비활성화 시킬수 있는지
  예를 들면 상단 부분과 상단이동버튼은 모든 페이지 공통이니까 
  메인페이지에 공통부분을 두고 메인영역 부분만 페이지별로 함수로
  만들어 첫로딩시 main.js 함수가 호출되어 메인페이지가 로딩되고
  style을 클릭시 main함수 비활성화되고 style.js 함수가 호출되어
  페이지 로딩없이 바꿀수 있는지

***********************************************************/