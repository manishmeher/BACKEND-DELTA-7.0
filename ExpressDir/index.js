const express = require("express");
const app = express();

console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @${username}.`);
});

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.use((req, res) => {
//     res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// });
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("<h1>nothing searched</h1>");
    }
    res.send(`search result for query: ${q}`);
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// });