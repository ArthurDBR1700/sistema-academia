import { Router } from "express"
import * as auth from "../controllers/authController.js"

const router = Router()

/**
 * @swagger
 * /auth/registrar:
 *   post:
 *     summary: Registrar usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Olivia
 *             email: olivia@email.com
 *             senha: 123456
 *     responses:
 *       200:
 *         description: Usuário criado
 */
router.post("/registrar", auth.registrar)

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login do usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: olivia@email.com
 *             senha: 123456
 *     responses:
 *       200:
 *         description: Retorna o token
 */
router.post("/login", auth.login)

export default router