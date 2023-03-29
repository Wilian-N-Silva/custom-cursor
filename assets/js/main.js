const customCursor = document.querySelector(".custom-cursor")
const interactableEl = document.querySelector(".interactable")

window.onmousemove = (ev) => {
  const interactable = ev.target.closest(".interactable")
  const isInteracting = interactable !== null

  const posX = ev.pageX - customCursor.offsetWidth / 2
  const posY = ev.pageY - customCursor.offsetHeight / 2

  const cursorPosition = {
    transform: `translate(${posX}px, ${posY}px)`,
  }

  customCursor.classList.toggle("custom-cursor__hovering", isInteracting)

  const cursorTimingFunctions = {
    duration: 1000,
    fill: "forwards",
  }

  customCursor.animate(cursorPosition, cursorTimingFunctions)
}

interactableEl.addEventListener("click", (ev) => {
  console.log(ev)
})
