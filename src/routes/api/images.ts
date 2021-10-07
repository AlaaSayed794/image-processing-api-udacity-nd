import express from "express";
import { getImagesDir } from "../../utils/fsUtils";
import fs from "fs"

const images = express.Router()

images.get("/", async (req, res) => {
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
export default images