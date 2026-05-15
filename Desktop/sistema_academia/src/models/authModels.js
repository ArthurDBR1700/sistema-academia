import { db } from "../config/db.js"

export const buscarUsuarioPorEmail = (email) => {
  return db.query("SELECT * FROM usuarios WHERE email = ?", [email])
}

export const criarUsuario = (nome, email, senha) => {
  return db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha]
  )
}