import { Router } from "express"
import * as ctrl from "../controllers/alunosController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista alunos com plano
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get("/", verificarToken, ctrl.listar)

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cadastrar aluno
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: João
 *             cpf: 12345678900
 *             plano_id: 1
 *     responses:
 *       200:
 *         description: Aluno criado
 */
router.post("/", verificarToken, ctrl.criar)

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualizar aluno
 *     tags: [Alunos]
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
 *             nome: João Atualizado
 *     responses:
 *       200:
 *         description: Atualizado
 */
router.put("/:id", verificarToken, ctrl.editar)

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Deletar aluno
 *     tags: [Alunos]
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