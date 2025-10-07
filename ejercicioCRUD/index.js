//import {sumar,restar} from "./funciones/auxiliares.js"
//Sirve para importar las funciones que tengo en otro archivo

//sumar(3,5);

let incidencies = [
  {
    id: 1,
    titol: "Error d'inici de sessió",
    descripcio: "Els usuaris no poden iniciar sessió al sistema",
    estat: "obert",
    prioritat: "alta",
    dataCreacio: "2024-01-15",
    assignat: "Joan García",
  },
  {
    id: 2,
    titol: "Problema amb la impressora",
    descripcio: "La impressora de l'oficina no imprimeix correctament",
    estat: "en proces",
    prioritat: "mitjana",
    dataCreacio: "2024-01-14",
    assignat: "Maria López",
  },
  {
    id: 3,
    titol: "Actualització de programari",
    descripcio: "Actualitzar el programari de seguretat dels ordinadors",
    estat: "tancat",
    prioritat: "baixa",
    dataCreacio: "2024-01-10",
    assignat: "Pere Martínez",
  },
  {
    id: 4,
    titol: "Actualització de programari",
    descripcio: "El monitor mostra línies estranyes.",
    estat: "obert",
    prioritat: "mitjana",
    dataCreacio: "2024-02-23",
    assignat: "Anna Torres",
  },
  {
    id: 5,
    titol: "Recuperació de fitxers",
    descripcio: "S'han esborrat fitxers importants.",
    estat: "en proces",
    prioritat: "alta",
    dataCreacio: "2024-03-18",
    assignat: "Carlos Ruiz",
  }
];

let coloresEstado = {
  "obert": "bg-success",       // verde con bootstrap
  "en proces": "bg-warning",   // amarillo
  "tancat": "bg-secondary"     // gris
};

let coloresPrioritat = {
  "alta": "bg-danger",
  "mitjana": "bg-success",
  "baixa": "bg-primary"
}

renderitzarTaula();
cambiarFiltro();
actualitzarEstadistiques();
netejarFiltres();


function renderitzarTaula() {

  let noIncidencias = document.querySelector("tbody");

  //Si no hay incidencias, entonces mostrar un mensaje que diga, no hay incidencias

  if (incidencies.length === 0) {

    noIncidencias.innerHTML = "<tr>No data.</tr>"

  } else {

    //limpio incidencias para asegurarme que no salga ningún mensaje si hay incidencias
    noIncidencias.innerHTML = " ";
    let tabla = document.querySelector("tbody");

    for (let i = 0; i < incidencies.length; i++) {

      //Esto sirve para que en las descripciones de mi array incidencias salga puntos suspensivos cuando hay mas de 25 carácteres contando espacios, para eso sirve el slice.

      const textoTruncado = incidencies[i].descripcio.slice(0, 25) + "...";

      //creo una variable tr, donde dentro estará toda la tabla generada dinámicamente

      let tr = `
    
      <tr>
            <td>${incidencies[i].id}</td>
            <td>${incidencies[i].titol}</td>
            <td>${textoTruncado}</td>
            <td><span class="badge ${coloresEstado[incidencies[i].estat]}">${incidencies[i].estat}</span></td>
            <td><span class="badge ${coloresPrioritat[incidencies[i].prioritat]}">${incidencies[i].prioritat}</span></td>
            <td>${incidencies[i].assignat}</td>
            <td>${incidencies[i].dataCreacio}</td>
            <td>
            <button class="btn btn-sm btn-success">Edita</button>
            <button class="btn btn-sm btn-danger">Elimina</button>
            </td>
      </tr>

    `;

      //hago un inner para meter la tabla 
      tabla.innerHTML += tr;

    }

  }

  
  document.querySelector("tbody").addEventListener("click", function(event) {

  if (event.target.classList.contains("btn-success")) {

    console.log("Has pulsado el botón de editar")

  }

  if (event.target.classList.contains("btn-danger")) {

    console.log("Has pulsado el botón de eliminar")

  }

});

}


function cambiarFiltro(){

let filtroPrioridad = document.querySelector("#filtrePrioritat");
let filtroEstado = document.querySelector("#filtreEstat");
let filtroEstVal = document.querySelector("#filtreEstat").value;
let tablaBody = document.querySelector("tbody");

//hacer esto mismo para filtroEstado
filtroPrioridad.addEventListener("change", function (){

  let filtroPrioVal = document.querySelector("#filtrePrioritat").value;
  let tabla = document.querySelector("tbody");

  console.log("Has cambiado la prioridad")

  if (filtroPrioVal === 'alta' || filtroPrioVal === 'mitjana' || filtroPrioVal === 'baixa'){

    tabla.innerHTML = "";

    for (let i = 0; i < incidencies.length; i++) {

    if (incidencies[i].prioritat === filtroPrioVal) {
        const textoTruncado = incidencies[i].descripcio.slice(0, 25) + "...";

        let tr = `
        <tr>
            <td>${incidencies[i].id}</td>
            <td>${incidencies[i].titol}</td>
            <td>${textoTruncado}</td>
            <td><span class="badge ${coloresEstado[incidencies[i].estat]}">${incidencies[i].estat}</span></td>
            <td><span class="badge ${coloresPrioritat[incidencies[i].prioritat]}">${incidencies[i].prioritat}</span></td>
            <td>${incidencies[i].assignat}</td>
            <td>${incidencies[i].dataCreacio}</td>
            <td>
                <button class="btn btn-sm btn-success">Edita</button>
                <button class="btn btn-sm btn-danger">Elimina</button>
            </td>
        </tr>
        `;

        tabla.innerHTML += tr;
    }
  }

  }

  actualitzarEstadistiques();

});

filtroEstado.addEventListener("change", function (){

  console.log("Has cambiado el estado")
  if (filtroEstVal === filtroEstado){

    tablaBody.innerHTML= `
    
    
    
    
    `

  }
  actualitzarEstadistiques();
  

});

}



function netejarFiltres(){

    const btnLimpiar = document.querySelector(".btn-secondary");

    btnLimpiar.addEventListener("click", function() {
    filtreEstat.value = "";
    filtrePrioritat.value = "";
    renderitzarTaula(); // muestra todas las incidencias
});

}


function actualitzarEstadistiques(){

  const  totalIncidencies = document.querySelector("#divEstadistica1");

  totalIncidencies.textContent = `${incidencies.length}`;

  const  incidenciesObertes = document.querySelector("#divEstadistica2");
  const incidenciesObertesNum = incidencies.filter((incidencia)=> incidencia.estat == "obert").length;
  incidenciesObertes.textContent = incidenciesObertesNum;

  const  incidenciesEnProces = document.querySelector("#divEstadistica3");
  const incidenciesEnProcesNum = incidencies.filter((incidencia)=> incidencia.estat == "en proces").length;
  incidenciesEnProces.textContent = incidenciesEnProcesNum;

  const  incidenciesTancades = document.querySelector("#divEstadistica4");
  const incidenciesTancadesNum = incidencies.filter((incidencia)=> incidencia.estat == "tancat").length;
  incidenciesTancades.textContent = incidenciesTancadesNum;

  
}
