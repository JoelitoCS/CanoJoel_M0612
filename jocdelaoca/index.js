let posicionJugador1 = 0;
let posicionJugador2 = 0;
let turnoJugador = true; // alternar turnos

const botonTirarDado = document.querySelector("#tirarDado");
const divPosicionJugador1 = document.querySelector("#posicionJugador1");
const divPosicionJugador2 = document.querySelector("#posicionJugador2");
const divResultadoDado = document.querySelector("#resultadoDado");
const posiciones = [
  { x: 734, y: 538, function: "Normal" },
  { x: 733, y: 468, function: "salta21" },
  { x: 730, y: 397, function: "Normal" },
  { x: 751, y: 343, function: "Normal" },
  { x: 756, y: 272, function: "pierdeTurno" },
  { x: 769, y: 209, function: "Normal" },
  { x: 841, y: 199, function: "avanzaEstrella" },
  { x: 916, y: 209, function: "Normal" },
  { x: 980, y: 205, function: "Normal" },
  { x: 1039, y: 207, function: "Normal" },
  { x: 1096, y: 208, function: "Normal" },
  { x: 1182, y: 200, function: "volverPrincipio" },
  { x: 1195, y: 280, function: "Normal" },
  { x: 1192, y: 336, function: "salta29" },
  { x: 1212, y: 431, function: "Normal" },
  { x: 1215, y: 528, function: "Normal" },
  { x: 1125, y: 527, function: "Normal" },
  { x: 1043, y: 508, function: "perderTurno" },
  { x: 936, y: 525, function: "Normal" },
  { x: 854, y: 525, function: "Normal" },
  { x: 824, y: 459, function: "Normal" },
  { x: 828, y: 365, function: "avanzar24" },
  { x: 836, y: 296, function: "Normal" },
  { x: 901, y: 278, function: "Normal" },
  { x: 967, y: 271, function: "retrocede9" },
  { x: 1039, y: 277, function: "Normal" },
  { x: 1116, y: 278, function: "Normal" },
  { x: 1121, y: 326, function: "Normal" },
  { x: 1122, y: 375, function: "Normal" },
  { x: 1117, y: 420, function: "retocede27" },
  { x: 1040, y: 420, function: "tirarOtraVez" },
  { x: 973, y: 439, function: "Normal" },
  { x: 906, y: 416, function: "Normal" },
  { x: 904, y: 356, function: "Normal" },
  { x: 970, y: 358, function: "Normal" },
  { x: 1040, y: 359, function: "finalJuego" },
];

// if (posiciones.funcion === "salta21") {
//   posicionJugador1 = 21;
// }


document.addEventListener("click", function(event){
  console.log("X: " + event.clientX + " Y: " + event.clientY);
})


const Jugador1 = [
  {x: 745, y: 595},
];

const Jugador2 = [
  {x: 775, y: 595},
]

// Actualiza texto inicial
actualizarPosiciones();
//declaro las funciones de mover ficha, uno para cada jugador
moverFicha(1, 0);
moverFicha(2, 0);


botonTirarDado.addEventListener("click", tirarDado);

function tirarDado() {
  // Generar número aleatorio entre 1 y 6
  const dado = Math.floor(Math.random() * 6) + 1;

  // Definir dinámicamente el jugador actual y su posición
  let jugadorActual, posicionActual;

    if (turnoJugador) {
    jugadorActual = 1;
    posicionJugador1 += dado;

    if (posicionJugador1 > 36) {
      posicionJugador1 = 36;
    }

    posicionActual = posicionJugador1; // ✅ siempre se actualiza

  } else {
    jugadorActual = 2;
    posicionJugador2 += dado;

    if (posicionJugador2 > 36) {
      posicionJugador2 = 36;
    }

    posicionActual = posicionJugador2; // ✅ siempre se actualiza
  }


  // Mover la ficha del jugador actual
  moverFicha(jugadorActual, posicionActual);

  // Mostrar posiciones actualizadas
  actualizarPosiciones();

  // Mostrar resultado del dado
  divResultadoDado.textContent = `Jugador ${jugadorActual} sacó un ${dado}`;

  // Verificar ganador
  if (posicionActual === 36) {
    divResultadoDado.textContent = `🎉 ¡Jugador ${jugadorActual} ha ganado!`;
    botonTirarDado.disabled = true;
  }

  // Cambiar turno
  turnoJugador = !turnoJugador;
}


function actualizarPosiciones() {

  divPosicionJugador1.innerHTML = `<h2 id="dadoJugador1">${posicionJugador1}</h2>`;
  divPosicionJugador2.innerHTML = `<h2 id="dadoJugador2">${posicionJugador2}</h2>`;

}

function moverFicha(jugador, posicion) {
  const ficha = document.querySelector(`#fichaJugador${jugador}`);

  let casilla;

  // Si está en la casilla 0 (inicio)
  if (posicion === 0) {
    casilla = jugador === 1 ? Jugador1[0] : Jugador2[0];
  } else {
    casilla = posiciones[posicion - 1]; // el array empieza en 0
  }

  // Mover la ficha a las coordenadas indicadas
  ficha.style.left = `${casilla.x}px`;
  ficha.style.top = `${casilla.y}px`;

  // Verificar si la casilla tiene una función especial, empezamos por la segunda
  //si casilla es la segunda (salta21) haz: 

  setTimeout(() => {
      if (casilla.function === "salta21") {

      // Saltar directamente a la posición 21

      const nuevaCasilla = posiciones[20]; // la 21 es 20
      ficha.style.left = `${nuevaCasilla.x}px`;
      ficha.style.top = `${nuevaCasilla.y}px`;

      // Actualizar también la posición del jugador
      if (jugador === 1) {

        posicionJugador1 = 21;

      } else {

        posicionJugador2 = 21;

      }
    }else if (casilla.function === "pierdeTurno"){

      // Saltar el turno del otro jugador
      turnoJugador = !turnoJugador;


    }else if (casilla.function ==="avanzaEstrella"){
      
      


    }

    


    

  }, 1000);
}
