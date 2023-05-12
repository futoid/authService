const express = require('express');
const {PORT} = require('./config/serverConfig')
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/index');
const {Role , User} = require('./models/index');

async function setupAuthServer(){
    const app = express();    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter : true});
    // }
    // const u1 = await User.findByPk(7);
    // const r1 = await Role.findByPk(1);
    // const temp = await u1.hasRole(r1);
    // console.log(temp);
    app.use("/api" , apiRoutes);
    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    })
}

setupAuthServer();