$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const lista = [
    {
      name: "cat",
      family: "animal",
      icon: "fas fa-cat",
    },
    {
      name: "dog",
      family: "animal",
      icon: "fas fa-dog",
    },
    {
      name: "car",
      family: "vehicle",
      icon: "fas fa-car",
    },
    {
      name: "tractor",
      family: "vehicle",
      icon: "fas fa-tractor",
    },
  ];

  // definiamo dei colori per le icone (blue, orange, purple)
  const blue;
  const orange;
  const purple;

  //aggiungiamo dei colori usando una funzione
  const nuovaLista = cats.map(cat => {
    const blue = lista.colorBlue;
    const orange = lista.colorOrange;
    const purple = lista.colorPurple;

    return {
      name,
      family,
      icon,
    }
  });

  //inseriamo le icone colorate nel container
  nuovaLista.forEach(nuovaListaElemento => {
    const markup = `
    <div>
    <i class="${lista.icon}" style="color:${nuovaLista.color}"></i>
    ${nuovaLista.name}
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
