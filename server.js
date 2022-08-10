const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 12000000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // LOCAL
// app.use(cors());

// DEPLOYED
app.use(cors({
  origin: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://main--profound-lollipop-4eb9d0.netlify.app/"
}))

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
