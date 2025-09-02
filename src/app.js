import express from "express"
import {engine} from "express-handlebars"
import { Server } from "socket.io"
import {createRouterVistas} from "./src/router/routerVistas.js"
import path from "path"
import { fileURLToPath } from "url"
import { Router } from "express"
import http from "http"
import { Socket } from "dgram"


const app = express()
const __dirname = path.dirname(__fileName)
const __fileName  = fileURLToPath(import.meta.url)
const io = new Server  (servidorHttp)
const servidorHttp = http.createServer(app)


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname,"src/views"))
app.use("/", VistasRouter())
app.set("io", io)

io.on ("connection", Socket =>{
    console.log("se conecto un usuario")
}) 