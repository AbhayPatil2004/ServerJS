const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Server 3</title>
            <style>
                body{
                    background:#fff3e0;
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
                    color:orange;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Server 3</h1>
                <p>Hello from EC2 Instance 3</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(80, () => {
    console.log("Server 3 running on port 3002");
});
