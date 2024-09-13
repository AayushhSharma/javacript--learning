function Adding(num1 , num2) {
sum= num1+num2
return sum
}
const  result = Adding (3,5)
console.log ("sum:",result)

function isLoggedIn (username){
    if (username===undefined){
        console.log (`PLease enter username`)
    } else {
    return `${username} just logged in`
    }
}
console.log (isLoggedIn())