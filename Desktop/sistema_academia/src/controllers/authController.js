import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { db } from "../config/db.js"

export const registrar = async (req, res) => {
  const { nome, email, senha } = req.body

  try {
    const hash = await bcrypt.hash(senha, 10)

    await db.query(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hash]
    )

    res.json({ msg: "Usuário criado" })
  } catch (err) {
    res.status(500).json(err)
  }
}

export const login = async (req, res) => {
  const { email, senha } = req.body

  try {
    const [user] = await db.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    )

    if (user.length === 0) {
      return res.status(404).json({ msg: "Usuário não encontrado" })
    }

    const valid = await bcrypt.compare(senha, user[0].senha)

    if (!valid) {
      return res.status(401).json({ msg: "Senha inválida" })
    }

    const token = jwt.sign(
      { id: user[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.json({ 
      mensagem: "Login realizado com sucesso",
      token
     })
  } catch (err) {
    res.status(500).json(err)
  }
}