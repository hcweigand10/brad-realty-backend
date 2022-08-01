const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // LOCAL
app.use(cors());

// DEPLOYED
// app.use(cors({
//   origin:"https://glittery-hotteok-47aca0.netlify.app/existing"
// }))

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});