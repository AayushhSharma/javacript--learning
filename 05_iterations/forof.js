const greetings = ["Hello World!"]

for (const greet of greetings) {
    console.log (`Each char is ${greet}`)
}

//maps
const map = new Map()
map.set ('IN', 'India')
map.set ('USA','United States of America')
map.set ('france',"Bon-Appetit")
console.log (map);

for (const Key of map) {
    console.log(Key)
}
for (const [Key, Value] of map) {
    console.log(Key,':-',Value)
}
const myObject = {
    js :'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
   console.log (`${key} schortcut is for ${myObject[key]}`);
}