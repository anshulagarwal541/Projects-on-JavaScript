let btnColor=document.querySelector('.btnColor');
let color=document.querySelector('.color');
btnColor.addEventListener('click', function(){
    let newColor=changeColor();
    color.innerText=newColor;
    document.body.style.backgroundColor=newColor;
    btnColor.style.backgroundColor=newColor;
})

let changeColor=function(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}