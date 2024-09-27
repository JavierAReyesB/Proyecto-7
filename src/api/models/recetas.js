const mongoose = require('mongoose')

const recetaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Nombre de la receta
    image: { type: String, required: true }, // Imagen de la receta
    description: { type: String, required: true }, // Descripción de la receta
    ingredients: { type: [String], required: true }, // Lista de ingredientes
    difficulty: { type: String, required: true }, // Nivel de dificultad (fácil, medio, difícil)
    prepTime: { type: Number, required: true }, // Tiempo de preparación en minutos
    servings: { type: Number, required: true }, // Número de porciones
    category: {
      type: String,
      required: true,
      enum: [
        'Entrantes',
        'Plato Principal',
        'Postre',
        'Ensaladas',
        'Sopas',
        'Bebidas',
        'Snacks',
        'Vegano',
        'Sin Gluten',
        'Pescado',
        'Carne'
      ] // Categorías de recetas
    },
    comments: [
      { type: mongoose.Types.ObjectId, ref: 'comentarios' } // Relación con comentarios
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'usuarios',
      required: true // Usuario creador de la receta
    },
    rating: { type: Number, min: 1, max: 5 } // Calificación promedio
  },
  {
    timestamps: true, // Fecha de creación y actualización
    collection: 'recetas'
  }
)

const Receta = mongoose.model('recetas', recetaSchema)

module.exports = Receta
