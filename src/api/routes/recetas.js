const {
  getRecetas,
  getRecetaById,
  getRecetasByCategory,
  postReceta,
  putReceta,
  deleteReceta
} = require('../controllers/recetas')
const { verifyToken, isAdmin } = require('../../middlewares/authMiddleware')
const recetasRouter = require('express').Router()

recetasRouter.get('/category/:category', getRecetasByCategory)
recetasRouter.get('/:id', getRecetaById)
recetasRouter.get('/', getRecetas)

recetasRouter.post('/', verifyToken, postReceta)
recetasRouter.put('/:id', verifyToken, putReceta)
recetasRouter.delete('/:id', verifyToken, isAdmin, deleteReceta)

module.exports = recetasRouter
