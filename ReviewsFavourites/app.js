let reviews=[
    {
        id:0,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDjBRU246Gkbw4rFsews4huXVvA7F7WDl99ZSmbeIQtpFFvTXvaSmZSItinlOhiUGaTw&usqp=CAU",
        name:"Dogs",
        about:"The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from extinct Pleistocene wolves, and the modern wolf is the dog's nearest living relative. Dogs were the first species to be domesticated by hunter-gatherers over 15,000 years ago before the development of agriculture."
    },
    {
        id:1,
        image:"data:image/png;base64,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",
        name:"Netflix",
        about:"Netflix is an American subscription video on-demand over-the-top streaming television service owned and operated by Netflix, Inc., a company based in Los Gatos, California. It offers films and television series from various genres, and it is available in multiple languages."
    },
    {
        id:2,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEkDlAtONEK2-yKAqdBZ3OgpzJix_Ed3Ocg&usqp=CAU",
        name:"Fast & Food",
        about:"Fast food is a type of mass-produced food designed for commercial resale, with a strong priority placed on speed of service. It is a commercial term, limited to food sold in a restaurant or store with frozen, preheated or precooked ingredients and served in packaging for take-out/takeaway."
    },
    {
        id:3,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQqiwKo35yH7NrcBdAn5x3ZpiXCWs83pM2Q&usqp=CAU",
        name:"Cricket",
        about:"Cricket is a team sport played between two teams of eleven players each. It is a bat-and-ball game played on a roughly oval grass field, in the centre of which is a flat strip of ground 20.12 m (22 yards) long, called a pitch. At each end of the pitch is a set of wooden stumps, called a wicket."
    }
]

let btnNext=document.querySelector('.btnNext');
let btnPrevious=document.querySelector('.btnPrevious');
let imgProfile=document.querySelector('.image');
let name=document.querySelector('.name');
let about=document.querySelector('.about');
let currentIndex=0;
window.addEventListener('DOMContentLoaded', function(){
    setProfile(currentIndex);
})
btnNext.addEventListener('click', function(){
    currentIndex++;
    if(currentIndex>reviews.length)
        currentIndex=0;
    setProfile(currentIndex);
})
btnPrevious.addEventListener('click', function(){
    currentIndex--;
    if(currentIndex<0)
        currentIndex=reviews.length-1;
    setProfile(currentIndex);
})

let setProfile=function(e){
    imgProfile.src=reviews[e].image;
    name.innerText=reviews[e].name;
    about.innerText=reviews[e].about;
}