/*
    7. Example of an asynchronous function
*/
async function orderFromMcDonalds(){
    // when you make an order, you get back a receipt. This is a promise that you will get back your food when it's done.
    const myOrder = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Your order is ready!');
        }, 3000);
    })

    // let receipt = myOrder.then((food) => console.log(food))
    // console.log(receipt)
    const food = await myOrder;
    console.log(food);
}

orderFromMcDonalds()
/*
    8. Use `fetch()` and async-await to write an async function that makes an HTTP request
*/
async function hitUpApi() {
    const returnData = await fetch('https://whatthecommit.com/index.txt')
    const commitMessage = await returnData.text();
    console.log(commitMessage);
}
console.log('before')
hitUpApi()
console.log('after')