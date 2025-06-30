
  // Typed text effect
  const text = "Aspiring AI Engineer | Sports Enthusiast | Future Leader";
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById("typed").textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();

  // Contact alert
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thanks for reaching out 🚀");
    this.reset();
  });

  // Simple Chat Bot
  const chatlog = document.getElementById("chatlog");
  const chatinput = document.getElementById("chatinput");
  chatinput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
      const userMsg = this.value;
      appendChat("You: " + userMsg);
      setTimeout(()=>appendChat("Bot: I'm just a demo, but Nikhil will surely get back to you! 🚀"),500);
      this.value = "";
    }
  });
  function appendChat(msg){
    const p = document.createElement("p");
    p.textContent = msg;
    chatlog.appendChild(p);
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  // Particles.js config
  particlesJS("particles-js", {
    "particles": {
      "number": {"value": 80},
      "size": {"value": 3},
      "move": {"speed": 2},
      "line_linked": {"enable": true},
      "color": {"value":"#00c6ff"}
    }
  });

  // Init AOS
  AOS.init();
