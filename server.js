const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'sharingwood',
  cookie: {maxAge: 12000000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// // LOCAL
// app.use(cors());

// DEPLOYED
// app.use(cors(corsOptions))

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:3000', 'https://profound-lollipop-4eb9d0.netlify.app', 'http://bradleydosch.com', 'https://bradleydosch.com' ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  return next();
});

app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
