const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    return res
      .status(403)
      .json({ message: 'Se requiere un token para acceder a esta ruta.' })
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado.' })
  }
}

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res
      .status(403)
      .json({
        message: 'Acceso denegado. No tienes permisos de administrador.'
      })
  }
  next()
}

module.exports = { verifyToken, isAdmin }
