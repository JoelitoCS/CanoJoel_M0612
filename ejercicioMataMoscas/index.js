let divPantalla = document.querySelector(".juego");
const mira = document.querySelector("#subJuego");
const enemigo = document.querySelector("#enemigo1");

divPantalla.addEventListener("mousemove", function (event) {
    mira.style.top = `${event.clientY}px`;
    mira.style.left = `${event.clientX}px`;
});

let n = 0;            // posición actual del enemigo
let velocidad = 5;        // velocidad en píxeles
const limiteIzquierdo = 0;
const limiteDerecho = 1810;


const temporizador = setInterval(function () {
    n = n + velocidad;

    // si toca los bordes invierte la dirección
    if (n > limiteDerecho || n < limiteIzquierdo) {
        velocidad = -velocidad;
        //al llegar a limite derecho que le he puesto 1835 le digo que velocidad cambie a negativo y que cuando llegue al limite izquierdo que es 0 que es donde empieza la bola, se vuelva otra vez positivo, y asi consecutivamente
    }


    enemigo.style.left = n + "px";
    
}, 10);


