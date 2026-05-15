import bcrypt from "bcryptjs"
import { db } from "../config/db.js"

export const listar = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM usuarios")
  res.json(rows)
}

export const criar = async (req, res) => {
  const { nome, email, senha } = req.body

  try {
    const hash = await bcrypt.hash(senha, 10)

    await db.query(
      "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, hash]
    )

    res.json({ msg: "Criado" })
  } catch (err) {
    res.status(500).json(err)
  }
}

export const editar = async (req, res) => {
  const { id } = req.params
  const { nome, email } = req.body

  try {
    await db.query(
      "UPDATE usuarios SET nome=?, email=? WHERE id=?",
      [nome, email, id]
    )

    res.json({ msg: "Atualizado" })
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deletar = async (req, res) => {
  const { id } = req.params

  try {
    await db.query("DELETE FROM usuarios WHERE id=?", [id])

    res.json({ msg: "Deletado" })
  } catch (err) {
    res.status(500).json(err)
  }
}