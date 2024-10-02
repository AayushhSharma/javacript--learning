// const code = ['Shaktiman', 'OG' , 'lenskart']

// code.forEach( function name (cal) {
//     console.log (cal)
// })

// const coding = ['js' , 'ruby' , 'python' , 'c++', 'cpp']
// const value = coding.forEach ((item)=> {
//     console.log(item);
//     return item
// })
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = myNums.filter((nums)=> {
// return nums >4
// })
// console.log (newnums)

const newnums =[]
myNums.forEach((num)=>{
if (num>4){
    newnums.push(num)
}
})
console.log(newnums)