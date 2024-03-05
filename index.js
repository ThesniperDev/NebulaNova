require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const sequelize = require('./db')
const dbSync = require('./db/models')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use('/api', require('./api/routes/index'))

const checkDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connected to NebulaNova')
    await dbSync()
  } catch (error) {
    throw new Error(error)
  }
}

app.get('/', (req, res) => res.send('Connected to NebulaNova API'))

app.listen(process.env.PORT, async (error) => {
  if (error) throw new Error(error)

  console.log('*'.repeat(50))
  console.log(`NebulaNova API Runnig on port: ${process.env.PORT}`)
  await checkDb()
  console.log('*'.repeat(50))
})