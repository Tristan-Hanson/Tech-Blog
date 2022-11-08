const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connect');
const session = require('express-session');
const engine = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join('views')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const sesh = {
  secret: 'super secret sauce',
  cookie: {maxAge: 60000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', engine.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(session(sesh));
app.use(routes);
// app.set('views', './views');

// sync sequelize models to the database, then turn on the server
async function start(){
  await sequelize.sync({alter: true});
  app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT} !`);
  });
}
start();