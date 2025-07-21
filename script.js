const interval = setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.top = "-2em";
  heart.style.fontSize = "2rem";
  heart.style.animation = "fall 4s linear forwards";
  document.body.appendChild(heart);
  
  setTimeout(() => heart.remove(), 4000);
}, 500);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
