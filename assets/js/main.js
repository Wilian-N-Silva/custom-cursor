const customCursor = document.querySelector(".custom-cursor")

const morphCursor = (ev) => {
  const interactable = ev.target.closest(".interactable")
  const isInteracting = interactable !== null

  let cursorPosition = {}

  if (!isInteracting) {
    const posX = ev.pageX - customCursor.offsetWidth / 2
    const posY = ev.pageY - customCursor.offsetHeight / 2

    cursorPosition = {
      height: "2rem",
      width: "2rem",
      borderRadius: "50%",
      transform: `translate(${posX}px, ${posY}px)`,
    }
  } else {
    const interactableBoundingRect = interactable.getBoundingClientRect()
    const formRadius =
      interactable.style.borderRadius.length === 0
        ? "4px"
        : interactable.style.borderRadius
    cursorPosition = {
      height: `${interactableBoundingRect.height + 10}px`,
      width: `${interactableBoundingRect.width + 10}px`,
      borderRadius: formRadius,
      transform: `translate(${interactableBoundingRect.x - 5}px, ${
        interactableBoundingRect.y - 5
      }px)`,
    }
  }
  // customCursor.classList.toggle("custom-cursor__hovering", isInteracting)
  const cursorTimingFunctions = {
    duration: 1000,
    fill: "forwards",
  }
  customCursor.animate(cursorPosition, cursorTimingFunctions)
}

const defaultCursor = (ev) => {
  const interactable = ev.target.closest(".interactable")
  const isInteracting = interactable !== null

  const posX = ev.pageX - customCursor.offsetWidth / 2
  const posY = ev.pageY - customCursor.offsetHeight / 2

  cursorPosition = {
    transform: `translate(${posX}px, ${posY}px)`,
  }

  customCursor.classList.toggle("custom-cursor__hovering", isInteracting)
  const cursorTimingFunctions = {
    duration: 1000,
    fill: "forwards",
  }
  customCursor.animate(cursorPosition, cursorTimingFunctions)
}

window.onmousemove = (ev) => morphCursor(ev)
