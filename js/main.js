 let cart = JSON.parse(localStorage.getItem("cart")) || [];


 function addToCart(event) {
     let productCard = event.target.closest(".product-card");
     let productName = productCard.querySelector("h3").innerText;
     let productPrice = productCard.querySelector("p").innerText;
     let productImage = productCard.querySelector("img").src;

     let product = {
         name: productName,
         price: productPrice,
         image: productImage
     };

     cart.push(product);

     localStorage.setItem("cart", JSON.stringify(cart));

     displayCart();
 }
 function displayCart() {
     let cartContainer = document.getElementById("cart-items");
     cartContainer.innerHTML = "";
     cart.forEach((product, index) => {
         let itemDiv = document.createElement("div");
         itemDiv.classList.add("cart-item");
         itemDiv.innerHTML = `
             <img src="${product.image}" width="50">
             <p>${product.name} - ${product.price}</p>
             <button onclick="removeFromCart(${index})">Remove</button>
         `;
         cartContainer.appendChild(itemDiv);
     });
 }

 function redirectToCart() {
    window.location.href = "cart.html";
}

 function removeFromCart(index) {
     cart.splice(index, 1);
     localStorage.setItem("cart", JSON.stringify(cart));
     displayCart();
 }

 function clearCart() {
     cart = [];
     localStorage.setItem("cart", JSON.stringify(cart));
     displayCart();
 }

 document.querySelectorAll(".product-card button").forEach(button => {
     button.addEventListener("click", addToCart);
 });

 displayCart();


 /* Forma*/ 