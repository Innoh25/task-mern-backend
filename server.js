const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database')
const cors = require('cors')
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware') 

connectDB()
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors)


app.use('/api/tasks',require('./routes/taskRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port,()=>console.log(`Server is up, running on port ${port}`));

