import express from 'express'
import database from './database.js'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())


await database.sync()

app.listen(3000, ()=>console.log('Server is running on port 3000'))