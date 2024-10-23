// JavaScript for Newsletter Form Submission (Simple Demo)
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        document.getElementById('email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Chatbot Functionality
const chatbotButton = document.getElementById('chatbot-button');
const chatbotContainer = document.querySelector('.chatbot-container');
const closeChatbot = document.getElementById('close-chatbot');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

chatbotButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotButton.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotButton.style.display = 'block';
});

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user message
    displayMessage(userMessage, 'user');
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botMessage = generateBotResponse(userMessage);
        displayMessage(botMessage, 'bot');
    }, 1000);
}

function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateBotResponse(userMessage) {
    // Simple response logic (expandable)
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('help')) {
        return 'Sure, what do you need help with?';
    } else {
        return 'Sorry, I didn’t understand that. Can you please rephrase?';
    }
}
chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.add('show');
    chatbotButton.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.classList.remove('show');
    chatbotButton.style.display = 'block';
});
