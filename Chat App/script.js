let chatMessages = [];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchMessages() {
 
  await delay(500);
  return chatMessages;
}

async function sendMessage() {
  const message = prompt("Type your message:");
  if (message) {
    await delay(300); 
    const time = new Date().toLocaleTimeString();
    chatMessages.push(`[${time}] You: ${message}`);
    alert("Message sent!");
  } else {
    alert("Message cannot be empty.");
  }
}

async function showMessages() {
  const messages = await fetchMessages();
  if (messages.length === 0) {
    alert("No messages yet.");
  } else {
    alert("Chat Feed:\n\n" + messages.join("\n"));
  }
}

async function chatApp() {
  let option;
  do {
    option = prompt(
      "Chat App:\n" +
      "1. Send Message\n" +
      "2. View Messages\n" +
      "3. Exit\n" +
      "Choose an option:"
    );

    switch (option) {
      case "1":
        await sendMessage();
        break;
      case "2":
        await showMessages();
        break;
      case "3":
        alert("Exiting chat. Bye!");
        break;
      default:
        alert("Invalid choice.");
    }

    if (chatMessages.length > 0 && option !== "3") {
      console.clear(); 
      console.log(" Live Feed:\n" + chatMessages.join("\n"));
    }

  } while (option !== "3");
}

chatApp();
