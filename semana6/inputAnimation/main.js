const form=document.querySelector('.form-container')
const inputs=document.querySelectorAll('.input')
const label=document.querySelectorAll('label')  
const errorIcon=document.querySelectorAll('.material-symbols-outlined')
const errorText=document.querySelectorAll('.text-error')
function invalidEffect(index){
    if(label[index].classList.contains('invalid')){
        label[index].classList.remove('invalid')
        label[index].offsetWidth
        label[index].classList.add('invalid')
    } else label[index].classList.add('invalid')
    errorIcon[index].style.display='block'
    errorText[index].style.display='flex'
}
form.onsubmit=(e)=>{
    e.preventDefault()
    for(i=0;i<e.srcElement.children.length-1;i++){  
       if( !e.srcElement[i].validity.valid){
         invalidEffect(i)
       }
    }
}
inputs.forEach((elements,index)=>{
    
    elements.addEventListener('change',(e)=>{
        if (!e.target.validity.valid) {
          invalidEffect(index)  
        }else {
            label[index].classList.remove('invalid')
            errorIcon[index].style.display='none'
            errorText[index].style.display='none'
        }    
        if(e.target.value!=''){
            elements.classList.add('animation-input')
        }else  elements.classList.remove('animation-input')
    })
})