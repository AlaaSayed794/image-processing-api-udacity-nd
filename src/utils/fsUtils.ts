import fs from "fs"
import path from "path"

export const getImagesDir = async (dir: string): Promise<string> => {
    let imagesDir = ""
    const dirContents: string[] = await fs.readdirSync(dir)
    if (dirContents.includes("images")) {
        imagesDir = path.join(dir, "images/full")
        return imagesDir
    }
    else {
        imagesDir = await getImagesDir(path.join(dir, ".."))
        return imagesDir
    }
}