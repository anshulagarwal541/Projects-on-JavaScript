let color=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let btnColor=document.querySelector('.btnColor')
let Color=document.querySelector('.color');
btnColor.addEventListener('click', function(){
    let newColor=`#${changeColor()}`;
    document.body.style.backgroundColor=newColor;
    btnColor.style.backgroundColor=newColor;
    Color.innerText=newColor;
})

let changeColor=function(){
    let newColor="";
    for(let x=1;x<=6;x++)
    {
        let randomIndex=Math.floor(Math.random()*15);
        newColor=newColor+color[randomIndex];
    }
    return newColor;
}