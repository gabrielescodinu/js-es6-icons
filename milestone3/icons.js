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
     icon: "fas fa-seedling",
     color: "purple",
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


  //aggiungiamo i tipi alla select
  // const iconsAnimal = document.getElementById('iconsAnimal');
  //
  // listaAnimali.forEach(listaAnimaliElemento => {
  //   const markup = `
  //   <div>
  //   <i class="${listaAnimaliElemento.icon}" style="color:${listaAnimaliElemento.color}"></i>
  //   ${listaAnimaliElemento.name}
  //   </div>
  //   `;
  //   iconsAnimal.insertAdjacentHTML('beforeend', markup);
  // });

  var opzioneAnimali = $(".animali");

  opzioneAnimali.change (function(){

  })


  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

});
