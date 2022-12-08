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
let table = document.querySelector("table")
let tbody = document.querySelector("tbody")
basket_array = JSON.parse(localStorage.getItem("Basket"))
basket_array.forEach(element =>{
    let tr = document.createElement("tr")
    let td_id = document.createElement("td")
    td_id.innerText = element.product.id;
    let td_name = document.createElement("td")
    td_name.innerText = element.product.name;
    let td_price = document.createElement("td")
    td_price.innerText = element.product.price;
    let td_count = document.createElement("td")
    td_count.innerHTML = `<span class ="minus"> - </span> <span>${element.count}</span> <span class ="plus"> + </span>` ;
    tr.appendChild(td_id)
    tr.appendChild(td_name)
    tr.appendChild(td_price)
    tr.appendChild(td_count)
    tbody.appendChild(tr)
})


table.addEventListener('click',function(e){
    let newbasket = basket_array.filter(x=>x.count>1)
    if(e.target.className == 'plus'){
        e.target.previousElementSibling.innerText++;
        newbasket.forEach(element =>{
            if(e.target.parentElement.parentElement.firstElementChild.innerText == element.product.id){
                element.count++;
            }
        })
        counter++;
        localStorage.setItem("Basket",JSON.stringify(newbasket))
    }
    else if(e.target.className == 'minus'){
        e.target.nextElementSibling.innerText--;
        newbasket.forEach(element =>{{
            if(e.target.parentElement.parentElement.firstElementChild.innerText == element.product.id){
                element.count--;
            }
        } 
        })
        counter--;
        localStorage.setItem("Basket",JSON.stringify(newbasket))
        }
    span.innerText = counter
})




