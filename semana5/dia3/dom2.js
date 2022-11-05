// crear una lista e insertarlo usando js
const inputLista=document.querySelectorAll('input')
const container=document.getElementById('container-list')
const lista= document.createElement("ul")
inputLista.forEach(element => {
    let listaData=document.createElement("li")
  
    listaData.appendChild( document.createTextNode(element.value))
    lista.appendChild(listaData)
});
container.appendChild(lista);
