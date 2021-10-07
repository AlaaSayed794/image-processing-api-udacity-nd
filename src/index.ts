import express from "express"
import logger from "./middlewares/logger"
import path from 'path'
import fs from "fs"
import { getImagesDir } from "./utils/fsUtils"

const app = express()
const port = 3000
app.use([logger])

app.get('/', async (req, res) => {
    const filename = req.query.filename
    if (filename) {
        const imagesDir = await getImagesDir(__dirname)
        const imagePath = `${imagesDir}/${filename}.jpg`
        if (fs.existsSync(imagePath)) {
            res.sendFile(imagePath)
        }
        else {
            res.status(400)
            res.send("file name is invalid")
        }
    }
    else {
        res.status(400)
        res.send("please provide valid filename as a query parameter")
    }
})
app.listen(port, () => {
    console.log("server started on port: " + port)
})