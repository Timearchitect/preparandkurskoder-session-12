// if satser / switch case
/*
let age = 64

if (age == 20) {
    //gräns på systembolaget
    console.log('systemet')
} else if (age == 64) {
    //gräns på allmän pension
    console.log('pension')
} else if (age == 18) {
    //gräns på myndig
    console.log('Myndig')
} else if (age == 16) {
    //traktor körkort
    console.log('vissa körkort')
} else {
    console.log('ingen speciell ålder')
}

switch (age) {
    case 20:
        console.log('systemet 2')
        break
    case 64:
        console.log('pension 2')
        break
    case 18:
        console.log('Myndig 2')
        break
    case 16:
        console.log('vissa körkort 2')
        break
    default:
        console.log('ingen speciell ålder 2')
        break
}
*/

// 4) array

let x = 5
x = 10

console.log(x)

// index   0     1     2     3
let y = [5, 'Hej', true, 'Alrik']
// length är antal element  4
y[0] = 5 //square bracets
y[3] = 9
y[10] = 3

console.log(y)
console.log(y[20])
/*
y.push(8) //lägg till på slutet
y.pop() //tabort från slutet

y.unshift() //lägg till på början
y.shift() //tabort från början

y.sort() // ? <--
y.fill("Alrik", 0 , 4) // ?
y = y.concat( [1,2,3]  ) // ?
y.reverse() // ?  <--
y.includes() // ? 
*/


/* let inputUsername = document.getElementsByTagName('input')[0].value
let inputPassword = document.getElementsByTagName('input')[1].value
let user1 = [ "Timearchitect" , "pass123" , "alrik.he@gritacademy.se"]
 
if(inputUsername ==  user1[0]){
    alert("COrrect username")
}
if(inputPassword ==  user1[1]){
    alert("Correct password")
}
 */


// 5) Loopar

if( true ){
   console.log("if")
}  



let count = 0
let ord = "hej"
alert()
while (count < 100) {
    console.log("while loop "+count)
    document.write('<img src="data:image/jpeg;base64,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" alt="">')
    count = count  + 1

    if( ord  == "hej" ){
        break
    }
}
