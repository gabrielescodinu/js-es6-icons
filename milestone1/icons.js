$(document).ready(function () {

});
// Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family
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
    color: "green",
  },
  {
    name: "tractor",
    family: "vehicle",
    icon: "fas fa-tractor",
    color: "green",
  },
];

// Selezioniamo il container icons
const icons = document.getElementById('icons');

//inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
lista.forEach(listaElemento => {
  const markup = `
  <div>
    <i class="${lista.icon}" style="color:${lista.color}"></i>
    ${lista.name}
  </div>
  `;
  icons.insertAdjacentHTML('beforeend', markup);
});
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
