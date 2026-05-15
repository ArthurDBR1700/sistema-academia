import request from "supertest"
import app from "../src/app.js"

let emailTeste = `teste_${Date.now()}@email.com`

describe("Testes Auth", () => {

  test("Deve registrar usuário", async () => {
    const response = await request(app)
      .post("/auth/registrar")
      .send({
        nome: "Teste",
        email: emailTeste,
        senha: "123456"
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("msg")
  })

  test("Deve fazer login", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        email: emailTeste,
        senha: "123456"
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty("token")
  })

})