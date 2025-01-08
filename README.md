# Social Media Performance Analysis

This project is a powerful web application designed to analyze social media performance using AI-powered workflows and scalable data storage. Built with LangFlow and DataStax Astra DB, it processes user queries and delivers actionable insights into social media engagement trends.

# Youtube - Watch the Project Overview
For a complete overview of the project watch the following YouTube video:
[![Watch the Project Overview on YouTube](https://img.youtube.com/vi/Xp-z1niSNjQ/0.jpg)](https://www.youtube.com/watch?v=Xp-z1niSNjQ)

# Live Demo

Explore the deployed project here: <a href="https://rebrand.ly/trojangang" >Social Media Performance Analysis</a>

# Features

 - 📊 Engagement Analytics: Analyze mock social media posts, including carousels, reels, and static images.
 - 🤖 AI-Powered Workflows: LangFlow simplifies the creation of complex AI workflows.
 - 💾 Scalable Data Storage: Integrates with DataStax Astra DB for efficient vector storage and retrieval.
 - 🛡️ Secure API Requests: Protected with Helmet and rate-limiting to ensure safety and scalability.
 - 🌐 Responsive UI: A clean, user-friendly interface for seamless interaction.

# Getting Started

1. Import trojangang.json into Langflow

2. Ensure you have the following installed on your system:
- Node.js 18.x
- npm

# Environment Variables

Create a .env file in the root directory and add the following variables:
```bash
APPLICATION_TOKEN=<your_application_token>
LANGFLOW_BASE_URL=<your_langflow_base_url>
FLOW_ID=<your_flow_id>
LANGFLOW_ID=<your_langflow_id>
PORT=<your_preferred_port> # Default: 3000
```
## Installation

1.	Clone the repository:
 ```bash
git clone https://github.com/devangyadav/TrojanGang.git
cd socialmediaanalysis
```
2.	Install dependencies:
```bash
npm install
```
3.	Start the server:
```bash
npm start
```
# Project Structure
```plaintext
├── public/                 # Static assets (HTML, CSS, JS)
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Stylesheet for the UI
│   ├── app.js              # Client-side JavaScript
├── server.mjs              # Express server
├── package.json            # Project metadata and dependencies
├── .env                    # Environment variables
├── TrojanGang.json         # LangFlow configuration file
└── README.md               # Project documentation
```

# Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: DataStax Astra DB
- AI Workflow: LangFlow
- Gemini API

# License
This project is licensed under the [MIT License](LICENSE).
