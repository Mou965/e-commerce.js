let cartProducts = [];
let id;
let price;
const deleted = document.querySelector('#emptyCart');
const total = document.querySelector('#total');
document.addEventListener('click', addCart);

deleted.addEventListener('click', () => {
    cartProducts = [];
    totalPrice(cartProducts);
    printCart(cartProducts);  
})

function toggleCart() {
    const cart = document.getElementById('hidden');
    const fixedCart = document.getElementById('hidden');
    cart.classList.toggle('hidden');
    fixedCart.classList.toggle('fixedCart');
}
function addCart(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-card')){
        const cart = e.target.parentElement.parentElement;
        getCartProduct(cart);
    }
}

function deletedProduct(pr){
    
    console.log(`Eliminando curso con el id: ${pr}`);
    //Elimnar el producto del arreglo
    cartProducts = cartProducts.filter(product => product.id !== pr);
    totalPrice(cartProducts);
    printCart(cartProducts);  
}

//Obtenemos el ID del producto desde la API
function getId(idP){
    id = idP;
    return id;
}

//Obtenemos el precio del producto desde la API
function getPrice(priceP ){
    price = priceP;
    return price;
}


function getCartProduct(cart) {
    const getProduct = {
        id: id,
        img: cart.querySelector('img').src,
        name: cart.querySelector('h5').textContent,
        price: price,
        amount: 1
    }

    const exist =  cartProducts.some( cart => cart.id === getProduct.id);
        if(exist){
            const product = cartProducts.map( products => {
                if(products.id === getProduct.id) {
                    products.amount++;
                    // products.price += products.price;
                    return products;
                } else {
                    return products;
                }
            });
            cartProducts = [...product];
        } else {
            cartProducts = [...cartProducts, getProduct];
        }
    
    printCart(cartProducts); 
    totalPrice(cartProducts);   
    return cartProducts;
}

//Realiza la suma de los productos
function totalPrice(cartProducts){
    //Accedemos al arreglo cartProducts para relizar la suma del precio
    let result = cartProducts.reduce((total, product) => total + product.price, 0);
    total.innerHTML = result;
}


export { toggleCart, addCart, getCartProduct, getId, getPrice, deletedProduct,  totalPrice};




