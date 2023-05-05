const express = require('express');
const {PORT} = require('./config/serverConfig')

function setupAuthServer(){
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server running at ${PORT}`);
    })
}

setupAuthServer();