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

describe("Testes Frequências", () => {

  test("Deve listar frequências", async () => {

    const response = await request(app)
      .get("/frequencias")
      .set("Authorization", `Bearer ${token}`)

    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

})