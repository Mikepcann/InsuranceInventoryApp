import './env.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 3000
app.disable('x-powered-by')

const PWORD ='password'
const USER = 'email@example.com'

// ESM specific features
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// console.log('path.join: ' + path.join(__dirname, 'public/style.css'))
// console.log('path: ' + __dirname)

// Configure Template Engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

// Set up static pages
app.use(express.static(path.join(__dirname + '/public/')))


// register middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('pages/login', { title: 'Login'})
})

app.post('/login', (req, res) => {
    console.log(req.body)
    const  { password } = req.body
    const { email } = req.body
     
    if( USER === email && PWORD === password) {
        res.render('pages/home', {user: email, title: 'Home'})
       return 
    }
    res.status(403).send('FORBIDDEN')
})

// about page
app.get('/about', function (req, res) {
	res.render('pages/index')
})


app.listen(port, () => {
	console.log(`Server is live! Listening on http://localhost:${port}`)
})
