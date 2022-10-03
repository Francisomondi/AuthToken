const express = require("express")
const app = express()

app.get("/", (req, res) => {
    console.log("we are up running")
    res.send("we are up running")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})