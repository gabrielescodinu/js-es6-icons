$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const lista = [
    {
      name: "cat",
      family: "animal",
      icon: "fas fa-cat",
      color: "blue",
    },
    {
      name: "dog",
      family: "animal",
      icon: "fas fa-dog",
      color: "blue",
    },
    {
      name: "car",
      family: "vehicle",
      icon: "fas fa-car",
      color: "blue",
    },
    {
      name: "tractor",
      family: "vehicle",
      icon: "fas fa-tractor",
      color: "blue",
    },
  ];

  // definiamo dei colori per le icone (blue, orange, purple)

  //aggiungiamo dei colori usando una funzione
  const blue = "blue";
  const orange = "orange";
  const purple = "purple";

  const nuovaLista = lista.map(cat => {
    const name = lista.name;
    const family = lista.family;
    const icon = lista.icon;
    const color = lista.color;

    return {
      ...lista,

      ribbon : {
        color: (lista.family === 'animal') ? blue : orange,
      }
    }
  });


  console.log(nuovaLista);
  //inseriamo le icone colorate nel container
  const icons = document.getElementById('icons');

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
