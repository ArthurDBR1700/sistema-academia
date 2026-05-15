import request from "supertest"
import app from "../src/app.js"

let token

beforeAll(async () => {

  const response = await request(app)
    .post("/auth/login")
    .send({
      email: "olivia@email.com",
      senha: "123456"
    })

  token = response.body.token
})

describe("Testes Planos", () => {

  test("Deve criar plano", async () => {

    const response = await request(app)
      .post("/planos")
      .set("Authorization", `Bearer ${token}`)
      .send({
        nome: "Plano Teste",
        descricao: "Plano criado no teste",
        valor: 100,
        duracao_meses: 1
      })

    expect(response.statusCode).toBe(200)
    expect(response.body.msg).toBe("Plano criado")
  })

  test("Deve listar planos", async () => {

    const response = await request(app)
      .get("/planos")
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

})