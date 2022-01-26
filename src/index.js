import './env.js'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
console.log(process.env.TESTVALUE);

app.get("/", (req, res) => {
    res.send('This site is live!')
})
app.listen(PORT, (err) => {
	console.log(`Server is live! Listening on http://localhost:${PORT}`)
})
