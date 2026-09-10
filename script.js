const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const proposal = document.getElementById("proposal");
const ring = document.getElementById("ring");
const textEl = document.getElementById("text");
const music = document.getElementById("music");

/* 💌 OPEN ENVELOPE */
function openEnvelope() {
  
  envelope.classList.add("open");
  
  setTimeout(() => {
    letter.classList.add("show");
    typeLetter();
  }, 800);
  
}

/* 📜 TYPE LETTER */
const message = `
Happy Monthsary babyy ko!💐

Hi lovelove

Happy monthsarry sana lahat ng gusto natin matupad syempre sama mo ako kasama ako thanks po for always loving me and pag aalaga , pag aalala sa akin anjan ka khit mateluk ako, kahit minsan gusto mo na akong iwan pero dimo pa rin ginagawa sana walang magbago satin , sanaa di maubos pagmamahal mo sa akin iloveyou so much maganda kong baby 
Mahal na mahal po kita kahit hakdog ako palagi .Salamat sa lahat love in those months—good days, bad days, quiet days, misunderstandings, laughter, overthinking moments, and peaceful moments where everything just felt right because you were there.

Thank you for staying with me through everything. salamat love for your patience when I’m difficult to understand... You didn’t give up on me, and that’s something I will always appreciate deeply.

Happy monthsary babyy!
— yours, always ❤️.

Thank you for being my peace, my joy, and my home.

I love you endlessly.
`;

let i = 0;

function typeLetter() {
  let t = setInterval(() => {
    textEl.innerHTML += message[i];
    i++;
    
    if (i >= message.length) {
      clearInterval(t);
      setTimeout(showProposal, 900);
    }
  }, 40);
}

/* 💍 SHOW PROPOSAL */
function showProposal() {
  letter.classList.remove("show");
  proposal.classList.add("show");
  
  music.play();
  
  /* ring animation */
  setTimeout(() => {
    ring.classList.add("show");
  }, 600);
}



/* 💍 TAKE RING */
function takeRing() {
  
  ring.style.transform = "scale(1.3)";
  ring.style.filter = "drop-shadow(0 0 40px gold)";
  
  setTimeout(() => {
    alert("Forever yours ❤️ kasal na tayo!😝 ble");
  }, 1000);
  
}