let click_btn=document.getElementById("click_btn");
var light=document.getElementById("light");

// click_btn.addEventListener('click',function(){
//     click_btn.classList.toggle("active");           // both upper and lower ways are correct for calling a function
//     light.classList.toggle("ON");
// });
function toggleBTN(){
click_btn.classList.toggle("active");
light.classList.toggle("ON");
};