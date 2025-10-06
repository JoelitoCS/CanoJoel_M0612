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
    titol: "Canvi de monitor",
    descripcio: "El monitor mostra línies estranyes",
    estat: "obert",
    prioritat: "mitjana",
    dataCreacio: "2025-09-23",
    assignat: "Anna Torres",
  },
  {
    id: 5,
    titol: "Recuperació de fitxers",
    descripcio: "S'han esborrat fitxers importants",
    estat: "tancat",
    prioritat: "alta",
    dataCreacio: "2025-09-23",
    assignat: "	Carlos Ruiz",
  },
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
actualitzarEstadistiques();

function renderitzarTaula() {

  let noIncidencias = document.querySelector("tbody");

  //Si no hay incidencias, entonces mostrar un mensaje que diga, no hay incidencias

  if (incidencies.length === 0) {

    noIncidencias.innerHTML = "<h2 style='font-size:15px;'>No data.</h2>"

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

  
  let botonEditar = document.querySelector(".btn-success");

  //cojo el botoneditar y le meto que si le hago click, entonces hago delegación de eventos, con event.target.classlist y le digo que si contiene la clase btn-success, entonces que haga lo que le diga

  botonEditar.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-success")) {

      console.log("Has pulsado el boton de editar");


    }

  });


  //lo mismo que lo anterior

  let botonEliminar = document.querySelector(".btn-danger");

  botonEliminar.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-danger")) {

      console.log("Has pulsado el boton de eliminar");

    }

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




