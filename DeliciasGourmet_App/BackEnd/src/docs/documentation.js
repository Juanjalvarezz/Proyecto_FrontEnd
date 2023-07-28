/**
 * @swagger
 * components:
 *   schemas:
 *     Index_Listar:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador del dato
 *         nombre:
 *           type: string
 *           description: Nombre del dato
 *       example:
 *         id: 1
 *         nombre: Swagger
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar los datos existentes
 *     tags: [Index]
 *     responses:
 *       200:
 *         description: Data Existente
 *       400:
 *         description: No hay datos existentes
 */


//Esquema de Datos de los Bancos

/**
 * @swagger
 * components:
 *   schemas:
 *     Registrar Usuario:
 *       type: object
 *       properties:
 *         registro_agregar:
 *           type: string
 *           description: setup_banco_file (Tabla - registro_agregar)
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
