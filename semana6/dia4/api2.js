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
    username.toLowerCase()
   
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
    
    const data=await response.json()
    
    console.log(data)
  
    const pokemones=data.results
    let pokemonPicked=''
    for (i=0;i<pokemones.length;i++){
        if(pokemones[i].name==username){
                pokemonPicked=pokemones[i]
                break
        }
    }

    
    obtenerDatosPokemon(pokemonPicked.url)
 
  
}
const obtenerDatosPokemon=async(apiURL)=>{
    const response=await fetch(apiURL)
    const data=await response.json()
    console.log(data)
    imgPerfil.src=data.sprites.back_default
    followers.textContent=data.followers
    following.textContent=data.following
    bio.textContent=data.bio 
    repos.textContent=data.public_repos
    username.textContent=data.login
    nameProfile.textContent=data.name
    twitter.textContent=data.twitter_username
    locationUser.textContent=data.location
}   
buttonSearch.onclick=async()=>{
    if(search.value===''){
        Swal.fire({
            icon:'error',
            title:'Error',
            text:'Ups, por favor llena los datos!'

        })
    }else await obtenerDatosGithub(search.value)
}