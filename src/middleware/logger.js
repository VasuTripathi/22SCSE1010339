// === utils/loggerMiddleware.js ===

export async function logAction(action, payload = {}) {
  const token = "YOUR_ACCESS_TOKEN_HERE"; // 🔁 Replace with your actual access token
  const payloadMessage = `${action} - ${JSON.stringify(payload)}`;

  const logEntry = {
    stack: "frontend",              // or "backend" depending on usage
    level: "info",                  // "info" | "error" | "debug"
    package: "utils",              // "utils", "page", "hook", etc.
    message: payloadMessage,
  };

  try {
    const response = await fetch("http://20.244.55.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Include your token here
      },
      body: JSON.stringify(logEntry),
    });

    if (!response.ok) {
      console.error("Logging failed:", response.status);
    }
  } catch (error) {
    console.error("Error while sending log:", error);
  }
}
