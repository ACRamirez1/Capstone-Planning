const db = require('../sql/connection')


const getAllArticles = (req, res) => {
  let sql = 'SELECT * FROM articles'
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message })
      return

    
  }
  res.status(200).json(result)
})
}


const getArticleById = (req, res) => {

}
  

const createArticle = async (req, res) => {
   
}
  
 
const updateArticleById = (req, res) => {
    
}
  

const deleteArticleByFirstName = (req, res) => {
    
}
  
module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticleById,
    deleteArticleByFirstName
}

























// const axios = require("axios");
// require("dotenv").config();


// const list = (req, res) => {

// const options = {
//   method: 'GET',
//   url: 'https://article-extractor2.p.rapidapi.com/article/parse',
//   params: { url: 'https://greatergood.berkeley.edu/article/item/what_is_your_purpose_as_a_father'},
//   // params: req.params.url,
//   headers: {
//     'X-RapidAPI-Key': process.env.SECRET_KEY,
//     'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	res.json(response.data.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// }

// const show = (req, res) => {

// }


// const create = (req, res) => {

// }




// module.exports = {list, show, create}