// ALL ITEM 그리드 데이터 JS - allData.js //


// main.js 그리드 데이터 //
const gdsObj={

  "상품코드1":{
    "상품명":"balloon coat",
    "구분":"outer",
    "가격":"324,000원",
    "이미지1":"balloon1",
    "이미지2":"balloon2",
  },
  "상품코드2":{
    "상품명":"big cargo pants",
    "구분":"bottom",
    "가격":"185,000원",
    "이미지1":"cargo1",
    "이미지2":"cargo2",
  },
  "상품코드3":{
    "상품명":"hanabi (fireworks) pants",
    "구분":"bottom",
    "가격":"168,000원",
    "이미지1":"hanabi1",
    "이미지2":"hanabi2",
  },
  "상품코드4":{
    "상품명":"hooded parka",
    "구분":"outer",
    "가격":"274,000원",
    "이미지1":"parka1",
    "이미지2":"parka2",
  },
  "상품코드5":{
    "상품명":"side line polo knit",
    "구분":"top",
    "가격":"153,000원",
    "이미지1":"polo1",
    "이미지2":"polo2",
  },
  "상품코드6":{
    "상품명":"round neck sleeve",
    "구분":"top",
    "가격":"69,000원",
    "이미지1":"round1",
    "이미지2":"round2",
  },
  "상품코드7":{
    "상품명":"sweat pants 2.0",
    "구분":"bottom",
    "가격":"145,000원",
    "이미지1":"sweat1",
    "이미지2":"sweat2",
  },
  "상품코드8":{
    "상품명":"tenco loosed shirt 2.0",
    "구분":"top",
    "가격":"168,000원",
    "이미지1":"tenco1",
    "이미지2":"tenco2",
  },
}; ////////////// gdsObj 객체 /////////

// main.js 스타일 객체 ///////////
const gdsStyle={
  "스타일1":{
    "이미지1":"1",
    "이미지2":"2",
  },
  "스타일2":{
    "이미지1":"3",
    "이미지2":"4",
  },
  "스타일3":{
    "이미지1":"5",
    "이미지2":"6",
  },
  "스타일4":{
    "이미지1":"7",
    "이미지2":"8",
  },
  "스타일5":{
    "이미지1":"9",
    "이미지2":"10",
  },
}; /////////// gdsStyle 객체 //////////

// 스타일 페이지 그리드 객체 ///////////
const gdsStyleAll={
  "스타일1":{
    "이미지1":"1",
  },
  "스타일2":{
    "이미지1":"2",
  },
  "스타일3":{
    "이미지1":"3",
  },
  "스타일4":{
    "이미지1":"4",
  },
  "스타일5":{
    "이미지1":"5",
  },
  "스타일6":{
    "이미지1":"6",
  },
  "스타일7":{
    "이미지1":"7",
  },
  "스타일8":{
    "이미지1":"8",
  },
  "스타일9":{
    "이미지1":"9",
  },
  "스타일10":{
    "이미지1":"10",
  },
  "스타일11":{
    "이미지1":"11",
  },
  "스타일13":{
    "이미지1":"13",
  },
  "스타일14":{
    "이미지1":"14",
  },
  "스타일15":{
    "이미지1":"15",
  },
  "스타일16":{
    "이미지1":"16",
  },
  "스타일17":{
    "이미지1":"17",
  },
  "스타일18":{
    "이미지1":"18",
  },
  "스타일19":{
    "이미지1":"19",
  },
}; /////////// gdsStyleAll 객체 //////////

