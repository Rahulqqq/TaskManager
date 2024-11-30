const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET; // Load JWT secret from .env
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Running port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//console.log('JWT_SECRET:', process.env.JWT_SECRET);



