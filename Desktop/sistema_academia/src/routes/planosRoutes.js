import { Router } from "express"
import * as ctrl from "../controllers/planosController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Lista planos
 *     tags: [Planos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de planos
 */
router.get("/", verificarToken, ctrl.listar)

/**
 * @swagger
 * /planos:
 *   post:
 *     summary: Criar plano
 *     tags: [Planos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Mensal
 *             descricao: Plano básico
 *             valor: 100
 *             duracao_meses: 1
 *     responses:
 *       200:
 *         description: Plano criado
 */
router.post("/", verificarToken, ctrl.criar)

/**
 * @swagger
 * /planos/{id}:
 *   put:
 *     summary: Atualizar plano
 *     tags: [Planos]
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
 *             nome: Plano Atualizado
 *             valor: 150
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", verificarToken, ctrl.editar)

/**
 * @swagger
 * /planos/{id}:
 *   delete:
 *     summary: Deletar plano
 *     tags: [Planos]
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