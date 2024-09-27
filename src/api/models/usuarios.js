const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true }, // Nombre de usuario único
    email: { type: String, required: true, unique: true }, // Correo electrónico único
    password: { type: String, required: true }, // Contraseña encriptada
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user' // Rol por defecto 'user'
    },
    recetas: [{ type: mongoose.Types.ObjectId, ref: 'recetas' }] // Relación con recetas creadas por el usuario
  },
  {
    timestamps: true, // Fecha de creación y actualización
    collection: 'usuarios'
  }
)

const Usuario = mongoose.model('usuarios', usuarioSchema)

module.exports = Usuario
