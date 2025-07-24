// app/api/images/route.js
import fs from 'fs'
import path from 'path'

export async function GET() {
    const studentsDir = path.join(process.cwd(),"public", "students")
    const files = fs.readdirSync(studentsDir)
    // Filter image files only
    const images = files.map(name => (`/students/${name}`))

    return Response.json({ images })
}
