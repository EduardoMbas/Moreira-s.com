const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/gosteiSo', (req, res) => res.render('gosteiSo'))
  .get('/gosteiLing', (req, res) => res.render('GosteiLing'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
