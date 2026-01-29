
// A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
    output = "Hello, nice to meet you! WHat CAN I DO FOR YOU? Contact Number?Plan?Office Time?Discount?Personal Trainer Available?";
    
    }
     else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is Jarvis, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "Why did the chicken go to the seance? To get to the other side.";
    }
    //apne question likh------
    else if(input.includes("contact number")){
        output="9117382682";
    }
    else if(input.includes("owner name")){
        output="Abhishek Singh Chauhan";
    }
    else if(input.includes("office time")){
        output="9AM-9PM";
    }
   else if(input.includes("plan")){
        output="Monthly: 500Rs, Quarterly: 1200Rs, Yearly: 4500Rs";
    }
    else if(input.includes("discount")){
        output="offers available on yearly plan";
    }
    else if(input.includes("refund policy")){
        output="Refunds are available within 7 days of purchase with no questions asked.";
    }
    else if(input.includes("gym opwening time")){
        output="Our gym opens at 6 AM from Monday to Saturday and remains closed on Sundays.";
    }
    else if(input.includes("equipment proveided")){
        output="We provide a wide range of equipment including treadmills, free weights, resistance machines, and more.";
    }
    else if(input.includes("steam room available")){
        output=
       "Yes, we have a steam room available for our members to use.";
        
    }
    else if(input.includes("personal trainer available")){
        output="Yes, we have certified personal trainers available to help you with your fitness goals.";
    }
    else if(input.includes("whatshapp number")){
        output="+91 9117382682";
    }
    else if(input.includes("sunday open")){
        output="Sorry, we are closed on Sundays for maintenance.";
    }
    
     else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });