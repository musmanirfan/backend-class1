import express from "express"
import cors from "cors"
import morgan from "morgan"
import path from "path"
import fs from "fs"



const app = express()


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

const htmlPath = path.resolve("public", "index.html");

console.log("Resolved filePath:", htmlPath);

app.get("/hello", (req, res) => {
    console.log("Request Received:", req.url);

    // **index.html file ko serve karne ke liye**
    if (fs.existsSync(htmlPath)) {
        res.sendFile(htmlPath);
    } else {
        res.send("Hello World!");
    }
});



app.listen("3000", () => {
    console.log("server started on port: 3000")
})