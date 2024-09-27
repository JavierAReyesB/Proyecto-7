Proyecto 7: API REST AUTH - Plataforma de Recetas Gastronómicas
API REST para la gestión de recetas gastronómicas, usuarios y comentarios, implementando autenticación y roles de usuario (user y admin) con JWT.

Instalación
Clona este repositorio.
Instala las dependencias del proyecto: npm install
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno: DB_URL=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/<nombreBaseDatos>?retryWrites=true&w=majority
JWT_SECRET=tu_clave_secreta
Ejecuta la semilla para cargar datos iniciales en la base de datos: node src/utils/seed.js
Inicia el servidor: npm run dev
Endpoints
Autenticación
POST /api/v1/auth/register
Registra un nuevo usuario con rol user.

Body: { "username": "nombre", "email": "email@dominio.com", "password": "contraseña" }
POST /api/v1/auth/login
Inicia sesión y devuelve un token JWT.

Body: { "email": "email@dominio.com", "password": "contraseña" }
Usuarios
GET /api/v1/usuarios (solo admin)
Obtiene todos los usuarios.

GET /api/v1/usuarios/
(autenticado)
Obtiene un usuario por ID.

POST /api/v1/usuarios
Crea un nuevo usuario (registro).

PUT /api/v1/usuarios/
(autenticado)
Actualiza un usuario.

DELETE /api/v1/usuarios/
(autenticado)
Elimina un usuario (propio o admin).

Recetas
GET /api/v1/recetas
Obtiene todas las recetas.

GET /api/v1/recetas/

Obtiene una receta por ID.

GET /api/v1/recetas/category/

Obtiene recetas por categoría.

POST /api/v1/recetas (autenticado)
Crea una nueva receta.

PUT /api/v1/recetas/
(autenticado)
Actualiza una receta.

DELETE /api/v1/recetas/
(solo admin)
Elimina una receta.

Comentarios
GET /api/v1/comentarios
Obtiene todos los comentarios.

GET /api/v1/comentarios/

Obtiene un comentario por ID.

POST /api/v1/comentarios (autenticado)
Crea un nuevo comentario.

PUT /api/v1/comentarios/
(autenticado)
Actualiza un comentario.

DELETE /api/v1/comentarios/
(autenticado)
Elimina un comentario.

Roles de Usuario
user: Puede crear, leer y actualizar recetas y comentarios.
admin: Además de las acciones anteriores, puede modificar y eliminar cualquier usuario y receta.
Middleware de Autenticación
Se usa JWT para proteger las rutas que requieren autenticación. Para acceder a estas rutas, debes proporcionar el token en el encabezado de la solicitud:
Authorization: Bearer <token_jwt>

Semilla de Datos
Puedes cargar datos iniciales (usuarios, recetas y comentarios) ejecutando:
node src/utils/seed.js
# Proyecto-7
