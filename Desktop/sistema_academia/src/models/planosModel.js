import { db } from "../config/db.js"

export const listarPlanos = () => {
  return db.query("SELECT * FROM planos")
}

export const criarPlano = (nome, descricao, valor, duracao) => {
  return db.query(
    "INSERT INTO planos (nome, descricao, valor, duracao_meses) VALUES (?, ?, ?, ?)",
    [nome, descricao, valor, duracao]
  )
}