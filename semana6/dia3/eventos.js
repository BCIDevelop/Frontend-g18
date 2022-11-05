const btnPrueba=document.querySelectorAll('button')

function showAlert(eventos){
    Swal.fire(
        {
            icon: eventos.icon,
            title: eventos.title,
            text: eventos.text,
            footer: '<a href="">Why do I have this issue?</a>'
        }
    )
}

eventos=[
    {
        icon: 'info',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      },
  {
    icon: 'question',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  },
{
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  },
  {
    icon: 'warning',
    title: 'Warning',
    text: 'Be careful',
    
  },
  {
    icon: 'success',
    title: 'Good Job',
    text: 'Your changes were successful saved',
    
  },
]

btnPrueba.forEach((element,index)=>{
    element.addEventListener('click',()=>{
         
       showAlert(eventos[index])
    })
})
/* showDenyButton,showCancelButton,confirmButtonText denyButtonText */
const btnConfirmacion=document.querySelector('#btn-confirmaciones')

btnConfirmacion.onclick=function(){
    Swal.fire(
        {
            icon: 'question',
            title: 'Do you want to save',
            showDenyButton:true,
            showCancelButton:true,
            confirmButtonText:'confirm',
            denyButtonText:'deny'
        }
    ).then((resultado)=>{
        console.log(resultado)
        if(resultado.isConfirmed===true){
            showAlert(eventos[4])
        }
        else if(resultado.isDenied===true){
            showAlert(eventos[3])
        }
        else if(resultado.isDismissed===true){
            showAlert(eventos[0])
            console.log('Dismissed')
        }
    })
}
const btnAlertaImagen=document.querySelector('#alerta-imagen')
const urlImg='../reto/img/programador-light.jpg'
btnAlertaImagen.onclick=function(){
    Swal.fire({
    title:'Imagen',
    text:'alerta con imagen',
    imageUrl:urlImg
    }
    )
}
const btnAlertaCustom=document.querySelector('#alerta-custom')
btnAlertaCustom.onclick=function(){
    Swal.fire({
    title:'custom alert',
    text:'alerta personalizada',
    background:`url(${urlImg})`,
    color:'#fff',
    backdrop:
    'rgba(0,0,0,0.3) url(https://tenor.com/bthPb.gif) left top no-repeat'
    
    }
    )
}
const btnAlertaInput=document.querySelector('#alerta-inputs')
const text=document.querySelector('h2')
btnAlertaInput.onclick=function(){
    Swal.fire({
    title:'alert input',
    input:'email',
    inputLabel:'ingrese correo',
    inputPlaceholder:''
    
    }
    ).then((resultado)=>{
       text.innerHTML= resultado.value
    })
}
const selector=document.querySelector('#select-opciones')
selector.onchange=function(event){
    const{value,options}=event.target
}