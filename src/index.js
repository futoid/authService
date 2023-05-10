const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');
const UserService = require('./services/user-service');

const apiRoutes = require('./routes/index');
// const UserRepository = require('./repository/user-repository');

async function setupAuthServer(){
    const app = express();    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    // const obj = new UserService();
    // const aa = await obj.signIn("funtoid@admin.com", "1234");
    // console.log(aa);
    app.use("/api" , apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    })
}

setupAuthServer();