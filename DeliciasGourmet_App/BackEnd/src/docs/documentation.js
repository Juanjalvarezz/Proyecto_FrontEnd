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
