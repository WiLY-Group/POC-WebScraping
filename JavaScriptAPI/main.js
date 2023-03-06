const { default: axios } = require('axios');

require('dotenv').config()
const key = process.env.usda_key;
console.log(key);

const params = {"api_key": key, "pageSize": 25}
const url = "https://api.nal.usda.gov/fdc/v1/foods/list"

let data = null;

axios.get(url, {params: params})
    .then(res=>data=res)
    .then(()=>console.log(data))
    .catch(err=>console.log(err));

