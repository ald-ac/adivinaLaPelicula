//Selectores
const formulario = document.querySelector('#formulario');

//Listeners
document.addEventListener('DOMContentLoaded', cargarPreguntas);

//Funciones
function cargarPreguntas() {
    let divContainer = document.createElement('div');

    for (let i = 0; i < respuestas.length; i++) {
        let divPregunta = document.createElement('div');
        divPregunta.classList.add('p');
        divPregunta.innerHTML = `
            <p>${emojis[i]}</p>
            <label for="r${i}">Nombre de la pelicula: </label>
            <input type="text" name="r${i}" id="r${i}">
        `;
        divContainer.appendChild(divPregunta);
    }

    formulario.appendChild(divContainer);
}

// const r1 = document.querySelector('#r1');
// const r2 = document.querySelector('#r2');
// const r3 = document.querySelector('#r3');
// const r4 = document.querySelector('#r4');
// const r5 = document.querySelector('#r5');
// const r6 = document.querySelector('#r6');
// const r7 = document.querySelector('#r7');
// const btnReiniciar = document.querySelector('#reiniciar');

// const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit', recibirRespuestas);

// btnReiniciar.addEventListener('click', reiniciarJuego);

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

// function reiniciarJuego() {
//     location.reload();
//     formulario.reset();
// }