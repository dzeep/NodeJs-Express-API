const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

// load environment  vars

dotenv.config({ path: './config/config.env' });

//Connect to Database
connectDB();

const app = express();

//Body Parser
app.use(express.json({ limit: "5mb" }));


//Enable Cors
app.use(cors());

//Routes
app.use('/api/users', require('./routes/users.js'));

app.use('/api/stores', require('./routes/stores.js'));

app.use('/api/post', require('./routes/posts.js'));

app.use('/api/route', require('./routes/route.js'));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to fatihin BikeOn application." });
});

const PORT = process.env.PORT || 4652;

app.listen(PORT, () =>

  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

