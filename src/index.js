const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const router = require('./routes/blogRoutes');
const middlewares = require('./middlewares/authMiddleware');
const ConnectMongoDb = require('./connections/ConnectMongoDb');
const port = process.env.PORT || 3000;
const { connect } = ConnectMongoDb();
const path = require('path');

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('*', middlewares.checkUser);

// public
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

// index
app.get('/', (req, res) => res.render('index'));

app.use(router);

app.use((req, res) => res.status(404).render('404'));

app.listen(port, () => {
  connect();
  console.log(`server on http://localhost:${port}`);
});

module.exports = app;
