"use strict";
const listaInterna = () => {
  const memes = [
    {
      nombre: "me lo juras?",
      imagen: "https://i.ytimg.com/vi/PmiERz5tqEU/maxresdefault.jpg",
      enlace:
        "https://c.tenor.com/werGAdQw-8sAAAAd/neta-me-lo-juras-nodding.gif",
    },{
        nombre: "No lo sé rick, parece falso",
        imagen: "https://i.postimg.cc/qqcN5sz4/No-lo-se-Rick.jpg",
        enlace:
          "https://c.tenor.com/werGAdQw-8sAAAAd/neta-me-lo-juras-nodding.gif",
      },    
    
  ];

  const buscador = document.getElementById("buscador");
  const resultado = document.getElementById("resultado");
// realizamos el event en esta caso de tecleado
  buscador.addEventListener("keyup",(e)=>{
    resultado.innerHTML ="";
    const nuevoArray = memes.filter((element)=>{
        return element.nombre
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    });
   
    ///recorrdio dond se alamacena la lsta y ala vez hemos creado temaplate para html
    nuevoArray.map((element)=>{
        resultado.innerHTML += `
        <div class = "meme-container">
        <figure class= "meme-img-container">
        <img src ="${element.imagen}" class="meme-img" alt="${element.nombre}"></figure>
        <div class = "meme-info-container">
        <h5 class = "meme-title">${element.nombre}</h5>
         <a href = "${element.enlace}" class = "meme-boton">
         Ver Meme</a>
         </div>
         </div>
        `;
    });
  }); 
};


  document.addEventListener("DOMContentLoaded",listaInterna())                 

