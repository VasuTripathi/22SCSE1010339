export function logAction(action, payload) {
  const logEntry = {
    time: new Date().toISOString(),
    action,
    payload,
  };

  let logs = JSON.parse(sessionStorage.getItem("logs") || "[]");
  logs.push(logEntry);
  sessionStorage.setItem("logs", JSON.stringify(logs));
}
