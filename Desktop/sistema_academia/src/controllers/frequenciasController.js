import { db } from "../config/db.js"

// LISTAR
export const listar = async (req, res) => {
  const [rows] = await db.query(`
    SELECT 
      f.id,
      f.data_frequencia,
      f.presente,
      f.observacao,
      a.nome AS aluno
    FROM frequencias f
    INNER JOIN alunos a ON f.aluno_id = a.id
  `)

  res.json(rows)
}

// CRIAR
export const criar = async (req, res) => {
  const { aluno_id, data_frequencia, presente, observacao } = req.body

  await db.query(
    "INSERT INTO frequencias (aluno_id, data_frequencia, presente, observacao) VALUES (?, ?, ?, ?)",
    [aluno_id, data_frequencia, presente, observacao]
  )

  res.json({ msg: "Frequência registrada" })
}

// EDITAR
export const editar = async (req, res) => {
  const { id } = req.params
  const { presente, observacao } = req.body

  await db.query(
    "UPDATE frequencias SET presente=?, observacao=? WHERE id=?",
    [presente, observacao, id]
  )

  res.json({ msg: "Atualizado" })
}

// DELETAR
export const deletar = async (req, res) => {
  const { id } = req.params

  await db.query("DELETE FROM frequencias WHERE id=?", [id])

  res.json({ msg: "Deletado" })
}