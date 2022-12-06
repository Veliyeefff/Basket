const objarr = [
    {
        id : 1,
        name : 'T-Shirt',
        price : 100,
    },
    {
        id : 2,
        name : 'Shoes',
        price : 150
    },
    {
        id : 3,
        name : 'Trousers',
        price : 200
    }
]

let container = document.querySelector(".container")
let body = document.querySelector("body")
let basket = document.querySelector("i")

window.localStorage.setItem("Products", JSON.stringify(objarr))

objarr.forEach(element => {
    let div = document.createElement("div")
    div.classList.add("card")
    div.style.backgroundColor = "black"
    let button = document.createElement("button")
    button.innerText = "Add To Basket";
    button.setAttribute("prodId",element.id)
    button.classList.add("btn")
    button.classList.add("btn-primary")
    div.append(element.id)
    div.append(element.name)
    div.append(element.price)
    div.appendChild(button)
    container.appendChild(div)
})


let btn = document.querySelectorAll('[prodID]')

let counter = 0;
let basket_array = []
let span = document.querySelector("span")
basket_array = JSON.parse(localStorage.getItem("Basket")) ?? [];
if(basket_array){
    basket_array.forEach(element =>{
        counter += element.count
    })
    span.innerText = counter
}


btn.forEach(element =>{
    element.addEventListener("click",function(e){
        if(basket_array.some(x=> x.product.id == e.target.getAttribute("prodId"))){
            basket_array.forEach(elem => {
                if(elem.product.id == e.target.getAttribute("prodId")){
                    elem.count+=1
                }
            })
        }else{
            let newItem = {
                product: objarr.find(x=> x.id == e.target.getAttribute("prodId")),
                count: 1
            }
            basket_array.push(newItem)
        }
        localStorage.setItem("Basket", JSON.stringify(basket_array))
     })
})













