const base = "chipbooru";

const express = require("express");
const app = express();
const PORT = 5500;

app.use("/"+base, express.static(__dirname));
app.get("/", (req, res) => {
	res.redirect(`/${base}?s`);
});

app.listen(PORT, () => {
	console.log(`Server running at http://127.0.0.1:${PORT}/${base}/`);
});