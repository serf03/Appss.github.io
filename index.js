import app from "./app.js";
const port = 2000;
app.listen(process.env.PORT || port, () => console.log("Server on port", port));
