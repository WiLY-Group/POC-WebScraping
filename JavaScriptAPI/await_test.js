const { default: axios } = require("axios");

const res = await axios.get('https://httpbin.org/get?answer=42');