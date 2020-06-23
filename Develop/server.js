//require the express module
const express = require("express");
const path =  require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes")
//create a server
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use( express.static('public') );
app.use("/api",apiRoutes );
app.use( htmlRoutes );

//define the port
const PORT = process.env.PORT || 3000;

app.listen( PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});