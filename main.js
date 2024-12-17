let menu=document.querySelector("#menu";
let navbar=document.querySelector(".navbar");

menu.addEvenListner("click,function" (){
	navbar.classList.toggle("active");
});

window.onscroll=()=>{
	navbar.classList.remove("active");
};