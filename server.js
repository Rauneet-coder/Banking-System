// This is main server file where all the important things like server configs and all will be written..
require('dotenv').config()
const app = require("./src/app.src")

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})