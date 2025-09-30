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
    estat: "en_proces",
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

let tabla = document.querySelector("tbody");

for (let i = 0; i < incidencies.length; i++) {

  const textoTruncado = incidencies[i].descripcio.slice(0,25) + "...";


  let tr = `
  
    <tr>
          <td>${incidencies[i].id}</td>
          <td>${incidencies[i].titol}</td>
          <td>${textoTruncado}</td>
          <td><span class="badge bg-warning text-dark">${incidencies[i].estat}</span></td>
          <td><span class="badge bg-danger">${incidencies[i].prioritat}</span></td>
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

let botonEditar = document.querySelector(".btn-success");

botonEditar.addEventListener("click", function(event){

  if (event.target.classList.contains("btn-success")){

    console.log("Has pulsado el boton de editar");

  }

});


let botonEliminar = document.querySelector(".btn-danger");

botonEliminar.addEventListener("click", function(event){

  if (event.target.classList.contains("btn-danger")){

    console.log("Has pulsado el boton de eliminar");

  }

});

