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

describe("Testes Instrutores", () => {

  test("Deve listar instrutores", async () => {

    const response = await request(app)
      .get("/instrutores")
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

})