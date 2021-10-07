import express from "express"
import logger from "../middlewares/logger"
const app = express()
const port = 3000
app.use([logger])

app.get('/', (req, res) => {
    res.send("hello")
})
app.listen(port, () => {
    console.log("server started on port: " + port)
})