const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// Serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Endpoint that triggers the server-side POST request
app.get("/trigger-post", async (req, res) => {
    try {
        const response = await axios.post("https://webhook.site/f1fa13f2-156b-45b5-b84a-a7c0216d71f0", {
            message: "This is a test message triggered by a bot visit.",
        });
        res.send(
            `Server-side POST request sent. Response: ${JSON.stringify(response.data)}`,
        );
    } catch (error) {
        res.status(500).send("Error sending POST request");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
