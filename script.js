// Product data
const products = [
    { id: 1, name: 'Product 1', price: 10 , image:'./img/1.jpg' },
    { id: 2, name: 'Product 2', price: 20 , image:'./img/2.jpg' },
    { id: 3, name: 'Product 3', price: 15 , image:'./img/4.jpg'},
  ];
// Cart
let cart = [];
let cartList=[];
//New cart data loading  
function UpdateCartStatus(){
    const updateCart=document.getElementById('cart-list');

const cartItemList='';

    const cartItem=document.createElement('div');
    cartItem.classList.add('d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded');
    cartItem.innerHTML=`
    <div class="mr-1"><img class="rounded" src="${p}" width="70"></div>
            <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">Basic T-shirt</span>
                <div class="d-flex flex-row product-desc">
                    <div class="size mr-1"><span class="text-grey">Size:</span><span class="font-weight-bold">&nbsp;M</span></div>
                    <div class="color"><span class="text-grey">Color:</span><span class="font-weight-bold">&nbsp;Grey</span></div>
                </div>
            </div>
            <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
                <h5 class="text-grey mt-1 mr-1 ml-1">2</h5><i class="fa fa-plus text-success" ></i></div>
            <div>
                <h5 class="text-grey">$20.00</h5>
            </div>
            <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger"></i></div>
    `;
}
  function renderProducts(){
    const productList=document.getElementById('product-list');
        products.forEach((product) => {
            const productItem = document.createElement('div');
            productItem.classList.add('col-md-4');
            productItem.innerHTML = `
            <div class="card mb-3">
                <img src="${product.image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price}</p>
                <button class="btn btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
            `;
        productList.appendChild(productItem);
    });

    const addToCartButtons=document.getElementsByClassName('add-to-cart-btn');
    //console.log(addToCartButtons);
        for(let i=0; i<addToCartButtons.length;i++){
            addToCartButtons[i].addEventListener('click',addToCart);
            //addToCartButtons[i].addEventListener('click',addToCartonButtonClick);
        }

  }


  //

  function addToCartonButtonClick(event){
    const productId=parseInt(event.target.dataset.id);
    const product=products.find(productId);

    if(product){
        cartList.push(product);
        UpdateCartStatus();
    }
  }

  // Function to add a product to the cart
function addToCart(event) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      cart.push(product);
      updateCartUI();
    }
  }

  function checkout() {
    // Implement the checkout logic here
    alert('Checkout completed!');
    cart = [];
    updateCartUI();
  }
  

  // Function to update the cart UI
function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
  
    // Clear previous cart items
    cartItemsList.innerHTML = '';
  
    // Render cart items
    cart.forEach((item) => {
      const cartItem = document.createElement('li');
      cartItem.innerHTML = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(cartItem);
    });
  
    // Calculate total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  }




  function initialize(){
    renderProducts();
    //alert('hello Product List')
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', checkout);
  }

  initialize();