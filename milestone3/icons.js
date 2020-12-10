$(document).ready(function () {
 // icone come da milestone 1
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
     color: "orange",
   },
   {
     name: "tractor",
     family: "vehicle",
     icon: "fas fa-tractor",
     color: "orange",
   },
   {
     name: "flower",
     family: "plant",
     icon: "fas fa-tractor",
     color: "orange",
   },
 ];

  // colori come da milestone 2


  //aggiungiamo dei colori come da milestone 2

  //inseriamo le icone nel container come da milefunctstone 2
  const icons = document.getElementById('icons');

  lista.forEach(listaElemento => {
    const markup = `
    <div>
    <i class="${listaElemento.icon}" style="color:${listaElemento.color}"></i>
    ${listaElemento.name}
    </div>
    `;
    icons.insertAdjacentHTML('beforeend', markup);
  });

  //estrapoliamo i tipi di icone
  let listaAnimali = [];
  let listaVeicoli = [];

  lista.forEach(listaElemento => {
    if (listaElemento.family === "animal") {
      listaAnimali.push(listaElemento)
    } else if (listaElemento.family === "vehicle") {
      listaVeicoli.push(listaElemento)
    }
  })
  console.log(listaAnimali);
  console.log(listaVeicoli);

  //aggiungiamo i tipi alla select
  var opzioneAnimali = $(".animali");

  opzioneAnimali.click(function(){
    
  })


  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

});
