const express = require('express')
const app = express()
const port = 3000

app.use(express.static('front'));
const path = require('path')

//API (rota)
app.get('/', (req, res) => {
  //res.send('Hello World!')
    res.sendFile(path.join(__dirname, 'front', 'index.html'))
    //Aula-16-10-2025/front/index.html
})

app.get('/prestaratencao', (req, res) => {
    res.send('N3 te espera, com carinho!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
