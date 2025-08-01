// Optional: Add a little sparkle effect on mousemove
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.classList.add("sparkle");
  star.style.left = `${e.pageX}px`;
  star.style.top = `${e.pageY}px`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
});
