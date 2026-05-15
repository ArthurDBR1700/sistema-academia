import { db } from "../config/db.js"

export const listar = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM planos")
  res.json(rows)
}

export const criar = async (req, res) => {
  const { nome, descricao, valor, duracao_meses } = req.body

  await db.query(
    "INSERT INTO planos (nome, descricao, valor, duracao_meses) VALUES (?, ?, ?, ?)",
    [nome, descricao, valor, duracao_meses]
  )

  res.json({ msg: "Plano criado" })
}

export const editar = async (req, res) => {
  const { id } = req.params
  const { nome, valor } = req.body

  await db.query(
    "UPDATE planos SET nome=?, valor=? WHERE id=?",
    [nome, valor, id]
  )

  res.json({ msg: "Atualizado" })
}

export const deletar = async (req, res) => {
  const { id } = req.params
  await db.query("DELETE FROM planos WHERE id=?", [id])
  res.json({ msg: "Deletado" })
}