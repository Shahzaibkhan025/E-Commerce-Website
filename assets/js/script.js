
function rate(star, num){

    // Current product
    let product = star.closest(".product");

    // Sirf us product ke stars
    let stars = product.querySelectorAll(".rating span");

    stars.forEach((item, index) => { 
        if(index < num){
            item.style.color = "gold";
            
        } else {
            item.style.color = "gray";
        }

    });
    // let product = document.querySelectorAll(".product");
     
    // product.forEach((item)=>{
    // item.outerHTML = `
    // <a href="./index.html" class="product-link">
    // ${item.outerHTML}
    // </a>`
    // });

    // Sirf us product ka text update hoga
    product.querySelector(".text").innerText =
        "Rating: " + num;
}
// pagination active btn
let pagination = document.querySelectorAll(".pagination a");

pagination.forEach((btn)=>{

btn.addEventListener("click" , function(){

    pagination.forEach((item)=>{

        item.classList.remove("active");
    });

    this.classList.add("active")
});
});

// product detals page
const products = document.querySelectorAll(".product img");

products.forEach((product) => {

    product.addEventListener("click", () => {

        // window.location.href = "product-detial.html";
        window.open("product-detial.html" , "_blank");

    });

});

function changeImage(ImageSrc){
    let display = document.getElementById("bigImage");
    display.src = ImageSrc;
}
// hamburger
let navMenu = document.querySelector("#nav-menu");
let navopen = document.querySelector("#nav-open");
let navclose = document.querySelector("#nav-close");

navopen.addEventListener("click" , function(){

    navMenu.classList.add("show-menu");

    navclose.classList.add("cancel-btn");

    navopen.classList.add("ham-btn");
    
});

navclose.addEventListener("click" , function(){

     navMenu.classList.remove("show-menu");

     navopen.classList.remove("ham-btn");

     navclose.classList.remove("cancel-btn");

})

let links = document.querySelectorAll("#nav-list a");

links.forEach((link)=>{
    link.addEventListener("click" , function(){
        navMenu.classList.remove("show-menu");

     navopen.classList.remove("ham-btn");

     navclose.classList.remove("cancel-btn");
    });
})
