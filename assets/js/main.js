const hearts = document.querySelectorAll(".heart")
const cards = document.querySelectorAll(".card")

hearts.forEach(heart => {
  heart.onclick = () => {
    heart.classList.toggle("toggled")
  }
})

cards.forEach(card => {
  card.addEventListener("click", e => {
    card.classList.toggle("active");
  })
})