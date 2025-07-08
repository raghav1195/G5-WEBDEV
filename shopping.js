var cart = ["shoes", "shirts", "jeans"];

function createOrder(cart){
    console.log('Cart Items');
    for (const element in cart) {
        console.log(cart[element]+ " ");
    }
    console.log("Order Created");
    setTimeout(placeOrder, 1000, 5000, 3);
}

function placeOrder(amount, noOfItems){
    console.log("Total Amount: ", amount);
    console.log("Total Items: ", noOfItems);
    console.log("Order Placed");
    let orderId = Math.floor(Math.random() * 1000);
    setTimeout(orderPayment, 1000, orderId, amount, noOfItems);

}

function orderPayment(orderId, amount, noOfItems){
    console.log("The Order ID is : ", orderId, "\nTotal Amount: ", amount, "\nTotal Items: ", noOfItems);
    setTimeout(orderStatus, 1000);
}

function orderStatus(){
    console.log("Order Successful");
}

createOrder( cart,() => {
  placeOrder( () => {
    orderPayment( () => {
      orderStatus();
    })
  })
})