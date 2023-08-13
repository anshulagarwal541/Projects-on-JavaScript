let menus = [
    {
        name: "Buttermilk Pancakes",
        category: "breakfast",
        src: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        price: "$15.99"
    },
    {
        name: "Diner Double",
        category: "lunch",
        src: "https://media.istockphoto.com/id/487077896/photo/close-up-of-fast-food-snacks-and-drink-on-table.webp?b=1&s=612x612&w=0&k=20&c=EuX0B0FD7OI4SP_YNDTe31dq-BSACb0fBzdvue_Gyio=",
        price: "$13.99"
    },
    {
        name: "Godzilla Milkshake",
        category: "Shakes",
        src: "https://cdn.pixabay.com/photo/2014/11/21/15/20/coffee-540653_1280.jpg",
        price: "$21.79"
    },
    {
        name: "Country Delight",
        category: "breakfast",
        src: "https://cdn.pixabay.com/photo/2014/09/15/16/53/tomatoes-447170_1280.jpg",
        price: "$9.65"
    },
    {
        name: "Egg Attack",
        category: "breakfast",
        src: "https://cdn.pixabay.com/photo/2014/09/22/14/49/breakfast-456351_1280.jpg",
        price: "$16.56"
    },
    {
        name: "Oreo Brown",
        category: "shakes",
        src: "https://cdn.pixabay.com/photo/2020/03/07/05/18/beverage-4908765_1280.jpg",
        price: "$29.36"
    },
    {
        name: "Bacon Overflow",
        category: "lunch",
        src: "https://cdn.pixabay.com/photo/2017/08/29/08/51/mouse-bacon-2692477_1280.jpg",
        price: "$21.74"
    },
    {
        name: "American Classic",
        category: "breakfast",
        src: "https://media.istockphoto.com/id/154919144/photo/south-indian-snacks-masala-dosa.jpg?s=612x612&w=0&k=20&c=cz8NFUr8Ol1yL1qRg-kOlmZrD3llxBf77U8IxeBgrfI=",
        price: "$18.53"
    },
    {
        name: "Steak Dinner",
        category: "lunch",
        src: "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg",
        price: "$20.75"
    }
]
let itemList = document.querySelector('.itemLists')
window.addEventListener('DOMContentLoaded', function () {
    let menuContents = filterElement(menus)
    // console.log(menuContents)
    itemList.innerHTML = menuContents
})

const menuButtons = document.querySelectorAll('.button')
menuButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let id = e.currentTarget.dataset.id
        if (id == 'all') {
            let menuItems=filterElement(menus)
            itemList.innerHTML=menuItems
        }
        else {
            menuItems = menus.filter(function (item) {
                if (item.category == id)
                    return item
            })
            let menuContents = filterElement(menuItems)
            itemList.innerHTML = menuContents
        }
    })

})


function filterElement(listMenu) {
    let i = listMenu.map(function (item) {
        return `<article class="item">
        <div class="image">
            <img src=${item.src} alt=${item.name}>
        </div>
        <div class="desc">
            <div class="itemName">
                <h4 class="name">${item.name}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="itemDesc">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis possimus nemo nam culpa, a
                    totam quibusdam. Sunt dolor illo reiciendis recusandae, aperiam natus consectetur quis
                    voluptatem optio, cupiditate possimus non!</p>
            </div>
        </div>
    </article>`
    })
    i = i.join("")
    return i
}