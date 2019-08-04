/**
 * @fileOverview this is the main file and serves as the root entry point of the application
 * @author Eucossa
 * @version 0.0.1
 */

const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//import custom routes
const AuthRoutes = require('./routes/auth');
const PostRoutes = require('./routes/post_routes');
const ModuleRoutes = require('./routes/modules_routes');
const eventsRoutes = require('./routes/events_routes')
dotenv.config();

//conect mongoDb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true });

mongoose.connection.once('open', function () {
    console.log('connection made sucessfull');
   
}).on('error', function (error) {
    console.log('connection error:', error)
})
//middlewares
app.use('/uploads', express.static('uploads'))
app.use(express.json());

//route middleware
app.use('/api/user',AuthRoutes);
app.use('/api/posts',PostRoutes);
app.use('/api/modules', ModuleRoutes);
app.use('/api/events', eventsRoutes);


app.listen(3500,()=>{
    console.log('server up and running')
});