import { Router } from "express"
import * as ctrl from "../controllers/usuariosController.js"
import { verificarToken } from "../middlewares/authMiddleware.js"

const router = Router()

router.get("/", verificarToken, ctrl.listar)
router.post("/", ctrl.criar)
router.put("/:id", verificarToken, ctrl.editar)
router.delete("/:id", verificarToken, ctrl.deletar)

export default router