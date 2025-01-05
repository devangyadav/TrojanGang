import express from "express";
import path from "path";
import fetch from "node-fetch";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
app.use(limiter);

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const __dirname = path.resolve(process.cwd());
app.use(express.static(path.join(__dirname, "public")));

if (
  !process.env.APPLICATION_TOKEN ||
  !process.env.LANGFLOW_BASE_URL ||
  !process.env.FLOW_ID ||
  !process.env.LANGFLOW_ID
) {
  console.error("Missing required environment variables.");
  process.exit(1);
}

const applicationToken = process.env.APPLICATION_TOKEN;
const langflowBaseURL = process.env.LANGFLOW_BASE_URL;

const langflowClient = async (flowId, langflowId, inputValue) => {
  const url = `${langflowBaseURL}/lf/${langflowId}/api/v1/run/${flowId}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${applicationToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_value: inputValue }),
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          "Authorization failed. The token may be expired or invalid."
        );
      } else {
        throw new Error("An error occurred while interacting with LangFlow.");
      }
    }

    return response.json();
  } catch (error) {
    console.error("Error during LangFlow API request:", error.message);
    throw error;
  }
};

app.post("/", async (req, res) => {
  const { inputValue } = req.body;
  const flowId = process.env.FLOW_ID;
  const langflowId = process.env.LANGFLOW_ID;

  try {
    const result = await langflowClient(flowId, langflowId, inputValue);
    res.json(result);
  } catch (error) {
    console.error("Error analyzing data:", error);
    res.status(500).json({ error: error.message || "Error analyzing data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
