const express = require("express");
require("dotenv").config();
const port = process.env.PORT;
const app = express();




app.listen(port, (err)=> err? console.error(err): console.log(`SERVER IS RUNNING ON PORT ${port}`) );
