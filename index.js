require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const recetasRouter = require('./src/api/routes/recetas')
const usuariosRouter = require('./src/api/routes/usuarios')
const comentariosRouter = require('./src/api/routes/comentarios')
const authRouter = require('./src/api/routes/auth')

const app = express()

app.use(express.json())

connectDB()

app.use('/api/v1/recetas', recetasRouter)
app.use('/api/v1/usuarios', usuariosRouter)
app.use('/api/v1/comentarios', comentariosRouter)
app.use('/api/v1/auth', authRouter)

app.use('*', (req, res) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
