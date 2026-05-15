import { db } from "../config/db.js"

export const listarTreinos = () => {
  return db.query(`
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
}

export const criarTreino = (aluno_id, instrutor_id, nome, descricao) => {
  return db.query(
    "INSERT INTO treinos (aluno_id, instrutor_id, nome_treino, descricao) VALUES (?, ?, ?, ?)",
    [aluno_id, instrutor_id, nome, descricao]
  )
}