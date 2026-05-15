import express from "express"
import cors from "cors"

// SWAGGER
import swaggerUi from "swagger-ui-express"
import swaggerJsdoc from "swagger-jsdoc"


// ROTAS
import authRoutes from "./routes/authRoutes.js"
import usuariosRoutes from "./routes/usuariosRoutes.js"
import alunosRoutes from "./routes/alunosRoutes.js"
import planosRoutes from "./routes/planosRoutes.js"
import treinosRoutes from "./routes/treinosRoutes.js"
import instrutoresRoutes from "./routes/instrutoresRoutes.js"
import frequenciasRoutes from "./routes/frequenciasRoutes.js"

const app = express()


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "ngrok-skip-browser-warning"]
}))
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.get("/", (req, res) => {
  res.json({ msg: "API Academia funcionando" })
})

app.get("/api", (req, res) => {
  res.json({ msg: "API conectada" })
})

app.get("/health", (req, res) => {
  res.json({ msg: "Conexão OK" })
})

app.get("/ping", (req, res) => {
  res.json({ msg: "pong" })
})

app.get("/status", (req, res) => {
  res.json({ msg: "ok" })
})

app.get("/teste", (req, res) => {
  res.json({ msg: "Teste OK" })
})

app.get("//teste", (req, res) => {
  res.json({ msg: "Teste OK" })
})
// app.use("/", (req,res)=>{
//     res.status(200).json({msg:"hello world"})
// })

// ROTAS DA API
app.use("/treinos", treinosRoutes)
app.use("/planos", planosRoutes)
app.use("/instrutores", instrutoresRoutes)
app.use("/frequencias", frequenciasRoutes)
app.use("/auth", authRoutes)
app.use("/usuarios", usuariosRoutes)
app.use("/alunos", alunosRoutes)



//  CONFIGURAÇÃO DO SWAGGER 
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Academia",
      version: "1.0.0",
      description: "Sistema de gerenciamento de academia"
    },
    servers: [
      {
        url: "https://snugly-wager-underline.ngrok-free.dev"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
}


// specs
const specs = swaggerJsdoc(options)

//  usa no app
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs))

export default app