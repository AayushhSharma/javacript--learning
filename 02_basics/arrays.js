const firstArr = [0, 1, 2, 3, 4 ]

// console.log(firstArr[1])
// const arrtwo = ["Suresh", "Ramesh", "Naresh", "PAresh"]

// console.log (arrtwo[2])
// arrtwo.push("Raksesh")
// console.log (arrtwo)
firstArr.unshift(6 , 1)
// console.log(firstArr)
//  console.log ("A", firstArr)
// 
 const arrn = firstArr.slice(1,3)
//  console.log (arrn)
//  console.log ("B",firstArr)

 const arrn2 = firstArr.splice(1,3)
//  console.log(arrn2)
//  console.log ("C",firstArr)

const arrtwo = ["Suresh", "Ramesh", "Naresh", "PAresh"]
const arrthree = ["Flash", "Batman", "Superman"]
// const allheros = arrtwo.concat(arrthree)
const allheros =[...arrtwo,...arrthree]
console.log(allheros)

const anotherarr = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const realanotherarr = anotherarr.flat(Infinity)
console.log(realanotherarr)
