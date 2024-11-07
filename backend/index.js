// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const linkRoutes = require('./routes/linkRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api', linkRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });






const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const linkRoutes = require('./routes/linkRoutes');

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', linkRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});