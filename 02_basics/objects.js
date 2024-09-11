//singleton
const tinderUSer = {}

tinderUSer.name = "ayush120"
tinderUSer.id = "asd56"
tinderUSer.isLoggedIn = true

console.log (tinderUSer)
 
const obj1 = {a:"1", b:"2"}
const obj2 = {c:"4", d:"5"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3)

//object literls
const mySym= Symbol("key1")

const  jsUSer={
    name: "Aayush",
    age:20,
   [mySym] :"mykey1",
    location:"Meerut",
    email:"aayushs@123",
    isLoggedin:false,
    loggedon:["Monday" , "Tuesday"]
}
// console.log(jsUSer.email)
// console.log(jsUSer["email"])

// Object.freeze(jsUSer)
jsUSer.email =  "aayush@chatgprt.som"
jsUSer.email= "hsuhsioshoi@lll"
console.log(jsUSer)

jsUSer.greetings =function() {
console.log ("Hello js.user")
}

jsUSer.greetingsTwo = function() {
    console.log (`Hello, jsuser, ${this.name}`)
}
console.log(jsUSer.greetings())
console.log (jsUSer.greetingsTwo())


