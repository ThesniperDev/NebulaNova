require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const sequelize = require('./db')

const app = express()

app.use(morgan('dev'))
app.use(express.json())

const checkDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to NebulaNova')
  } catch (error) {
    throw new Error(error)
  }
}

app.get('/', (req, res) => res.send('Connected to NebulaNova API'))

app.listen(process.env.PORT, async (err) => {
  if (err) throw new Error(err)

  console.log('*'.repeat(50))
  console.log(`NebulaNova API Runnig on port: ${process.env.PORT}`)
  await checkDb()
  console.log('*'.repeat(50))
})