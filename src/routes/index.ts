import express from "express";
import images from "./api/images";
const routes = express.Router()
routes.use("/images", images)
routes.get("/", (req, res) => {
    res.send("use api/images?filename={yourfilename} to get started")
})
export default routes