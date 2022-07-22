const buttonFav = document.getElementById("buttonFav");
const noFav = document.getElementById("noFav");
const contenedorFavorito = document.getElementById("contenedorFavorito");

let nombres = [];

buttonFav.addEventListener("click", () => {
  const padre = buttonFav.parentElement;
  const padreS = padre.parentElement;
  const padreSuperior = padreS.parentElement.childNodes;
  const padreSuperiorA = [];
  padreSuperiorA.push(...padreSuperior);

  const divSup = padreSuperiorA[1];
  const divInf = padreSuperiorA[3];

  /* superior */
  const ciudad = divSup.childNodes[1].children.ciudadBusqueda.innerHTML;
  const pais = divSup.childNodes[1].children.paisBusqueda.innerHTML;

  /* inferior */
  const temperatura = divInf.childNodes[1].childNodes[1].innerHTML;
  const datoTemp = divInf.childNodes[1].childNodes[3].innerHTML;

  const vientos = divInf.childNodes[3].childNodes[1].innerHTML;
  const datoViento = divInf.childNodes[3].childNodes[3].innerHTML;

  const tempMaxima = divInf.childNodes[5].childNodes[1].innerHTML;
  const datoTempMaxima = divInf.childNodes[5].childNodes[3].innerHTML;

  const tempMinima = divInf.childNodes[7].childNodes[1].innerHTML;
  const datoTempMinima = divInf.childNodes[7].childNodes[3].innerHTML;
  /* creacion de los elementos */
  /* Arriba */
  if (nombres.includes(ciudad)) {
    alert(`la ciudad ${ciudad} ya se encuentra añadida a favoritos`);
  } else if (ciudad === "Ciudad erronea") {
    alert("no puedes poner en favoritos Ciudad erronea");
    return;
  } else if (ciudad === "Sin busqueda") {
    alert("Debes poner una ciudad para añadir a favoritos");
    return;
  } else {
    nombres.push(ciudad);
    const divPadre = document.createElement("div");
    divPadre.setAttribute(
      "class",
      "w-48 h-auto rounded-lg shadow-xl bg-blue-200 flex flex-col flex-none"
    );

    const divTitulo = document.createElement("div");
    divTitulo.setAttribute(
      "class",
      "flex justify-center items-center border-b-2 border-black space-x-2"
    );
    divTitulo.setAttribute(
      "class",
      "flex justify-center items-center border-b-2 border-black space-x-2"
    );
    const h1ciudad = document.createElement("h1");
    h1ciudad.append(ciudad);
    const h1pais = document.createElement("h1");
    h1pais.append(pais);

    const boton = document.createElement("button");
    boton.setAttribute("class", "w-4 h-3 rounded-xl mr-0 bg-red-500");
    boton.setAttribute("id", "BTNEliminarm");

    divTitulo.append(h1ciudad, h1pais, boton);

    /* abajo */
    const divDatos = document.createElement("div");
    divDatos.setAttribute("class", "flex flex-col  justify-center ml-4");
    const divTemperatura = document.createElement("div");
    const parrafoTemperatura = document.createElement("p");
    parrafoTemperatura.append(`${temperatura} ${datoTemp}`);
    divTemperatura.append(parrafoTemperatura);

    const divVientos = document.createElement("div");
    const parrafoVientos = document.createElement("p");
    parrafoVientos.append(`${vientos} ${datoViento}`);
    divVientos.append(parrafoVientos);

    const divTempMaxima = document.createElement("div");
    const parrafoTempMaxima = document.createElement("p");
    parrafoTempMaxima.append(`${tempMaxima} ${datoTempMaxima}`);
    divTempMaxima.append(parrafoTempMaxima);

    const divTempMinima = document.createElement("div");
    const parrafoTempMinima = document.createElement("p");
    parrafoTempMinima.append(`${tempMinima} ${datoTempMinima}`);
    divTempMinima.append(parrafoTempMinima);
    divDatos.append(divTemperatura, divVientos, divTempMaxima, divTempMinima);

    divPadre.append(divTitulo, divDatos);
    contenedorFavorito.append(divPadre);
  }
  añadirMetodElim();
 
});

const añadirMetodElim = () => {
  const btn = document.querySelectorAll("#BTNEliminarm");
  const btns=[]
  btns.push(...btn)
  btns.map(btn=>{leer(btn)})
};

const leer = (btn) => {
  btn.addEventListener("click", () => {
    const padreBtn = btn.parentElement;
    const padre = padreBtn.parentElement;
    
    eliminarLista(padreBtn)
    const padrePrincipal = padre.parentElement;
    padrePrincipal.removeChild(padre)
  });
};

const eliminarLista=(padreBtn)=>{
  const nombre=padreBtn.childNodes[0].outerText
  nombres=nombres.filter(nombreq=>nombreq!=nombre)
}
