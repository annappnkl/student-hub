console.log("✅ Extension script loaded!");
console.log("🧠 Student Hub: content script running");

const keywords = ['assignment', 'exam', 'deadline', 'due', 'task', 'project', 'submission', 'homework', 'course', 'class', 'module'];

// 1. 🧠 Find all text matching keywords

function findKeywordTextEverywhere(keywords) {
    const results = new Set();
  
    function scanElement(el) {
        try {
            if (el.innerText) {
                const text = el.innerText.trim();
      
                // 🧹 Filter out garbage entries (new line to add)
                if (text.length > 400 || /D2L\.|session|function|\{/.test(text)) return;
                
                // 🧹 Filter out navigation elements
                if (el.closest('nav, header, .d2l-navigation, .navbar, .sidebar')) return;

                // 🧹 Filter out short entries (new line to add)
                if (text.length < 20 && !/\n|due|assignment/i.test(text)) return;

                const lower = text.toLowerCase();
                if (keywords.some(k => lower.includes(k))) {
                results.add(text);
                }
            }
  
        // Recurse into Shadow DOM if present
        if (el.shadowRoot) {
          Array.from(el.shadowRoot.querySelectorAll('*')).forEach(scanElement);
        }
  
        // Recurse into children
        Array.from(el.children).forEach(scanElement);
      } catch (e) {
        // Silently fail on inaccessible nodes
      }
    }
  
    // Start from body
    Array.from(document.body.querySelectorAll('*')).forEach(scanElement);
  
    return [...results];
  }

const foundItems = findKeywordTextEverywhere(keywords);
console.log("🧠 Found keyword-matching content:", foundItems);

// 2. ✨ Add floating "Save to Hub" button
const saveBtn = document.createElement('button');
saveBtn.id = 'saveToHubBtn';
saveBtn.innerText = '📥 Save to Hub';
document.body.appendChild(saveBtn);

// 3. 🧠 Helper: extract structured data from found items
function extractData(rawList) {
  return rawList.map((text, i) => {
    return {
      id: i,
      raw: text,
      subject: guessSubject(text),
      deadline: guessDeadline(text),
      type: guessType(text)
    };
  });
}

function guessSubject(text) {
    // Match things like "Week 1 assignment", before "due" or a newline
    const match = text.match(/^(.*?)\s*(?=due|on|\n|$)/i);
    return match ? match[1].trim() : null;
  }

function guessDeadline(text) {
    const dateRegex = /\b(?:due\s+on\s+)?(\d{1,2}\s+\w+\s+\d{4}(?:\s+\d{2}:\d{2})?)/i;
    const match = text.match(dateRegex);
    return match ? match[1].trim() : null;
  }

function guessType(text) {
  const lower = text.toLowerCase();
  if (lower.includes("exam")) return "Exam";
  if (lower.includes("assignment")) return "Assignment";
  if (lower.includes("task")) return "Task";
  return "Unknown";
}

// 4. 🚀 Send data via message to background script
saveBtn.addEventListener('click', () => {
    const structured = extractData(foundItems);
  
    console.log("📤 Sending data to background script:", structured);
  
    chrome.runtime.sendMessage(
      {
        action: "sendToHub",
        payload: structured
      },
      (response) => {
        if (response?.success) {
          alert("✅ Sent to Hub!");
        } else {
          console.error("❌ Error sending:", response?.error);
          alert("❌ Failed to send to Hub");
        }
      }
    );
  });
  
