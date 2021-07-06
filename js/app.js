//Selectores
const formulario = document.querySelector('#formulario');
const preguntas = document.querySelector('#preguntas');
const btnReiniciar = document.querySelector('#reiniciar');

//Listeners
document.addEventListener('DOMContentLoaded', cargarPreguntas);
formulario.addEventListener('submit', comprobarRespuestas);
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

function comprobarRespuestas(e) {
    e.preventDefault();
    
    preguntasHTML.some(pregunta => {
        if(pregunta.value === '') {
            alert('¡Contesta todas las preguntas!');
            return true;
        }
    });
}

function reiniciarJuego() {
    location.reload();
    formulario.reset();
}

// function recibirRespuestas(e) {
//     e.preventDefault();
//     if(r1.value != '' && r2.value != '' && r3.value != '' && r4.value != '' && r5.value != '' && r6.value != '' && r7.value != '') {
//         comprobarRespuestas();
//     } else {
//         alert('¡Contesta todas las peliculas!');
//     }
// }

// function comprobarRespuestas() {
//     let aciertos=0;
//     if(r1.value.toUpperCase().trim() === 'HARRY POTTER') {
//         r1.style.backgroundColor = 'green';
//         r1.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r1.style.backgroundColor = 'red';
//         r1.style.color = '#ffffff';
//     }
//     if(r2.value.toUpperCase().trim() === 'KUNG FU PANDA') {
//         r2.style.backgroundColor = 'green';
//         r2.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r2.style.backgroundColor = 'red';
//         r2.style.color = '#ffffff';
//     }
//     if(r3.value.toUpperCase().trim() === 'EL PLANETA DE LOS SIMIOS') {
//         r3.style.backgroundColor = 'green';
//         r3.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r3.style.backgroundColor = 'red';
//         r3.style.color = '#ffffff';
//     }
//     if(r4.value.toUpperCase().trim() === 'POLLITOS EN FUGA') {
//         r4.style.backgroundColor = 'green';
//         r4.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r4.style.backgroundColor = 'red';
//         r4.style.color = '#ffffff';
//     }
//     if(r5.value.toUpperCase().trim() === 'CENICIENTA') {
//         r5.style.backgroundColor = 'green';
//         r5.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r5.style.backgroundColor = 'red';
//         r5.style.color = '#ffffff';
//     }
//     if(r6.value.toUpperCase().trim() === 'EL SEÑOR DE LOS ANILLOS') {
//         r6.style.backgroundColor = 'green';
//         r6.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r6.style.backgroundColor = 'red';
//         r6.style.color = '#ffffff';
//     }
//     if(r7.value.toUpperCase().trim() === 'TED') {
//         r7.style.backgroundColor = 'green';
//         r7.style.color = '#ffffff';
//         aciertos++;
//     } else {
//         r7.style.backgroundColor = 'red';
//         r7.style.color = '#ffffff';
//     }
//     alert('¡Has acertado ' + aciertos + ' de 7!');
// }

