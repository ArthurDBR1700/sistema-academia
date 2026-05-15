import { Router } from "express"
import * as ctrl from "../controllers/treinosController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

/**
 * @swagger
 * /treinos:
 *   get:
 *     summary: Lista treinos com aluno e instrutor
 *     tags: [Treinos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de treinos
 */
router.get("/", verificarToken, ctrl.listar)

/**
 * @swagger
 * /treinos:
 *   post:
 *     summary: Criar treino
 *     tags: [Treinos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             aluno_id: 3
 *             instrutor_id: 1
 *             nome_treino: Treino A
 *             descricao: Peito e tríceps
 *     responses:
 *       200:
 *         description: Treino criado
 */
router.post("/", verificarToken, ctrl.criar)

/**
 * @swagger
 * /treinos/{id}:
 *   put:
 *     summary: Atualizar treino
 *     tags: [Treinos]
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
 *             nome_treino: Treino B
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", verificarToken, ctrl.editar)

/**
 * @swagger
 * /treinos/{id}:
 *   delete:
 *     summary: Deletar treino
 *     tags: [Treinos]
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