// function rate(num){

//   let stars = document.querySelectorAll(".rating span");

//   stars.forEach((star,index)=>{
//     if(index < num){
//       star.style.color = "gold";
//     }else{
//       star.style.color = "gray";
//     }
//   });

//   document.getElementById("text").innerText =
//   "Rating: " + num;
// }
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

    // Sirf us product ka text update hoga
    product.querySelector(".text").innerText =
        "Rating: " + num;
}