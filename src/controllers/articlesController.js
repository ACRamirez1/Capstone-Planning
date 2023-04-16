const axios = require("axios");
require("dotenv").config();


const list = (req, res) => {

const options = {
  method: 'GET',
  url: 'https://article-extractor2.p.rapidapi.com/article/parse',
  params: req.params.url,
  headers: {
    'X-RapidAPI-Key': process.env.SECRET_KEY,
    'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	res.json(response.data.data);
}).catch(function (error) {
	console.error(error);
});
}

const show = (req, res) => {

}


const create = (req, res) => {

}




module.exports = {list, show, create}