function menuEjercicios(nro_ejercicio){
    let resultado=0
    switch (nro_ejercicio){
        case 1 :

            resultado= sumaValores(+prompt('Ingrese el 1er valor a sumar'),+prompt('Ingrese el 2do valor a sumar'))
            break
        case 2:
            resultado= promedioExamenes(+prompt('Ingrese el 1er examen'),+prompt('Ingrese el 2do examen'),
            +prompt('Ingrese el 3er examen'),+prompt('Ingrese el 4to examen'))
            break
        case 3:
            resultado= areaRectangulo(+prompt('Ingrese la base del rectangulo'),+prompt('Ingrese la altura del rectangulo'))
            break
        case 4:
            resultado= areaTriangulo(+prompt('Ingrese la base del triangulo'),+prompt('Ingrese la altura del triangulo'))
            break
        case 5:
             resultado= calcularCirculo(+prompt('Ingrese la radio del circulo'))
             break 
        case 6:
             resultado= calcularSalario(+prompt('Ingrese horas trabajadas por dia'),+prompt('Ingrese salario x hora'))
             break  
        case 7:
             resultado= convertirMetrosAPulgadas(+prompt('Ingrese la cantidad de mteros a convertir a pulgadas'))
             break     
        case 8:
             resultado= convertirSolesADolares(+prompt('Ingrese la cantidad de soles'))
             break
        case 9:
             resultado= calcularEdad(+prompt('Ingrese el año que naciste'))
             break
        case 10:
             resultado= hallarMenorPersona(
             prompt('Ingrese la primera persona valor permitido copiar --> {"nombre":"Luis","edad":28}'),prompt('Ingrese la segunda persona valor permitido copiar --> {"nombre":"Luis","edad":28}'),
             prompt('Ingrese la tercera persona valor permitido copiar --> {"nombre":"Luis","edad":28}'))
             break
        case 11:
             resultado= calcularBono(+prompt('Ingrese cantidad años que trabajaste'))
             break
        case 12:
             resultado= calcularSueldos()
             break    
        case 13:
            alert('Se uso los alumnos [{nombre:"Luis",nota:18},{nombre:"Juan",nota:11},{nombre:"David",nota:10}]')
             resultado= hallarNumeroAprobados()
             break    
        case 14:
             resultado= calcularFocos(+prompt('Numero de focos que quieres fabricar maximo , puse limite 20'))
             break    
        case 15:
            resultado= podreVotar(+prompt('Ingrese tu edad '))
             break   
        default:
                resultado='Por favor ingrese un numero permitido'                                                                
    }
        return resultado
}
function sumaValores(a,b){
    
    if(!a ||!b ) return 'Por favor ingrese valores permitidos'
    return a+b
}
function promedioExamenes(ex1,ex2,ex3,ex4){
    if(!ex1 ||!ex2 ||!ex3 ||!ex4 ) return 'Por favor ingrese valores permitidos'
    return (ex1 + ex2 + ex3 + ex4)/4
}
function areaRectangulo(base,altura){
    if(!base ||!altura) return 'Por favor ingrese valores permitidos'
    return base*altura
}
function areaTriangulo(base,altura){
    if(!base ||!altura) return 'Por favor ingrese valores permitidos'
    return base*altura/2
}
function calcularCirculo(radio){
    if(!radio) return 'Por favor ingrese valores permitidos'
    return Math.PI*radio*radio
}
function calcularSalario(horasTrabajadasDia,salarioxHora){
    if(!horasTrabajadasDia ||!salarioxHora) return 'Por favor ingrese valores permitidos'
    //No contamos domingo y si sabado, por lo que seria 6 dias a la semana
    if( horasTrabajadasDia > 10) return 'Creo que te estan explotando :('
    return 6*horasTrabajadasDia*salarioxHora    
}
function convertirMetrosAPulgadas(metrosTela){
    if(!metrosTela) return 'Por favor ingrese valores permitidos'
    return metrosTela/0.0254
}
function convertirSolesADolares(soles){
    if(!soles) return 'Por favor ingrese valores permitidos'
    return soles/3.99
}
function calcularEdad(añoNacimiento){
    const añoActual=new Date().getFullYear()
    // Me tome la libertad de restringir la edad a maximo 70
    if(!añoNacimiento || añoActual<añoNacimiento ) return 'Por favor ingrese valores permitidos'
    if(añoActual-70>añoNacimiento) return 'Disculpe pero deberia estar descansando'
    return añoActual-añoNacimiento
}
function hallarMenorPersona(persona1,persona2,persona3){
    try {

        const person1Obj=JSON.parse(persona1)
        const person2Obj= JSON.parse(persona2)
        const person3Obj=JSON.parse(persona3)
        let menorPersona=person1Obj.nombre
        let menorEdad=person1Obj.edad
        if (typeof(person1Obj.nombre)!=='string'|| typeof(person2Obj.nombre)!=='string'|| typeof(person3Obj.nombre)!=='string' ) return 'Por favor ingrese valores permitidos para el nombre'
        if (isNaN(person1Obj.edad)|| isNaN(person2Obj.edad) ||isNaN(person3Obj.edad)) return 'Por favor ingrese valores  para la edad'
        const personas= [person1Obj,person2Obj,person3Obj]
        personas.forEach((element)=>{
            if(element.edad<menorEdad) menorPersona=element.nombre
        })
        return menorPersona
    } catch (error) {
        return 'Por favor ingrese valores permitidos'
    }  
}

