import { db } from "../config/db.js"

export const listarInstrutores = () => {
  return db.query("SELECT * FROM instrutores")
}

export const criarInstrutor = (nome, especialidade) => {
  return db.query(
    "INSERT INTO instrutores (nome, especialidade) VALUES (?, ?)",
    [nome, especialidade]
  )
}