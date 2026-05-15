import { Router } from "express"
import * as ctrl from "../controllers/frequenciasController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

/**
 * @swagger
 * /frequencias:
 *   get:
 *     summary: Lista frequências dos alunos
 *     tags: [Frequencias]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de frequências
 */
router.get("/", verificarToken, ctrl.listar)

/**
 * @swagger
 * /frequencias:
 *   post:
 *     summary: Registrar frequência
 *     tags: [Frequencias]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             aluno_id: 3
 *             data_frequencia: 2026-04-29
 *             presente: true
 *             observacao: Treino completo
 *     responses:
 *       200:
 *         description: Frequência registrada
 */
router.post("/", verificarToken, ctrl.criar)

/**
 * @swagger
 * /frequencias/{id}:
 *   put:
 *     summary: Atualizar frequência
 *     tags: [Frequencias]
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
 *             presente: true
 *             observacao: Atualizado
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", verificarToken, ctrl.editar)

/**
 * @swagger
 * /frequencias/{id}:
 *   delete:
 *     summary: Deletar frequência
 *     tags: [Frequencias]
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