function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#avatar img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar/eu2.jpeg")
  } else {
    img.setAttribute("src", "./assets/Avatar/eu4.jpg")
  }
}