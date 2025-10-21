# HNG13 Stage 1 - Sample Application

A simple Node.js Express application for demonstrating automated deployment with Docker and Nginx.

## Features
- Express web server
- Health check endpoint
- Dockerized
- Ready for automated deployment

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Installation
\`\`\`bash
npm install
\`\`\`

### Run Locally
\`\`\`bash
npm start
\`\`\`

Visit: http://localhost:3000

## Docker

### Build Image
\`\`\`bash
docker build -t hng13-app .
\`\`\`

### Run Container
\`\`\`bash
docker run -p 3000:3000 hng13-app
\`\`\`

## API Endpoints

- \`GET /\` - Main page
- \`GET /health\` - Health check (returns JSON)
- \`GET /api/info\` - Application info (returns JSON)

## Deployment

This application is designed to be deployed using the automated deployment script from HNG13 Stage 1 repository.

## Author
Albert Mitini-Sadigben - HNG13 DevOps Intern

## License
MIT
