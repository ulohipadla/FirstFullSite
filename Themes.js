let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let body = document.querySelector('body') 
let body1 = document.querySelector(".wrapper");
let text = document.querySelector("p");
let span = document.querySelector('a');
let span1 = document.querySelector('.footer1');
let figma = document.querySelectorAll('.figma');
let figma2 = document.querySelectorAll('.figma2');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

function darkTheme(){
    body.style.background ='rgb(93,93,93)';
    body1.style.background ='rgb(54,54,54)';
    moon.style.display = 'none';
    sun.style.display = 'block';
    for( let i = 0; i < figma.length; i++){ 
	    figma[i].style.display = 'none';
	  }	
    for( let j = 0; j < figma2.length; j++){ 
	    figma2[j].style.display = 'inline';
	  }	
    body.style.color = 'rgb(221,221,221)';
    span.style.color = "rgb(221,221,221)";
    span1.style.color = "rgb(221,221,221)";
    header.style.borderBottom ='1px solid rgb(221, 221, 221)';
    footer.style.borderTop ='1px solid rgb(221, 221, 221)';
}

function lightTheme(){
    body.style.background ='white';
    body1.style.background='rgb(221,221,221)';
    sun.style.display = 'none';
    moon.style.display = 'block';
    for( let i = 0; i < figma.length; i++){ 
	    figma[i].style.display = 'inline';
	  }	
    for( let j = 0; j < figma2.length; j++){ 
	    figma2[j].style.display = 'none';
	  }	
    body.style.color = 'rgb(54,54,54)';
    span.style.color = 'rgb(54,54,54)';
    span1.style.color = "rgb(54,54,54)";
    header.style.borderBottom ='1px solid rgb(93, 93, 93)';
    footer.style.borderTop ='1px solid rgb(93, 93, 93)';
}