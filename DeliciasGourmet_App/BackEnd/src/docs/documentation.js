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

