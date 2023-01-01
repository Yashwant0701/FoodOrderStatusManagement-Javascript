const createOrderCard=(orderId,orderItems)=>{
    let coldiv=document.createElement('div')
    let carddiv=document.createElement('div')
    let cardHeaderDiv=document.createElement('div')
    let cardBodyDiv=document.createElement('div')
   let cardText=document.createElement('p')
    let orderStatus=document.createElement('span')
    let cardFooter=document.createElement('div')
    
    coldiv.classList='col-md-3'
    carddiv.classList='card text-center'
    cardHeaderDiv.classList='card-header'
    cardBodyDiv.classList='card-body'
    cardText.classList='card-text'
    orderStatus.classList='badge bg-success'
    cardFooter.classList='card-footer'


   cardHeaderDiv.innerHTML=`Order Id : <b>${orderId}</b>`
    cardText.innerHTML=`${orderItems}`
    orderStatus.innerHTML='Order Placed'
    cardFooter.innerHTML=`10-02-2022 at 11:00AM`

    orderStatus.id=orderId

    coldiv.appendChild(carddiv)
   carddiv.appendChild(cardHeaderDiv)
   carddiv.appendChild(cardBodyDiv)
   cardBodyDiv.appendChild(cardText)
   cardBodyDiv.appendChild(orderStatus)
   carddiv.appendChild(cardFooter)

    document.getElementById('order-cards-wrapper').appendChild(coldiv)

}