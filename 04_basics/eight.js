const myNums = [1,2,3,4]

const Total = myNums.reduce (function (acc, currval){
    console.log(`acc:${acc}and curval:${currval}`)
    return acc+ currval
},11)
console.log(Total)

const shoppingCart = [
   
    {
        itemName:'js-course',
        price: 599
    },
    {
        itemName:'py-course',
        price: 999
    },
    {
        itemName:'mobiledev-course',
        price: 5999
    },
    {
        itemName:'datascience-course',
        price: 11999
    }



]
const totalValue=shoppingCart.reduce((acc ,item)=>acc+item.price,0)

console.log (totalValue)