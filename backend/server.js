const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();
const cors=require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const jobPostingRoutes =require('./routes/jobPostingRoutes');
const trainingCourseRoutes=require('./routes/trainingCourseRoutes');
const eventRoutes=require('./routes/eventRoutes');
const placementStatRoutes=require('./routes/placementStatRoutes');
const jobApplicationRoutes =require('./routes/jobApplicationRoutes');
const studentProfileRoutes=require('./routes/studentProfileRoutes');
const queryRoutes =require('./routes/queryRoutes');


const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs',jobPostingRoutes);
app.use('/api/training',trainingCourseRoutes);
app.use('/api/event',eventRoutes);
app.use('/api/placementStats',placementStatRoutes);
app.use('/api/jobs',jobApplicationRoutes);
app.use('/api/profile',studentProfileRoutes);
app.use('/api/query',queryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
