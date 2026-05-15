import { db } from "../config/db.js"

export const listarUsuarios = () => {
  return db.query("SELECT * FROM usuarios")
}

export const criarUsuario = (nome, email, senha) => {
  return db.query(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    [nome, email, senha]
  )
}

export const buscarPorEmail = (email) => {
  return db.query("SELECT * FROM usuarios WHERE email = ?", [email])
}