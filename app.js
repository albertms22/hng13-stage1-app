// app.js - Simple Node.js Express Application
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HNG13 Stage 1 Deployment</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 50px auto;
                    padding: 20px;
                    text-align: center;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    min-height: 100vh;
                }
                h1 { font-size: 3em; margin-bottom: 20px; }
                .info { 
                    background: rgba(255,255,255,0.1);
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                }
                .badge {
                    background: #4CAF50;
                    padding: 10px 20px;
                    border-radius: 5px;
                    display: inline-block;
                    margin: 10px;
                }
            </style>
        </head>
        <body>
            <h1>🚀 HNG13 Stage 1</h1>
            <div class="info">
                <h2>Automated Deployment Successful!</h2>
                <p>Deployed by: Albert Mitini-Sadigben</p>
                <p>Date: ${new Date().toLocaleDateString()}</p>
                <div class="badge">✅ Dockerized</div>
                <div class="badge">✅ Nginx Proxy</div>
                <div class="badge">✅ Automated Script</div>
            </div>
            <p>This application was deployed using a fully automated Bash script!</p>
        </body>
        </html>
    `);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// API endpoint
app.get('/api/info', (req, res) => {
    res.json({
        project: 'HNG13 Stage 1',
        version: '1.0.0',
        author: 'Albert Mitini-Sadigben',
        deployed: true
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/health`);
});
