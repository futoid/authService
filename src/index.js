const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');
const {Role , User} = require('./models/index');

async function setupAuthServer(){
    const app = express();    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use("/api" , apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    })
}

setupAuthServer();