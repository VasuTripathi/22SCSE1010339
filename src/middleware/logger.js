// === utils/loggerMiddleware.js ===

export async function logAction(action, payload = {}) {
  const token = "Muagvq"; 
  const payloadMessage = `${action} - ${JSON.stringify(payload)}`;

  const logEntry = {
    stack: "frontend",              
    level: "info",                 
    package: "utils",             
    message: payloadMessage,
  };

  try {
    const response = await fetch("http://20.244.55.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
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
