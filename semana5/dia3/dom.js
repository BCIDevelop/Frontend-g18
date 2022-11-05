const input =document.getElementsByTagName("input")
console.log('hola')
console.log("input",input)
/* Convierte un HTML collection to an array fijarse que inputs su prototype es HTML collection no array */
const newInput= Array.from(input)

const newNodeList=document.querySelectorAll('input')
console.log(newNodeList)