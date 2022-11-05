
const function1=()=>{
    alert('primera funcion')
}
const function2=()=>{
    alert('segunda funcion')
}
const array1=[{nombre:'luis',apellido:'lopez'},
{nombre:'david',apellido:'gomez'},function1]
const array2=[{titulo:'arquitecto',rol:'obrero'},
{titulo:'ingeniero',rol:'obrero'},function2]

array1.forEach((element)=>{
    console.log(element)
})
array2.map((element)=>{
    console.log(element)

})
for (i=0;i<array1.length;i++){
   console.log(array1[i])
}