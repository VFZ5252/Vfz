let data = {};

function askQuestion() {
  var userInput = document.getElementById("user-input").value;
  var response = getChatbotResponse(userInput);
  appendMessage("You: " + userInput);
  appendMessage("Chatbot: " + response);
}

function getChatbotResponse(question) {
  // Simple logic to respond based on provided data
  if (data[question.toLowerCase()]) {
    return data[question.toLowerCase()];
  } else {
    return "Sorry, I don't have information on that.";
  }
}

function appendMessage(message) {
  var chatbotContainer = document.getElementById("chatbot-container");
  var messageElement = document.createElement("p");
  messageElement.innerText = message;
  chatbotContainer.appendChild(messageElement);
}

function addData(event) {
  event.preventDefault();
  var key = document.getElementById("key").value.toLowerCase();
  var value = document.getElementById("value").value;
  data[key] = value;
  document.getElementById("key").value = "";
  document.getElementById("value").value = "";
  console.log("Data added:", key, value);
}
