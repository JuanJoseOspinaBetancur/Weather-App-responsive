const ciudadBusquedaInput = document.getElementById("ciudadBusquedaInput");
const ciudadBusquedaboton = document.getElementById("ciudadBusquedaboton");
const ciudadBusqueda = document.getElementById("ciudadBusqueda");
const temperaturaBusqueda = document.getElementById("temperaturaBusqueda");
const vientosBusqueda = document.getElementById("vientosBusqueda");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");
const paisBusqueda = document.getElementById("paisBusqueda");

ciudadBusquedaInput.addEventListener("keypress", (event) => {
  if(event.code==="Enter"){
    obtener(ciudadBusquedaInput.value);
    ciudadBusquedaInput.value = "";
  }
});

const obtener = async (ciudad) => {
  url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=3f0f42d46b6d17a6ca5d5b2cb5c11078`;
  const response = await fetch(url);
  const data = await response.json();
  if (response.status === 200) {
    ciudadBusqueda.textContent = data.name;
    paisBusqueda.textContent = data.sys.country;
    temperaturaBusqueda.textContent = (data.main.temp - 273.15).toFixed(2);
    vientosBusqueda.textContent = `${data.wind.speed} km/h`;
    tempMax.textContent = (data.main.temp_max - 273.15).toFixed(2);
    tempMin.textContent = (data.main.temp_min - 273.15).toFixed(2);
  } else if (response.status === 404) {
    ciudadBusqueda.textContent = "Ciudad erronea";
    temperaturaBusqueda.textContent = "No datos";
    vientosBusqueda.textContent = "No datos";
    tempMax.textContent = "No datos";
    tempMin.textContent = "No datos";
  }
  return data;
};

ciudadBusquedaboton.addEventListener("click", () => {
  obtener(ciudadBusquedaInput.value);
  ciudadBusquedaInput.value = "";
});
