const Receta = require('../models/recetas')

const getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find()
    return res.status(200).json(recetas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud de recetas')
  }
}

const getRecetaById = async (req, res) => {
  try {
    const { id } = req.params
    const receta = await Receta.findById(id)
    return res.status(200).json(receta)
  } catch (error) {
    return res.status(400).json('Error en la solicitud por ID')
  }
}

const getRecetasByCategory = async (req, res) => {
  try {
    const { category } = req.params
    const recetas = await Receta.find({ category })
    return res.status(200).json(recetas)
  } catch (error) {
    return res.status(400).json('Error en la solicitud por categoría')
  }
}

const postReceta = async (req, res) => {
  try {
    const newReceta = new Receta(req.body)
    const recetaSaved = await newReceta.save()
    return res.status(201).json(recetaSaved)
  } catch (error) {
    return res.status(400).json({ message: 'Error al crear la receta', error })
  }
}

const putReceta = async (req, res) => {
  try {
    const { id } = req.params
    const recetaUpdated = await Receta.findByIdAndUpdate(id, req.body, {
      new: true
    })
    return res.status(200).json(recetaUpdated)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al actualizar la receta', error })
  }
}

const deleteReceta = async (req, res) => {
  try {
    const { id } = req.params
    const recetaDeleted = await Receta.findByIdAndDelete(id)
    return res.status(200).json(recetaDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error al eliminar la receta', error })
  }
}

module.exports = {
  getRecetas,
  getRecetaById,
  getRecetasByCategory,
  postReceta,
  putReceta,
  deleteReceta
}
