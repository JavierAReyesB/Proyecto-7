const Comentario = require('../models/comentarios')

// Obtener todos los comentarios
const getComentarios = async (req, res) => {
  try {
    const comentarios = await Comentario.find()
      .populate('user', 'username email')
      .populate('receta', 'name description')
    return res.status(200).json(comentarios)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la solicitud de comentarios', error })
  }
}

// Obtener un comentario por ID
const getComentarioById = async (req, res) => {
  try {
    const { id } = req.params
    const comentario = await Comentario.findById(id)
      .populate('user', 'username email')
      .populate('receta', 'name description')
    return res.status(200).json(comentario)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la solicitud por ID', error })
  }
}

// Crear un nuevo comentario
const postComentario = async (req, res) => {
  try {
    const { content, receta } = req.body
    const user = req.user.id

    const newComentario = new Comentario({
      content,
      user,
      receta
    })

    const comentarioSaved = await newComentario.save()
    return res.status(201).json(comentarioSaved)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al crear el comentario', error })
  }
}

// Actualizar un comentario
const putComentario = async (req, res) => {
  try {
    const { id } = req.params
    const comentarioUpdated = await Comentario.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.status(200).json(comentarioUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al actualizar el comentario', error })
  }
}

// Eliminar un comentario
const deleteComentario = async (req, res) => {
  try {
    const { id } = req.params
    const comentarioDeleted = await Comentario.findByIdAndDelete(id)
    return res.status(200).json(comentarioDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar el comentario', error })
  }
}

module.exports = {
  getComentarios,
  getComentarioById,
  postComentario,
  putComentario,
  deleteComentario
}
