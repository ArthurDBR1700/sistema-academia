import { db } from "../config/db.js"

export const listarAlunos = () => {
  return db.query(`
    SELECT a.*, p.nome AS plano
    FROM alunos a
    LEFT JOIN planos p ON a.plano_id = p.id
  `)
}

export const criarAluno = (nome, cpf, plano_id) => {
  return db.query(
    "INSERT INTO alunos (nome, cpf, plano_id) VALUES (?, ?, ?)",
    [nome, cpf, plano_id]
  )
}