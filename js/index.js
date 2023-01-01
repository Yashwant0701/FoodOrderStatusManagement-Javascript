const executeOrder=()=>{
    let orderId=document.getElementById('order-id-input-text').value
    let orderItems=document.getElementById('order-items-input-text').value
    document.getElementById('order-id-input-text').value=''
    document.getElementById('order-items-input-text').value=''
    createOrderCard(orderId,orderItems)
    manageOrderStatus(orderId,orderItems)
}