// 서브아이템(item.js / itemdetail.js) 페이지 객체 ///////////
const subPage_item = {
  "리스트1":{
    "상품명":"balloon coat",
    "경로":"balloon",
    "가격":"324,000원",
    "구분":"outer",
    "이미지1":"balloon1",
    "이미지2":"balloon2",
    "전체":"balloonF",
    "디테일":"balloonD",
    "전체수":5,
    "디테일수":4,
  },
  "리스트2":{
    "상품명":"big cargo pants",
    "경로":"cargo",
    "가격":"185,000원",
    "구분":"bottom",
    "이미지1":"cargo1",
    "이미지2":"cargo2",
    "전체":"cargoF",
    "디테일":"cargoD",
    "전체수":4,
    "디테일수":3,
  },
  "리스트3":{
    "상품명":"hanabi (fireworks) pants",
    "경로":"hanabi",
    "가격":"168,000원",
    "구분":"bottom",
    "이미지1":"hanabi1",
    "이미지2":"hanabi2",
    "전체":"hanabiF",
    "디테일":"hanabiD",
    "전체수":5,
    "디테일수":5,
  },
  "리스트4":{
    "상품명":"hooded parka",
    "경로":"parka",
    "가격":"274,000원",
    "구분":"outer",
    "이미지1":"parka1",
    "이미지2":"parka2",
    "전체":"parkaF",
    "디테일":"parkaD",
    "전체수":4,
    "디테일수":5,
  },
  "리스트5":{
    "상품명":"side line polo knit",
    "경로":"polo",
    "가격":"153,000원",
    "구분":"top",
    "이미지1":"polo1",
    "이미지2":"polo2",
    "전체":"poloF",
    "디테일":"poloD",
    "전체수":3,
    "디테일수":4,
  },
  "리스트6":{
    "상품명":"round neck sleeve",
    "경로":"round",
    "가격":"69,000원",
    "구분":"top",
    "이미지1":"round1",
    "이미지2":"round2",
    "전체":"roundF",
    "디테일":"roundD",
    "전체수":5,
    "디테일수":5,
  },
  "리스트7":{
    "상품명":"sweat pants 2.0",
    "경로":"sweat",
    "가격":"145,000원",
    "구분":"bottom",
    "이미지1":"sweat1",
    "이미지2":"sweat2",
    "전체":"sweatF",
    "디테일":"sweatD",
    "전체수":5,
    "디테일수":5,
  },
  "리스트8":{
    "상품명":"tenco loosed shirt 2.0",
    "경로":"tenco",
    "가격":"168,000원",
    "구분":"top",
    "이미지1":"tenco1",
    "이미지2":"tenco2",
    "전체":"tencoF",
    "디테일":"tencoD",
    "전체수":4,
    "디테일수":4,
  },
  "리스트9":{
    "상품명":"light puffer jacket",
    "경로":"light_puffer",
    "가격":"335,000원",
    "구분":"outer",
    "이미지1":"light_puffer1",
    "이미지2":"light_puffer2",
    "전체":"light_pufferF",
    "디테일":"light_pufferD",
    "전체수":5,
    "디테일수":5,
  },
  "리스트10":{
    "상품명":"padded vest 2.0",
    "경로":"vest",
    "가격":"215,000원",
    "구분":"outer",
    "이미지1":"vest1",
    "이미지2":"vest2",
    "전체":"vestF",
    "디테일":"vestD",
    "전체수":4,
    "디테일수":3,
  },
  "리스트11":{
    "상품명":"rugby knit",
    "경로":"rugby",
    "가격":"138,000원",
    "구분":"top",
    "이미지1":"rugby1",
    "이미지2":"rugby2",
    "전체":"rugbyF",
    "디테일":"rugbyD",
    "전체수":4,
    "디테일수":4,
  },
  "리스트12":{
    "상품명":"liso denim",
    "경로":"liso",
    "가격":"164,000원",
    "구분":"bottom",
    "이미지1":"liso1",
    "이미지2":"liso2",
    "전체":"lisoF",
    "디테일":"lisoD",
    "전체수":4,
    "디테일수":4,
  },
  "리스트13":{
    "상품명":"leather boots - black vegetable(반무광)",
    "경로":"boots",
    "가격":"314,000원",
    "구분":"acc",
    "이미지1":"boots1",
    "이미지2":"boots2",
    "전체":"bootsF",
    "디테일":"bootsD",
    "전체수":2,
    "디테일수":2,
  },
  "리스트14":{
    "상품명":"ring sandals 2.0 - black",
    "경로":"ring",
    "가격":"154,000원",
    "구분":"acc",
    "이미지1":"ring1",
    "이미지2":"ring2",
    "전체":"ringF",
    "디테일":"ringD",
    "전체수":3,
    "디테일수":3,
  },
  "리스트15":{
    "상품명":"round mule 2.0",
    "경로":"mule",
    "가격":"198,000원",
    "구분":"acc",
    "이미지1":"mule1",
    "이미지2":"mule2",
    "전체":"muleF",
    "디테일":"muleD",
    "전체수":4,
    "디테일수":3,
  },
  "리스트16":{
    "상품명":"loosed sweat shirt",
    "경로":"loosed",
    "가격":"97,000원",
    "구분":"top",
    "이미지1":"loosed1",
    "이미지2":"loosed2",
    "전체":"loosedF",
    "디테일":"loosedD",
    "전체수":5,
    "디테일수":4,
  },
  "리스트17":{
    "상품명":"tenco 1/2 shirts",
    "경로":"tencoh",
    "가격":"123,000원",
    "구분":"top",
    "이미지1":"tencoh1",
    "이미지2":"tencoh2",
    "전체":"tencohF",
    "디테일":"tencohD",
    "전체수":5,
    "디테일수":6,
  },
  "리스트18":{
    "상품명":"gosima pants (flare chino)",
    "경로":"gosima",
    "가격":"163,000원",
    "구분":"bottom",
    "전체":"gosimaF",
    "디테일":"gosimaD",
    "전체수":5,
    "디테일수":5,
    "이미지1":"gosima1",
    "이미지2":"gosima2",
  },
}; //////////// subPage_item 객체 ////////////
