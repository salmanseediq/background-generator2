 let css=document.querySelector("h3");
 let color1=document.querySelector(".color1");
 let color2=document.querySelector(".color2");
 let body=document.getElementById("gradient");
 let randomBtn=document.querySelector(".random");

 gradient();


 function gradient(){
	body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`;

	css.textContent=body.style.background + ";" ;	 
 }

 function randomGradient(){
	let r=Math.trunc(Math.random()*255)+1;
	let g=Math.trunc(Math.random()*255)+1;
	let b=Math.trunc(Math.random()*255)+1;
	let r1=Math.trunc(Math.random()*255)+1;
	let g1=Math.trunc(Math.random()*255)+1;
	let b1=Math.trunc(Math.random()*255)+1;

	body.style.background=`linear-gradient(to right,rgb(${r},${g},${b}),rgb(${r1},${g1},${b1}))`;
	css.textContent=body.style.background + ";";
 }



 color1.addEventListener("input",gradient);

 color2.addEventListener("input",gradient);
	 
 randomBtn.addEventListener("click",randomGradient);
 