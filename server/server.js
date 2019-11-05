const path = require("path");
const express = require("express");

let app = express();
let publicPath = path.join(__dirname , '../public');
let port = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});