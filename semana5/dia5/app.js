const circle=document.querySelector('.circle')
const container=document.querySelector('.container')
const switchClass=document.querySelector('.switch')
const buttonToggle=document.querySelector('.btn-toggle')
let mode='black'
const title=document.querySelector('h1')
const imgToggle= document.querySelector('img')
function changeMode(){
    console.log('entro')
  container.classList.toggle('darkContainer')
  circle.classList.toggle('darkCircle')
  switchClass.classList.toggle('darkButton')
  buttonToggle.classList.toggle('btn-toggle-dark')
//document.documentElement.classList.toggle('darkTheme')
  //Button

  if(mode==='black'){
    title.textContent='Dark Mode'
    imgToggle.setAttribute('src',"./dark.png")
    mode='light'
  }
  else{
    title.textContent='Light Mode'
    imgToggle.setAttribute('src',"./light.png")
    mode='black'
  }

}
