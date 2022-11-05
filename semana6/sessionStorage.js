const crear=document.querySelector('#crear-session')
const obtener=document.querySelector('#obtener-session')
const eliminar=document.querySelector('#eliminar-session')

crear.onclick=function(){
    sessionStorage.setItem(
        "variable_1",
        "mi primera variable en session storage"
    )
}
obtener.onclick=function(){
    const sessionData=sessionStorage.getItem("variable_1")
    console.log(sessionData)
}

eliminar.onclick=function(){
    sessionStorage.clear()
}