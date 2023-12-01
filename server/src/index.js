import express from "express";

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

app.listen(PORT, () => {
   console.log(`Server is listening on http://localhost:${PORT}`); 
})