import { Router } from "express"
import * as ctrl from "../controllers/instrutoresController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

/**
 * @swagger
 * /instrutores:
 *   get:
 *     summary: Lista instrutores
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de instrutores
 */
router.get("/", verificarToken, ctrl.listar)

/**
 * @swagger
 * /instrutores:
 *   post:
 *     summary: Criar instrutor
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Carlos
 *             especialidade: Musculação
 *     responses:
 *       200:
 *         description: Instrutor criado
 */
router.post("/", verificarToken, ctrl.criar)

/**
 * @swagger
 * /instrutores/{id}:
 *   put:
 *     summary: Atualizar instrutor
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             nome: Carlos Atualizado
 *             especialidade: Funcional
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", verificarToken, ctrl.editar)

/**
 * @swagger
 * /instrutores/{id}:
 *   delete:
 *     summary: Deletar instrutor
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deletado
 */
router.delete("/:id", verificarToken, ctrl.deletar)

export default router