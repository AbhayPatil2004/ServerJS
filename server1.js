const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Server 1</title>
            <style>
                body{
                    background:#f2f2f2;
                    font-family:Arial;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                }

                .card{
                    background:white;
                    padding:30px;
                    border-radius:10px;
                    box-shadow:0 0 10px gray;
                    text-align:center;
                }

                h1{
                    color:blue;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Server 1</h1>
                <p>Hello from EC2 Instance 1</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log("Server 1 running on port 3000");
});