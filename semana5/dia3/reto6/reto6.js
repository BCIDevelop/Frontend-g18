
let contador=0
const valorContador=document.getElementById('value')
const btns=document.querySelectorAll('.btn')
function verificarValor(){
    if(contador>0) valorContador.style.backgroundColor='green';
    else if(contador<0)  valorContador.style.backgroundColor='red';
    else valorContador.style.backgroundColor='white';
}

function incrementar(){
    contador++
    valorContador.innerHTML=contador
    verificarValor()

}   
function decrementar(){
    contador--
    valorContador.innerHTML=contador
    verificarValor()

}
function reset(){
    contador=0
    valorContador.innerHTML=contador
    verificarValor()
}