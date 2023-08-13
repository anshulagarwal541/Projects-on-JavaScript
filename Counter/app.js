let btnIncrease=document.querySelector('.increase');
let btnDecrease=document.querySelector('.decrease');
let btnReset=document.querySelector('.reset');
let count=document.querySelector('.count');
let countValue=0;
btnIncrease.addEventListener('click', function(){
    countValue++;
    count.innerText=countValue;
    checkColor();
})
btnDecrease.addEventListener('click', function(){
    countValue--;
    count.innerText=countValue;
    checkColor();
})
btnReset.addEventListener('click', function(){
    countValue=0;
    count.innerText=countValue;
    checkColor();
})

let checkColor=function(){
    if(countValue>0)
    {
        count.style.color='#009900';
    }
    else if(countValue<0)
    {
        count.style.color='#ff3300';
    }
    else{
        count.style.color='#ffffff';
    }
}