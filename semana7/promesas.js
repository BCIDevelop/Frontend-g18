 const promesa =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('aca demora en llegar a console')
    },3000)
 })

 async function getDataFromPromesa(){
     const respuesta= await promesa
     console.log(respuesta)
 }
 //getDataFromPromesa()

 promesa.then((result)=>{
        console.log('then', result)
 })
  const promesasConError=(validacion)=>{
    return new Promise((resolve, reject) => {
        if(validacion){
            resolve('todo ok')
        }
        else{
            reject(new Error('error en la validacion'))
        }
    })
  }
/*   promesasConError(false)
  .then((respuesta)=>{
     console.log(respuesta)
  })
  .catch((error)=>{
    console.log(error.message)
  })
 */
async function validar(){
try {
    const promesita= await promesasConError(true)
    console.log(promesita)
} catch (error) {
    console.log(error)
}
}
//validar()


/* function githubUsers(){
    fetch('https://api.github.com/users/cvxcvxvcvxcv').then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error.message)
    })
}
githubUsers() */