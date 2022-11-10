const pokemonContainer=document.querySelector('#row-pokemons')

const obtenerPokemones=async ()=>{
    try{
    const response=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        const data=await response.json()
        setPokemonView(data.results)
      
      
    }
    catch(error){
        console.log(error.message)
    }
}

obtenerPokemones()
/* console.log(results)

results.forEach(element => {
    pokemonContainer.innerHTML=element.name
}); */

const setPokemonView=(results)=>{
    
    const imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
   
    results.map(async(results,index)=>{
        const bgcolor= await getColorPokemon(index+1)
        const dataPokemon = await getDetailPokemon(index+1)
         const habilidad2=dataPokemon.habilidades[1]!==undefined ? dataPokemon.habilidades[1].ability.name:'' 
         const html=`
        <div class="col-md-3">
        <div class="card" style="background-color:${bgcolor};">
        <img
        class="card-img-top mt-2"
        width="100"
        height="100"
        src="${imgUrl}${index+1}.svg">
        <div class="card-body text-center">
        <h6 class="text-title text-white"> N.-${index+1} </h6>
        <h4 class="text-title">${results.name}</h4>
       
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPokemon" data-bs-dataPeso=${dataPokemon.peso}
        data-bs-habilidad1=${dataPokemon.habilidades[0].ability.name}  data-bs-habilidad2=${habilidad2} data-bs-tipo=${dataPokemon.tipos[0].type.name} data-bs-url=${imgUrl}${index+1}.svg data-bs-name=${results.name}>
        Ver detalle
      </button>
        </div>
        </div>
        `
        pokemonContainer.innerHTML+=html
    })
}

const pokeModal = document.getElementById('modalPokemon')
modalPokemon.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const habilidad1Contenedor = button.getAttribute('data-bs-habilidad1')
  const habilidad2Contenedor = button.getAttribute('data-bs-habilidad2')
  const tipoContenedor = button.getAttribute('data-bs-tipo')
  const pesoContenedor= button.getAttribute('data-bs-dataPeso')
  const imagenContenedor= button.getAttribute('data-bs-url')
  const nameContenedor=button.getAttribute('data-bs-name')
  const peso= document.querySelector('#pokemon_peso')
  const habilidad1= document.querySelector('#pokemon_habilidad1')
  const habilidad2= document.querySelector('#pokemon_habilidad2')
  const imagen=document.querySelector('#pokemon-img')
  const name=document.querySelector('#pokemon-name')
  const tipo= document.querySelector('#pokemon_tipo')
  peso.innerHTML=pesoContenedor
  habilidad1.innerHTML=habilidad1Contenedor
  habilidad2.innerHTML=habilidad2Contenedor
  imagen.src=imagenContenedor
  tipo.innerHTML=tipoContenedor
  name.innerHTML=nameContenedor
  
})

const color ={
    red: "rgba(255, 48, 50, 0.7)",
    green: "rgba(83, 180, 50, 0.7)",
    blue: "rgba(113, 104, 226, 0.7)",
    brown: "rgba(113, 104, 226, 0.7)",
    purple: "rgba(113, 104, 226, 0.7)",
    pink: "rgba(255, 48, 50, 0.7)",
    yellow: "rgba(229, 216, 0, 0.6)",
  };
  const getColorPokemon= async(id)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const data=await response.json()
    const colorPokemon=data.color.name
 

    return colorPokemon
  }
 const getDetailPokemon= async(id)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data=await response.json()
   

    return {peso:data.weight,tipos:data.types,habilidades:data.abilities}
 }