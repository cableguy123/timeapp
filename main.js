
let getMain = new Date();

function time() { 
  
  let newYear = getMain.getFullYear(); // 연도 2022
  let newMonths = getMain.getMonth() + 1; // 달 
  switch(new Date().getDay()) { 
    case 0:
      document.querySelector("#Day").innerHTML = "일요일";
      break;
   case 1 :
     document.querySelector("#Day").innerHTML ="월요일";
     break;
   case 2 :
     document.querySelector("#Day").innerHTML = "화요일";
     break; 
   case 3 :
     document.querySelector("#Day").innerHTML ="수요일";
     break;
   case 4 :
     document.querySelector("#Day").innerHTML ="목요일";
     break;
   case 5 :
     document.querySelector("#Day").innerHTML = "금요일";
     break;
   case 6 :
     document.querySelector("#Day").innerHTML ="토요일";
     break; 
     default :
     document.querySelector("#Day").innerHTML = "휴일"; 
  } // 데이 구하기


 
 
 document.querySelector("#Year").innerHTML = 
  ` : ${newYear}`;
  document.querySelector("#Months").innerHTML =
  ` : ${newMonths}`;
}



function Start() {
  time();
 
}
setInterval(time,1000);

/*
let getMain = new Date();
let newYear = getMain.getFullYear(); // 연도 2022
let newMonths = getMain.getMonth(); // 달 01
let newDay = ["일","월","화","수","목","금","토"];
let newHours = getMain.getHours(); // 시간
let newMinutes = getMain.getMinutes();
let newMillSeconds = getMain.getMilliseconds
*/