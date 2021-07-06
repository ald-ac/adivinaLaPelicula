//Selectores
const formulario = document.querySelector('#formulario');
const preguntas = document.querySelector('#preguntas');
const btnReiniciar = document.querySelector('#reiniciar');

//Listeners
document.addEventListener('DOMContentLoaded', cargarPreguntas);
formulario.addEventListener('submit', validarRespuestas);
btnReiniciar.addEventListener('click', reiniciarJuego);

//Variables
let preguntasHTML = [];

//Funciones
function cargarPreguntas() {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < respuestas.length; i++) {
        let divPregunta = document.createElement('div');
        divPregunta.classList.add('p');
        divPregunta.innerHTML = `
            <p>${emojis[i]}</p>
            <label for="r${i}">Nombre de la pelicula: </label>
            <input type="text" name="r${i}" id="r${i}" class="respuestas">
        `;
        fragment.appendChild(divPregunta);
        preguntasHTML[i] = divPregunta;
    }
    preguntas.appendChild(fragment);

    //Seleccionar inputs del DOM
    const preguntasDOM = document.getElementsByClassName('respuestas');
    preguntasHTML = [...preguntasDOM];
}

function validarRespuestas(e) {
    e.preventDefault();
    
    const error = preguntasHTML.some(pregunta => {
        if(pregunta.value === '') {
            return true;
        }
    });

    error ? alert('¡Contesta todas las preguntas!') : comprobarRespuestas();
}

function comprobarRespuestas() {
    let aciertos = 0;
    for (let i = 0; i < respuestas.length; i++) {
        if(respuestas[i] === preguntasHTML[i].value.toUpperCase().trim()) {
            preguntasHTML[i].style.backgroundColor = 'green';
            preguntasHTML[i].style.color = '#ffffff';
            aciertos++; 
        } else {
            preguntasHTML[i].style.backgroundColor = 'red';
            preguntasHTML[i].style.color = '#ffffff';
        }
    }
    alert('¡Has acertado ' + aciertos + ' de 7!');
}

function reiniciarJuego() {
    location.reload();
    formulario.reset();
}