import express from "express"
import logger from "./middlewares/logger"
import routes from "./routes"

const app = express()
const port = 3000
app.use([logger])
app.use('/api', routes)

app.get('/', async (req, res) => {
    res.send("use api/images?filename={yourfilename} to get started")
})

app.listen(port, () => {
    console.log("server started on port: " + port)
})