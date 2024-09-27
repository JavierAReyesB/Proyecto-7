const {
  getComentarios,
  getComentarioById,
  postComentario,
  putComentario,
  deleteComentario
} = require('../controllers/comentarios')
const { verifyToken } = require('../../middlewares/authMiddleware')

const comentariosRouter = require('express').Router()

comentariosRouter.get('/:id', getComentarioById)
comentariosRouter.get('/', getComentarios)
comentariosRouter.post('/', verifyToken, postComentario)
comentariosRouter.put('/:id', verifyToken, putComentario)
comentariosRouter.delete('/:id', verifyToken, deleteComentario)

module.exports = comentariosRouter
