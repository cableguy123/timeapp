
const  aTime = document.querySelector("h3.Clock");
function setClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0"); // 01
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0"); 
  aTime.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}
// padStart는 String형
// 1 이 나오면 앞에 0 을 줘야됌 그렇기에 2자리 숫자가 되지못하면 padStart(앞)에 0을 넣는다

setClock();
setInterval(setClock,1000);