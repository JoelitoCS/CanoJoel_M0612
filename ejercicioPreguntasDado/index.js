const preguntas = [
    // HTML
    {
        pregunta: "¿Qué significa HTML y para qué se utiliza?",
        respuestas: [
            "HyperText Markup Language, para estructurar páginas web.",
            "Home Tool Markup Language, para crear imágenes.",
            "Hyper Transfer Markup Language, para transferir archivos."
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es la función de la etiqueta head en un documento HTML?",
        respuestas: [
            "Mostrar el contenido principal de la página.",
            "Contener metadatos y enlaces a recursos externos.",
            "Crear enlaces de navegación."
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se inserta una imagen en HTML?",
        respuestas: [
            "img src='ruta'",
            "image src='ruta'",
            "src img='ruta'"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué atributo se usa para abrir un enlace en una nueva pestaña?",
        respuestas: [
            "target='_blank'",
            "newtab='true'",
            "open='new'"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Para qué sirve la etiqueta form?",
        respuestas: [
            "Para crear tablas.",
            "Para crear formularios.",
            "Para crear listas."
        ],
        correcta: 1
    },
    // CSS
    {
        pregunta: "¿Qué es CSS y cuál es su propósito?",
        respuestas: [
            "Un lenguaje para programar aplicaciones.",
            "Un lenguaje para dar estilo a páginas web.",
            "Un lenguaje para crear bases de datos."
        ],
        correcta: 1
    },
    {
        pregunta: "¿Cómo se aplica una clase CSS a un elemento HTML?",
        respuestas: [
            "Usando el atributo class.",
            "Usando el atributo style.",
            "Usando el atributo css."
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué propiedad CSS se usa para cambiar el color de fondo?",
        respuestas: [
            "background-color",
            "color",
            "font-color"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se centra un elemento horizontalmente usando CSS?",
        respuestas: [
            "margin: auto;",
            "center: true;",
            "align: center;"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué diferencia hay entre margin y padding?",
        respuestas: [
            "Margin es espacio interno, padding es externo.",
            "Margin es espacio externo, padding es interno.",
            "No hay diferencia."
        ],
        correcta: 1
    },
    // JavaScript
    {
        pregunta: "¿Qué es JavaScript y para qué se utiliza?",
        respuestas: [
            "Un lenguaje para dar interactividad a páginas web.",
            "Un lenguaje para crear hojas de estilo.",
            "Un lenguaje para estructurar contenido."
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se declara una variable en JavaScript?",
        respuestas: [
            "var nombre;",
            "variable nombre;",
            "declare nombre;"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué método se usa para mostrar un mensaje emergente en el navegador?",
        respuestas: [
            "alert()",
            "show()",
            "popup()"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se accede a un elemento HTML por su id usando JavaScript?",
        respuestas: [
            "getElementById()",
            "getById()",
            "queryId()"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es una función en JavaScript?",
        respuestas: [
            "Un bloque de código reutilizable.",
            "Un tipo de variable.",
            "Un método para crear estilos."
        ],
        correcta: 0
    },
    // Mixtas
    {
        pregunta: "¿Cómo se enlaza un archivo CSS externo en HTML?",
        respuestas: [
            "link rel='stylesheet' href='estilos.css'",
            "css src='estilos.css'",
            "style href='estilos.css'"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se enlaza un archivo JavaScript externo en HTML?",
        respuestas: [
            "script src='script.js'></script",
            "js src='script.js'",
            "javascript href='script.js'"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el DOM?",
        respuestas: [
            "Un modelo de objetos para documentos HTML.",
            "Un tipo de variable en JavaScript.",
            "Una hoja de estilos."
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué selector CSS selecciona todos los elementos de tipo párrafo?",
        respuestas: [
            "p {}",
            "#p {}",
            ".p {}"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cómo se comenta una línea en JavaScript?",
        respuestas: [
            "// Esto es un comentario",
            "!-- Esto es un comentario --",
            "/* Esto es un comentario */"
        ],
        correcta: 0
    }
];



let posicion = 0;
let posicionJugador = 0;
let divMostrar = document.querySelector("#mostrarTodo");
let botonTirarDado = document.querySelector("#tirarDado");
let divPosicionActual = document.querySelector("#posicionActual");
let divPosicionJugador = document.querySelector("#posicionJugador");

divPosicionActual.innerHTML = `<h2>Pregunta ${posicion} de 20</h2>`;
divPosicionJugador.innerHTML = `<h2>Jugador 1= ${posicionJugador} </h2>`;


botonTirarDado.addEventListener("click", tirarDado);

function tirarDado() {

    //Math floor para redondear hacia abajo y random para generar un numero aleatorio 1 y 6, aqui hago que posicion, para que se guarde la posicion del numero random del 1 al 6
    posicion = posicion + Math.floor(Math.random() * 6) + 1;

    if (posicion >= 20) {

        divMostrar.innerHTML = `<h2 id="ganarPartida">¡Felicidades! Has completado el juego de preguntas.</h2>`;

        divPosicionActual.innerHTML = `<h2>Pregunta 20 de 20 </h2>`;

    } else {

        divPosicionActual.innerHTML = `<h2>Pregunta ${posicion} de 20</h2>`;

        for (let i = 0; i < preguntas.length; i++) {
            if (posicion === i) {
                divMostrar.innerHTML= `<h2>${preguntas[i].pregunta} </h2>
                <h3>Respuestas: </h3>
                <div class="divRespuestas">
                <button data-resp="0" class="botonesRespuesta">${preguntas[i].respuestas[0]}</button>
                <button data-resp="1" class="botonesRespuesta">${preguntas[i].respuestas[1]}</button>
                <button data-resp="2" class="botonesRespuesta">${preguntas[i].respuestas[2]}</button>
                </div>
                `;
            }
        }

    
    }

}

function actualizarPosicionJugador() {

    document.querySelectorAll(".botonesRespuesta").addEventListener("click", function(event){

        console.log("Has pulsado un boton");

        for (let i = 0; i < preguntas.length; i++){

             if(event.target.dataset.resp == preguntas[i].correcta){
                
                posicionJugador = posicionJugador + 5;
                tirarDado();

            }else{

                posicionJugador = posicionJugador - 1;
                tirarDado();

            }
            
        }
           

        });

}