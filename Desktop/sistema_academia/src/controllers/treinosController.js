import { db } from "../config/db.js"

// 🔥 LISTAR COM INNER JOIN (OBRIGATÓRIO)
export const listar = async (req, res) => {
  const [rows] = await db.query(`
    SELECT 
      t.id,
      t.nome_treino,
      t.descricao,
      t.data_inicio,
      t.data_fim,
      a.nome AS aluno,
      i.nome AS instrutor
    FROM treinos t
    INNER JOIN alunos a ON t.aluno_id = a.id
    INNER JOIN instrutores i ON t.instrutor_id = i.id
  `)

  res.json(rows)
}

// CRIAR
export const criar = async (req, res) => {
  const { aluno_id, instrutor_id, nome_treino, descricao } = req.body

  await db.query(
    "INSERT INTO treinos (aluno_id, instrutor_id, nome_treino, descricao) VALUES (?, ?, ?, ?)",
    [aluno_id, instrutor_id, nome_treino, descricao]
  )

  res.json({ msg: "Treino criado" })
}

// EDITAR
export const editar = async (req, res) => {
  const { id } = req.params
  const { nome_treino } = req.body

  await db.query(
    "UPDATE treinos SET nome_treino=? WHERE id=?",
    [nome_treino, id]
  )

  res.json({ msg: "Atualizado" })
}

// DELETAR
export const deletar = async (req, res) => {
  const { id } = req.params

  await db.query("DELETE FROM treinos WHERE id=?", [id])

  res.json({ msg: "Deletado" })
}