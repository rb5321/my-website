// ===== BACK TO TOP BUTTON =====

// Create button element
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑ Top";
backToTopBtn.id = "backToTopBtn";

// Style the button
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "30px";
backToTopBtn.style.right = "30px";
backToTopBtn.style.padding = "12px 16px";
backToTopBtn.style.fontSize = "16px";
backToTopBtn.style.backgroundColor = "#0d47a1";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
backToTopBtn.style.zIndex = "1000";

document.body.appendChild(backToTopBtn);

// Show button when scrolled down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll smoothly to top on click
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== ASSISTANT DIALOGUE BOX =====

// Chat container
const chatContainer = document.createElement("div");
chatContainer.style.position = "fixed";
chatContainer.style.bottom = "30px";
chatContainer.style.right = "100px";
chatContainer.style.width = "300px";
chatContainer.style.background = "#ffffff";
chatContainer.style.borderRadius = "10px";
chatContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
chatContainer.style.display = "none";
chatContainer.style.flexDirection = "column";
chatContainer.style.overflow = "hidden";
chatContainer.style.zIndex = "1000";

// Header
const chatHeader = document.createElement("div");
chatHeader.style.background = "#0d47a1";
chatHeader.style.color = "#fff";
chatHeader.style.padding = "10px";
chatHeader.style.fontWeight = "bold";
chatHeader.innerText = "UPSC Assistant";
chatContainer.appendChild(chatHeader);

// Messages area
const chatMessages = document.createElement("div");
chatMessages.style.padding = "10px";
chatMessages.style.height = "200px";
chatMessages.style.overflowY = "auto";
chatMessages.style.fontSize = "14px";
chatMessages.innerHTML = "<p><b>Assistant:</b> Hello! Ask me about UPSC preparation.</p>";
chatContainer.appendChild(chatMessages);

// Input area
const chatInputArea = document.createElement("div");
chatInputArea.style.display = "flex";

const chatInput = document.createElement("input");
chatInput.type = "text";
chatInput.placeholder = "Type your question...";
chatInput.style.flex = "1";
chatInput.style.border = "none";
chatInput.style.padding = "10px";
chatInput.style.outline = "none";

const sendBtn = document.createElement("button");
sendBtn.innerText = "Send";
sendBtn.style.border = "none";
sendBtn.style.padding = "10px";
sendBtn.style.background = "#1565c0";
sendBtn.style.color = "#fff";
sendBtn.style.cursor = "pointer";

chatInputArea.appendChild(chatInput);
chatInputArea.appendChild(sendBtn);
chatContainer.appendChild(chatInputArea);

document.body.appendChild(chatContainer);

// Toggle button to open chat
const chatToggleBtn = document.createElement("button");
chatToggleBtn.innerText = "💬";
chatToggleBtn.style.position = "fixed";
chatToggleBtn.style.bottom = "30px";
chatToggleBtn.style.right = "160px";
chatToggleBtn.style.padding = "12px";
chatToggleBtn.style.borderRadius = "50%";
chatToggleBtn.style.border = "none";
chatToggleBtn.style.background = "#0d47a1";
chatToggleBtn.style.color = "#fff";
chatToggleBtn.style.fontSize = "18px";
chatToggleBtn.style.cursor = "pointer";
chatToggleBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
chatToggleBtn.style.zIndex = "1000";

document.body.appendChild(chatToggleBtn);

// Open/close chat box
chatToggleBtn.addEventListener("click", () => {
    chatContainer.style.display =
        chatContainer.style.display === "none" ? "flex" : "none";
});

// Simple assistant reply logic
function assistantReply(userText) {
    userText = userText.toLowerCase();

    if (userText.includes("syllabus")) {
        return "Start with NCERTs and then move to standard reference books for each subject.";
    } else if (userText.includes("strategy")) {
        return "Focus on revision, mock tests, and answer writing practice regularly.";
    } else if (userText.includes("optional")) {
        return "Choose an optional subject based on your interest and available resources.";
    } else {
        return "Keep studying daily and stay consistent. You can ask about syllabus or strategy.";
    }
}

// Send message
function sendMessage() {
    const text = chatInput.value.trim();
    if (text === "") return;

    chatMessages.innerHTML += `<p><b>You:</b> ${text}</p>`;
    const reply = assistantReply(text);
    chatMessages.innerHTML += `<p><b>Assistant:</b> ${reply}</p>`;

    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
