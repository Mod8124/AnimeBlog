const express = require('express')
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const router = require('./routes/blogRoutes')
const midlewares = require('./middlewares/authMiddleware')
const port = process.env.PORT || 3000;

require('dotenv').config()


//connect to dataBase 
const connect = async () => {
    try {
        const data = await mongoose.connect(process.env.DB_URL,  { useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`base de datos on : ${data.connection.name}`)
    } catch(err) {
        console.log(err)
    }
}

//midlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('*', midlewares.checkUser)

//public 
app.use(express.static('public'))

//views
app.set('view engine', 'ejs')

//index 
app.get('/', (req, res)=> res.render('index'))

app.use(router)

app.use((req, res)=> {
    res.status(404).render('404')
})

app.listen(port, ()=> {
    connect()
    console.log('server on')
})

