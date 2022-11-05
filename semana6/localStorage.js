const btnLogin=document.querySelector('#btn-login')
const btnLogout=document.querySelector('#btn-logout')

const form1=document.getElementById('form1')
const text=document.getElementById('text-email')
const password=document.getElementById('text-password')
const textos=document.querySelectorAll('h2')
btnLogin.onclick= function(e){
    console.log(form1)
    e.preventDefault()
    const input=document.querySelectorAll('input')
    input.forEach((inputs)=>{
        localStorage.setItem(inputs.name,inputs.value)
    })
    textos.forEach((textos)=>{
       textos.style.display='block'
      
    })
    form1.style.display='none'
    text.innerHTML=localStorage.getItem('email')
    password.innerHTML=localStorage.getItem('password')

}
btnLogout.onclick=function(e){
    form1.style.display='block'
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    textos.forEach((textos)=>{
        textos.style.display='none'
       
     })
    text.innerHTML=''
    password.innerHTML=''
}