function calcularBono(añosTrabajados){
    if(!añosTrabajados) return 'Por favor ingrese valores permitidos'
    let bono=0
     switch (añosTrabajados){
        case 1: 
         bono =100
         break
        case 2:
         bono=200 
         break 
         case 3:
         bono=200 
         break  
         case 4:
            bono=200 
            break  
         case 5:
             bono=200 
             break   
         default:
            bono=1000
     }
      return bono
}
function calcularSueldos(){
    let sueldoXCiclo=''
    let sueldoFinal=1500
    for(i=1; i<7; i++){
        sueldoFinal= sueldoFinal*110/100
        sueldoXCiclo = sueldoXCiclo + `\n Mi sueldo año ${i} : ${sueldoFinal}`
    }
    return sueldoXCiclo
}   
function hallarNumeroAprobados(alumnos=[{nombre:"Luis",nota:18},{nombre:"Juan",nota:11},{nombre:"David",nota:10}]){
    const alumnosAprobados= alumnos.filter((element)=>{ 
        console.log(element.nota)
        return element.nota>10  
    })
    return alumnosAprobados.length
}
function calcularFocos(numeroFocos){
    if(!numeroFocos) return 'Por favor ingrese valores permitidos'
    if(numeroFocos >20) return 'Por favor no se pase de 20 focos'
    const focosFabricados=[]
    let cantidadVerde=0
    let cantidadRojo=0
    let cantidadBlanco=0
    for(i=0 ; i<numeroFocos;i++){
        let valor=Math.floor(Math.random() * (3 - 0) + 0)
        if( valor== 0)  focosFabricados.push('verde')   
        else if(valor ==1) focosFabricados.push('blanco')  
        else focosFabricados.push('rojo')  
    }
    alert (`Focos fabricados ${focosFabricados}`)
    focosFabricados.forEach((element)=>{
            if(element==='verde') cantidadVerde++
            else if(element==='blanco') cantidadBlanco++
            else if(element==='rojo') cantidadRojo++
        })
    return `Cantidad de focos por color: \n Rojos ${cantidadRojo} \n Blancos ${cantidadBlanco} \n Verdes ${cantidadVerde}`    

}
function podreVotar(edad){
    if(!edad) return 'Por favor ingrese valores permitidos'
    if(edad >70) return 'No es necesario que vote'
    if(edad+1<18) return 'No puedes votar aun'
    else return 'Si podras votar la proxima votacion'
}
function callMenu(){
    const menuText='Ingrese numero de ejercicio : \n 1.Suma \n 2.Promedio de examenes \n 3.Calcular area rectangulo' + 
    '\n 4. Calcular area tringulo \n 5. Calcular area circulo \n 6.Determinar el sueldo semanal de un trabajador \n 7.Cuantos metros necesito' +
    '\n 8. Cantidad de soles por dolar \n 9. Calcular edad \n 10. Saber el nombre y edad de la menor persona \n 11 Determinar bono' +
    '\n 12 Salario a del profesor \n 13. Leer calificaciones de los alumnos \n 14. Cantidad de focos \n 15. Saber si puede votar'
    let nro_ejercicio=parseInt(prompt(menuText))
    if (!nro_ejercicio) alert('Por favor ingrese valores')
    else {
       const resultadoFinal=menuEjercicios(nro_ejercicio)
       alert(resultadoFinal)
       document.getElementById('result').innerHTML=resultadoFinal

    }

}