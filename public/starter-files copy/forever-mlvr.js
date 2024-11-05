const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', async (req, res) => {
    const url = "http://colormind.io/api/";
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "default",
                input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        const palette = result.result;
        const data = {
            model: "default",
            input: [
                [44, 43, 44], 
                [90, 83, 82], 
                palette[0], 
                palette[1], 
                palette[2]
            ]
        };
        res.json(data.input);
        // return `New palette: ${data.input}`;
        
      } catch (error) {
        console.error("Error fetching the palette:", error);
        res.status(404).json({ error: "Failed to fetch palette." });
      }
    });
    
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});