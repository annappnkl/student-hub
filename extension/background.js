chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "sendToHub") {
      fetch("https://35cefb39b151.ngrok.app/save-to-hub", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message.payload)
      })
        .then(async res => {
          const text = await res.text(); // get raw text safely
          try {
            const data = JSON.parse(text);
            sendResponse({ success: true, data });
          } catch (e) {
            console.warn("⚠️ Response not JSON, continuing anyway");
            sendResponse({ success: true });
          }
        })
        .catch(err => {
          console.error("❌ Backend error:", err);
          sendResponse({ success: false, error: err.message });
        });
  
      return true;
    }
  });
  