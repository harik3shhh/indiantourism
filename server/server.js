const express = require ("express");
const app = express();
require("./db/conn");

const port = 8000;


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})