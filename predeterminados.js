const padreCont = document.getElementById("padreCont");
let ciudades = [
  "manizales",
  "bogota",
  "new york",
  "washington",
  "buenos aires",
  "barcelona",
  "madrid",
];
const arrayCiudad = [];
const obtenerCi = async (ciudad) => {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3f0f42d46b6d17a6ca5d5b2cb5c11078`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const datos = async (ciudad) => {
  const dato = await obtenerCi(ciudad);

  const divPadre = document.createElement("div");
  divPadre.setAttribute(
    "class",
    "w-48 h-auto rounded-lg shadow-xl bg-blue-200 flex flex-col flex-none"
  );
  const divTitulo = document.createElement("div");
  divTitulo.setAttribute("class", "flex justify-center items-center border-b-2 border-black space-x-2"
  );
  const h1ciudad = document.createElement("h1");
  const h1pais = document.createElement("h1");
  const boton = document.createElement("button");

  const divDatos = document.createElement("div");
  divDatos.setAttribute("class", "flex flex-col  justify-center ml-4");
  const divTemperatura = document.createElement("div");
  const parrafoTemperatura = document.createElement("p");
  const divVientos = document.createElement("div");
  const parrafoVientos = document.createElement("p");
  const divTempMaxima = document.createElement("div");
  const parrafoTempMaxima = document.createElement("p");
  const divTempMinima = document.createElement("div");
  const parrafoTempMinima = document.createElement("p");
  /* arriba */
  h1ciudad.textContent = dato.name;
  h1pais.textContent = dato.sys.country;
  boton.textContent = "";

  /* arriba divs */

  divTitulo.append(h1ciudad, h1pais, boton);

  /* abajo */
  parrafoTemperatura.textContent = `Temperatura ${(
    dato.main.temp - 273.15
  ).toFixed(2)}`;
  parrafoVientos.textContent = `Vientos ${dato.wind.speed}`;
  parrafoTempMaxima.textContent = `Temp Maxima ${(
    dato.main.temp_min - 273.15
  ).toFixed(2)}`;
  parrafoTempMinima.textContent = `Temp Minima ${(
    dato.main.temp_min - 273.15
  ).toFixed(2)}`;

  /* abajo divs */
  divTemperatura.append(parrafoTemperatura);
  divVientos.append(parrafoVientos);
  divTempMaxima.append(parrafoTempMaxima);
  divTempMinima.append(parrafoTempMinima);

  divDatos.append(divTemperatura, divVientos, divTempMaxima, divTempMinima);

  divPadre.append(divTitulo, divDatos);
  padreCont.append(divPadre);
};

ciudades.map((ciudad) => {
  datos(ciudad);
});
