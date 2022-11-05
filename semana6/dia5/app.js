const formulario = document.getElementById('formulario');
const input = document.getElementById('input');
const tareaslist = document.getElementById('lista-tareas');
const template = document.getElementById('template').content;
const fragmento = document.createDocumentFragment();

let tareas = {};

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    setTarea();
});

const setTarea = () => {
    if(input.value.trim() === ''){
        return/*Al poner el return hacemos que al ingresar al if se deje de producir toda la funcion*/
    }
    const tarea = {
        id:Date.now(),
        texto:input.value, 
        estado: false
    };
    tareas[tarea.id]=tarea;/*push objeto identificador a la lista de objetos lo cual va a ser igual a el objeto*/ /* objetos = {1: {nombre: "Item1"}, 2: {nombre: "Item2"}, 3: {nombre: "Item3"}}*/
    formulario.reset();
    input.focus();
    pintarTareas();
};

const pintarTareas = () => {
    tareaslist.innerHTML = ''; /*Para vaciar toda la lista y crear los objetos denuevo ya que le aplicamos foreach a la conexicon de obejtos*/
    Object.values(tareas).forEach(tarea => {   /*Object.values(tareas) = el valor de cada objeto que en ecuentra en la colleccion de obejetos"tareas"*/
        const clone = template.cloneNode(true);
        clone.querySelector('p').textContent = tarea.texto;
        if(tarea.estado){
            clone.querySelector('.alert').classList.replace('alert-warning','alert-primary');
            clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle','fa-undo-alt');
            clone.querySelector('p').style.textDecoration = 'line-through'
        };
        clone.querySelectorAll('.fas')[0].dataset.id = tarea.id;
        clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
        fragmento.appendChild(clone);
        tareaslist.appendChild(fragmento); 
    });
};

tareaslist.addEventListener('click', (e) => { /*El "E" es para sederle al accion a cada elemento hijo del contenedor que tiene el eventlistener (e) toogle, se aplicara el toggle cada vez que le demos click a un elemento del contenedor con el eventlistener*/
    action(e);
});

const action = e => {
    if(e.target.classList.contains('fa-check-circle')){
        tareas[e.target.dataset.id].estado = true;
        pintarTareas();
    } else if(e.target.classList.contains('fa-minus-circle')){
        delete tareas[e.target.dataset.id];
        pintarTareas();
    };
    if(e.target.classList.contains('fa-undo-alt')){
        tareas[e.target.dataset.id].estado = false;
        pintarTareas();
    };  
    e.stopPropagation();
};