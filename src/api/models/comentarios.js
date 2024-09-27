const mongoose = require('mongoose')

const comentarioSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'usuarios', required: true }, // Relación con usuarios
    receta: { type: mongoose.Types.ObjectId, ref: 'recetas', required: true } // Relación con recetas
  },
  {
    timestamps: true,
    collection: 'comentarios'
  }
)

const Comentario = mongoose.model('comentarios', comentarioSchema)

module.exports = Comentario
