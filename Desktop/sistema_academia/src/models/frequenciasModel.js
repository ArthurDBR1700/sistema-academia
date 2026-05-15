import { db } from "../config/db.js"

export const listarFrequencias = () => {
  return db.query(`
    SELECT 
      f.id,
      f.data_frequencia,
      f.presente,
      f.observacao,
      a.nome AS aluno
    FROM frequencias f
    INNER JOIN alunos a ON f.aluno_id = a.id
  `)
}

export const criarFrequencia = (aluno_id, data, presente, obs) => {
  return db.query(
    "INSERT INTO frequencias (aluno_id, data_frequencia, presente, observacao) VALUES (?, ?, ?, ?)",
    [aluno_id, data, presente, obs]
  )
}