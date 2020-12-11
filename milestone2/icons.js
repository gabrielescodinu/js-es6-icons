$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const lista = [
    {
      name: "cat",
      family: "animal",
      icon: "fas fa-cat",
      color: "red",
    },
    {
      name: "dog",
      family: "animal",
      icon: "fas fa-dog",
      color: "red",
    },
    {
      name: "car",
      family: "vehicle",
      icon: "fas fa-car",
      color: "red",
    },
    {
      name: "tractor",
      family: "vehicle",
      icon: "fas fa-tractor",
      color: "red",
    },
    {
      name: "flower",
      family: "plant",
      icon: "fas fa-seedling",
      color: "red",
    },
  ];

  // definiamo dei colori per le icone (blue, orange, purple)

  //aggiungiamo dei colori usando una funzione
  const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  const nuovaLista = lista.map(listaElemento => {
    if (listaElemento.family === "animal") {
      color = blue;
    } else if (listaElemento.family === "vehicle") {
      color = orange;
    } else {
      color = purple
    }
    return {
      ...listaElemento,
      color : color
    }
  });

  //inseriamo le icone colorate nel container
  const icons = document.querySelector('#icons');

  nuovaLista.forEach(nuovaListaElemento => {
    const markup = `
    <div>
    <i class="${nuovaListaElemento.icon}" style="color:${nuovaListaElemento.color}"></i>
    ${nuovaListaElemento.name}
    </div>
    `;
    icons.insertAdjacentHTML('beforeend', markup);
  });
});

/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map
//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.
