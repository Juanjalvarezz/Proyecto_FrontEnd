//Esquema de Datos de los Usuarios

/**
 * @swagger
 * components:
 *   schemas:
 *     Registrar Usuario:
 *       type: object
 *       properties:
 *         registro_agregar:
 *           type: string
 *           description: registrar_usuario (Tabla - registro_agregar)
 *       required:
 *         -name
 *         -email
 *         -password
 *         -username
 *         -phone
 *       example:
 *         name: "Simon"
 *         email: "simonco258@gmail.com"
 *         password: "simoncito"
 *         username: "simoncito"
 *         phone: "04241234567"
 */

/**
 * @swagger
 * /registro:
 *   post:
 *     summary: Crear un nuevo Usuario
 *     tags: [Registrar Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Registrar Usuario'
 *     responses:
 *       200:
 *         description: Registro Exitoso
 *       400:
 *         description: Error al guardar el documento
 */


//Esquema de Datos de los Solicitud

/**
 * @swagger
 * components:
 *   schemas:
 *     Agregar solicitud:
 *       type: object
 *       properties:
 *         agregar_solicitud:
 *           type: string
 *           description: agregar_solicitud (Tabla - agregar_solicitud)
 *       required:
 *         -name
 *         -lastname
 *         -age
 *         -email
 *         -suggestion
 *       example:
 *         name: "Simon"
 *         lastname: "Trujillo"
 *         age: 16
 *         email: "simoncito@gmail.com"
 *         suggestion: "Por favor, subir receta de Panquecas"
 */

/**
 * @swagger
 * /solicitud:
 *   post:
 *     summary: Crear una nueva Solicitud
 *     tags: [Agregar solicitud]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Agregar solicitud'
 *     responses:
 *       200:
 *         description: Solicitud Enviada
 *       400:
 *         description: Error al guardar el documento
 */

