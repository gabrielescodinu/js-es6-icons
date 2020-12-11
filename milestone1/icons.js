$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
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

  // Selezioniamo il container icons
  // il querySelector funziona come il getElementbyId, all'interno specificare
  // se è una classe con il punto, un id con l'#, ecc.
  // ricorda che il querySelector prende solo il primo elemento con quella classe o Id ecc.
  const icons = document.querySelector('#icons');

  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  lista.forEach(listaElemento => {
    const markup = `
    <div>
      <i class="${listaElemento.icon}" style="color:blue"></i>
      <div class="title">${listaElemento.name}</div>
    </div>
    `;
    icons.insertAdjacentHTML('beforeend', markup);
  });
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
