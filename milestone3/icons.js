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
  const icons = document.querySelector('#icons');

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

  let tipi = lista.map((listaElemento)=>{
    return listaElemento.family
  });

  //let tipiNoDuplicati = [];
  let tipiNoDuplicati = tipi.filter((tipiElemento, i, array)=>{
    console.log(array);
    return array.indexOf(tipiElemento) == i;
  })
  console.log(tipiNoDuplicati);

  //aggiungiamo i tipi alla select
  const selectFamily = document.querySelector('select');

  tipiNoDuplicati.forEach(tipiNoDuplicatiElemento => {
    const markup = `
    <option class="${tipiNoDuplicatiElemento}">${tipiNoDuplicatiElemento}</option>
    `;
    selectFamily.insertAdjacentHTML('beforeend', markup);
  });

  const selectAnimali = $("option.animal");

  selectAnimali.click(function(){
    $("#icons > div").hide();
  })

  //al change mostriamo solo le icone filtrate
  //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo
  let filteredAnimal = lista.filter((listaElemento) => {
    return listaElemento.family === "animal"
  });

  console.log(filteredAnimal);

/* ---- FUNCTIONS ----*/

});
