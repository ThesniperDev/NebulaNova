require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => res.send('Connected to NebulaNova API'))

app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err)

  console.log('*'.repeat(50))
  console.log(`NebulaNova API Runnig on port: ${process.env.PORT}`)
  console.log('*'.repeat(50))
})