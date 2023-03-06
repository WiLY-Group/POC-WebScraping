console.log("JS Loaded");

// require('dotenv').config()
// const key = process.env.usda_key;
// console.log(key);

// const params = {"api_key": key, "pageSize": 25}
const url = "https://api.nal.usda.gov/fdc/v1/foods/list"

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
