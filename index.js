const PORT = 8000
const axios = require("axios")
const express = require('express')

const app = express()

app.get('/word', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
    params: {count: '5', wordLength: '5'},
    headers: {
      'X-RapidAPI-Key': '192cd32f37mshbbf3e9a4bd56c19p1a949ejsn85e1d214811e',
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  }
  
  axios.request(options).then((response) => {
    console.log(response.data);
    res.json(response.data[0])
  }).catch((error) => {
    console.error(error)
  })
})

app.listen(PORT, () => console.log('server running on port ' + PORT))
