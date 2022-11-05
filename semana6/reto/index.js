const circleContainer=document.querySelector('.circle-container')
const circle=document.querySelector('.circle')
const text=document.getElementById('text-light')
const figure=document.querySelector('.figure')
let mode=0
const buttonSubmit=document.getElementById('btn-submit')
const form=document.getElementById('form1')
const inputs= document.querySelectorAll('input')
const username=document.getElementById('text-success')
const article=document.getElementById('article')
const message=document.getElementById('message')
const logOut=document.getElementById('logOut')
const inputText=document.querySelector('.text')

circleContainer.onclick=function(){
    document.documentElement.classList.toggle('darkTheme')
    circle.classList.toggle('circle-dark')
    figure.classList.toggle('figure-black')
    if(mode===0){
        text.textContent='Hackeo de noche'
        username.textContent='Anon1210'
        message.textContent='Lograste hacker la contraseña'
        inputText.classList.toggle('text-dark')
        mode=1
    }
    else {
        text.textContent='Programo de dia'
        message.textContent='Iniciaste sesion correctamente'
        username.textContent=localStorage.getItem('email')
        inputText.classList.toggle('text-dark')
        mode=0
    }
}

buttonSubmit.onclick=function(e){
     e.preventDefault()
     inputs.forEach((element)=>{
        localStorage.setItem(element.name,element.value)
     })
     if(mode===0) username.textContent=localStorage.getItem('email')
     else username.textContent='Anon1210'
     form.style.display='none'
     article.style.display='flex'

}
logOut.onclick=function(){
    localStorage.clear()
    form.style.display='flex'
    article.style.display='none'

}
