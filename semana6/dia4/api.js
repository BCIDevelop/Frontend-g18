const imgPerfil=document.querySelector('#img-profile')
const nameProfile=document.querySelector('#github-name')
const username=document.querySelector('#github-username')
const date=document.querySelector('#github-joined')
const repos=document.querySelector('#github-repos')
const bio=document.querySelector('#github-bio')
const followers=document.querySelector('#github-followers')
const following=document.querySelector('#github-following')
const twitter=document.querySelector('#github-twitter')
const locationUser=document.querySelector('#github-location')
const buttonSearch=document.querySelector('#github-action-search')
const search=document.querySelector('#github-search')

const obtenerDatosGithub= async(username)=>{
    const response=await fetch(`https://api.github.com/users/${username}`)
    console.log(response)//response prototype
    const data=await response.json()
    console.log(data)
    if(data.message==='Not Found'){
        Swal.fire({
            title:'Error',
            text:'No se encontro el usuario',
            icon:'error'

        })
        return
    }
    imgPerfil.src=data.avatar_url
    followers.textContent=data.followers
    following.textContent=data.following
    bio.textContent=data.bio 
    repos.textContent=data.public_repos
    date.textContent=formatDate(data.created_at)
    username.textContent=data.login
    nameProfile.textContent=data.name
    twitter.textContent=data.twitter_username
    locationUser.textContent=data.location
  
}
const formatDate =( fecha)=>{
    let date = new Date(fecha)
    return date.toISOString().split("T")[0];
}
const buscar=()=>{
    if(search.value===''){
        Swal.fire({
            icon:'error',
            title:'Error',
            text:'Ups, por favor llena los datos!'

        })
    }else obtenerDatosGithub(search.value)
}
    buttonSearch.onclick=function(){
        buscar()
    }
window.onkeyup=function(e){
    if(e.key==='Enter'){
        buscar()
    }
   
}
  