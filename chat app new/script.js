const messagesDiv = document.getElementById('messages');
const form = document.getElementById('app-form');
const input = document.getElementById('message-input');

let messages = [];

// Simulated API
function fetchMessages() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(messages);
    }, 600);
  });
}

function sendMessage(msg) {
  return new Promise(resolve => {
    setTimeout(() => {
      const timestamp = new Date().toLocaleTimeString();
      messages.push({ text: msg, time: timestamp });
      resolve();
    }, 300);
  });
}

async function renderMessages() {
  const allMessages = await fetchMessages();
  messagesDiv.innerHTML = '';
  allMessages.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'message';
    div.textContent = `${msg.time}: ${msg.text}`;
    messagesDiv.appendChild(div);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    await sendMessage(text);
    input.value = '';
    await renderMessages();
  }
});


setInterval(renderMessages, 2000);

renderMessages();
