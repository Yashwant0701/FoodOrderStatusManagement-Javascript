const manageOrderStatus=(orderId)=>{

    let orderResult=document.getElementById(orderId)

    const chefReceivedOrder=()=>new Promise((resolve,reject)=>{
        setTimeout(()=>{
            orderResult.innerText='chef received order'
            resolve()
        },3000)
})

const pizzaSauceAdded=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        orderResult.innerText='pizza sauce added'
        resolve()
    },2000)
})

const firstLayerCheezeAdded=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='first layer cheeze added'
           resolve()
    },2000)
})

const toppinsAdded=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='toppinsAdded'
           resolve()
    },4000)
})

const secondLayerCheezeAdded=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='second Layer Cheeze Added'
           resolve()
    },2000)
})

const pizzaBaked=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='pizzaBaked'
           resolve()
    },5000)
})

const oreganoadded=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='oregano added'
           resolve()
    },3000)
})

const packagedReceived=()=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
           orderResult.innerText='package received at counter'
           resolve()
    },6000)
})



chefReceivedOrder()
.then(pizzaSauceAdded)
.then(firstLayerCheezeAdded)
.then(toppinsAdded)
.then(secondLayerCheezeAdded)
.then(pizzaBaked)
.then(oreganoadded)
.then(packagedReceived)
.then(()=>{
    orderResult.innerText='The order is ready'
}).catch((error)=>console.log(error))

}