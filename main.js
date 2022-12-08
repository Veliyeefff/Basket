const objarr = [
    {
        id : 1,
        name : 'T-Shirt',
        price : 100,
        image : "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces"
    },
    {
        id : 2,
        name : 'Shoes',
        price : 150,
        image : "https://media.npr.org/assets/img/2022/06/07/ap22158692071820-f85a8959a7a0787fb741ec6a1916f6967c30d926-s1100-c50.jpg"
    },
    {
        id : 3,
        name : 'Trousers',
        price : 200,
        image : "https://www.realmenrealstyle.com/wp-content/uploads/2021/11/odd-trousers-and-suit-pants.jpg"
    },
    {
        id : 4,
        name : "Bag",
        price : 90,
        image : "https://cdn.shopify.com/s/files/1/1154/7914/files/canvas_duffle_bag.jpg?v=1654218702&width=1500+"
    }
]

let container = document.querySelector(".cont")
let body = document.querySelector("body")
let basket = document.querySelector("i")

window.localStorage.setItem("Products", JSON.stringify(objarr))

objarr.forEach(element => {
    let div = document.createElement("div")
    div.classList.add("card")
    let image = document.createElement("img")
    image.setAttribute("src",element.image)
    let product_name = document.createElement("h4")
    product_name.innerText = element.name
    let price = document.createElement("p")
    price.innerText = `${element.price}$`
    let button = document.createElement("button")
    button.innerText = "Add To Basket";
    button.setAttribute("prodId",element.id)
    button.classList.add("btn")
    button.classList.add("btn-primary")
    div.append(image)
    div.append(product_name)
    div.append(price)
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
        counter++;
        span.innerText = counter
        localStorage.setItem("Basket", JSON.stringify(basket_array))
     })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:4
        }
    }
})













