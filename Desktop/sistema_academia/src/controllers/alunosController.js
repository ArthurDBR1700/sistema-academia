import { db } from "../config/db.js"

export const listar = async (req, res) => {
  const [rows] = await db.query(`
    SELECT alunos.*, planos.nome AS plano
    FROM alunos
    LEFT JOIN planos ON alunos.plano_id = planos.id
  `)

  res.json(rows)
}

export const criar = async (req, res) => {
  const { nome, cpf, plano_id } = req.body

  await db.query(
    "INSERT INTO alunos (nome, cpf, plano_id) VALUES (?, ?, ?)",
    [nome, cpf, plano_id]
  )

  res.json({ msg: "Aluno criado" })
}

export const editar = async (req, res) => {
  const { id } = req.params
  const { nome } = req.body

  await db.query(
    "UPDATE alunos SET nome=? WHERE id=?",
    [nome, id]
  )

  res.json({ msg: "Atualizado" })
}

export const deletar = async (req, res) => {
  const { id } = req.params
  await db.query("DELETE FROM alunos WHERE id=?", [id])
  res.json({ msg: "Deletado" })
}