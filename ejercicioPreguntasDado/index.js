const preguntas = [
    // HTML
    "¿Qué significa HTML y para qué se utiliza?",
    "¿Cuál es la función de la etiqueta head en un documento HTML?",
    "¿Cómo se inserta una imagen en HTML?",
    "¿Qué atributo se usa para abrir un enlace en una nueva pestaña?",
    "¿Para qué sirve la etiqueta form?",
    // CSS
    "¿Qué es CSS y cuál es su propósito?",
    "¿Cómo se aplica una clase CSS a un elemento HTML?",
    "¿Qué propiedad CSS se usa para cambiar el color de fondo?",
    "¿Cómo se centra un elemento horizontalmente usando CSS?",
    "¿Qué diferencia hay entre margin y padding?",
    // JavaScript
    "¿Qué es JavaScript y para qué se utiliza?",
    "¿Cómo se declara una variable en JavaScript?",
    "¿Qué método se usa para mostrar un mensaje emergente en el navegador?",
    "¿Cómo se accede a un elemento HTML por su id usando JavaScript?",
    "¿Qué es una función en JavaScript?",
    // Mixtas
    "¿Cómo se enlaza un archivo CSS externo en HTML?",
    "¿Cómo se enlaza un archivo JavaScript externo en HTML?",
    "¿Qué es el DOM?",
    "¿Qué selector CSS selecciona todos los elementos de tipo <p>?",
    "¿Cómo se comenta una línea en JavaScript?"
];



let posicion = 0;
let divMostrar = document.querySelector("#mostrarTodo");
let botonTirarDado = document.querySelector("#tirarDado");
let divPosicionActual = document.querySelector("#posicionActual");

divPosicionActual.innerHTML = `<h2>Posición= ${posicion} </h2>`;



botonTirarDado.addEventListener("click", tirarDado);

function tirarDado() {

    //Math floor para redondear hacia abajo y random para generar un numero aleatorio 1 y 6, aqui hago que posicion, para que se guarde la posicion del numero random del 1 al 6
    posicion = posicion + Math.floor(Math.random() * 6) + 1;

    if (posicion >= 20) {

        divMostrar.innerHTML = `<h2 id="ganarPartida">¡Felicidades! Has completado el juego de preguntas.</h2>`;

        divPosicionActual.innerHTML = `<h2>Posición= 20 </h2>`;

    } else {

        divPosicionActual.innerHTML = `<h2>Posición= ${posicion} </h2>`;

        for (let i = 0; i < preguntas.length; i++) {
            if (posicion === i) {
                divMostrar.innerHTML= `<h2>Pregunta: ${preguntas[i]} </h2>`;
            }
        }
    }



}