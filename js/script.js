let startTime = 0;
let sec = 0;
$(".decide").on("click", onePerson);
$(document).ready(function () {
   //시작
   $('#btn_start > button').click(function () {
      clearInterval(sec); //기존 타이머 클리어
      startTime = Date.now();
      sec = setInterval(timer, 100);
   });
   
   //중지
   $('#btn_pause button').click(function () {
      clearInterval(sec);
   });
});

function timer() {
   let time = Date.now();
   let displayTime =  ((time - startTime) / 1000).toFixed(2); 
   //toFixed를 쓰면쉽게 해결되네요.
   
   $("#span_sec").text(`${displayTime}`);
   if (time - startTime >= 1000 * 60 * 5) { // 5분 되는 시점에 결정
      clearInterval(sec);         
      keepGoing();
   }

}

function onePerson() {
   $(".one img").show();
   $(".five img").hide();   
}

function keepGoing() {
   $(".five img").show();
   $(".one img").hide();   
}