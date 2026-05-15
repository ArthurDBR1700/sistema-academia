import { db } from "../config/db.js"

// LISTAR
export const listar = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM instrutores")
  res.json(rows)
}

// CRIAR
export const criar = async (req, res) => {
  const { nome, especialidade, telefone, email } = req.body

  await db.query(
    "INSERT INTO instrutores (nome, especialidade, telefone, email) VALUES (?, ?, ?, ?)",
    [nome, especialidade, telefone, email]
  )

  res.json({ msg: "Instrutor criado" })
}

// EDITAR
export const editar = async (req, res) => {
  const { id } = req.params
  const { nome, especialidade } = req.body

  await db.query(
    "UPDATE instrutores SET nome=?, especialidade=? WHERE id=?",
    [nome, especialidade, id]
  )

  res.json({ msg: "Atualizado" })
}

// DELETAR
export const deletar = async (req, res) => {
  const { id } = req.params

  await db.query("DELETE FROM instrutores WHERE id=?", [id])

  res.json({ msg: "Deletado" })
}