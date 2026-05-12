const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Server 2</title>
            <style>
                body{
                    background:#e8f5e9;
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
                    color:green;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Server 2</h1>
                <p>Hello from EC2 Instance 2</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(80, () => {
    console.log("Server 2 running on port 3001");
});
