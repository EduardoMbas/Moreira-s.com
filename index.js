const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .get('/gosteiso', (req, res) => res.render('GosteiSo'))
  .get('/gosteiling', (req, res) => res.render('GosteiLing'))
  .get('/ngosteiredes', (req, res) => res.render('NGosteiRedes'))
  .get('/ngosteicpu', (req, res) => res.render('NGosteiCPU'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
