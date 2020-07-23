// npm i axios

const axios = require("axios");

function getCountryDetails(name) {
  return axios
    .get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.data);
}

Promise.all([
  getCountryDetails("spain"),
  getCountryDetails("france"),
  getCountryDetails("portugal"),
])
  .then((res) => console.log("Here is all  the data: ", res))
  .catch((err) => console.log("Something went wrong getting all the data!"));
