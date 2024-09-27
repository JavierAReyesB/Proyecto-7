require('dotenv').config()
const mongoose = require('mongoose')
const { connectDB } = require('../config/db')
const Receta = require('../api/models/recetas')
const Usuario = require('../api/models/usuarios')
const Comentario = require('../api/models/comentarios')

const seedDB = async () => {
  try {
    await connectDB()

    await Receta.deleteMany({})
    await Usuario.deleteMany({})
    await Comentario.deleteMany({})

    const usuarios = [
      {
        username: 'chef1',
        email: 'chef1@correo.com',
        password: 'password123',
        role: 'user'
      },
      {
        username: 'admin1',
        email: 'admin@correo.com',
        password: 'adminpassword',
        role: 'admin'
      }
    ]

    const usuariosInsertados = await Usuario.insertMany(usuarios)

    const recetas = [
      {
        name: 'Pizza Margherita',
        ingredients: ['Tomate', 'Queso', 'Albahaca'],
        description: 'Deliciosa pizza italiana con tomate fresco y albahaca.',
        prepTime: 20,
        difficulty: 'Fácil',
        servings: 4,
        image: 'https://example.com/pizza-margherita.jpg',
        category: 'Plato Principal',
        createdBy: usuariosInsertados[0]._id
      },
      {
        name: 'Ensalada César',
        ingredients: ['Lechuga', 'Pollo', 'Queso Parmesano'],
        description:
          'Una ensalada clásica con aderezo César y trozos de pollo.',
        prepTime: 10,
        difficulty: 'Fácil',
        servings: 2,
        image: 'https://example.com/ensalada-cesar.jpg',
        category: 'Ensaladas',
        createdBy: usuariosInsertados[0]._id
      }
    ]

    const recetasInsertadas = await Receta.insertMany(recetas)

    const comentarios = [
      {
        content: '¡Me encanta esta receta!',
        user: usuariosInsertados[0]._id,
        receta: recetasInsertadas[0]._id
      },
      {
        content: 'Fácil y deliciosa.',
        user: usuariosInsertados[0]._id,
        receta: recetasInsertadas[1]._id
      }
    ]

    await Comentario.insertMany(comentarios)

    console.log('Datos iniciales cargados con éxito.')
    mongoose.connection.close()
  } catch (error) {
    console.error('Error al cargar datos iniciales:', error)
    mongoose.connection.close()
  }
}

seedDB()
