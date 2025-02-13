const body = document.querySelector("body")
const keys = document.getElementsByClassName("key")
const audios = document.getElementsByTagName("audio")

body.addEventListener("keypress", (event) => {
  const keyCode = event.code
  playSound(keyCode)
  styleElement(keyCode)
})

function playSound(keyPressed) {
  // Play Sound
  for (const key in audios) {
    if (!Object.hasOwnProperty.call(audios, key)) {
      continue
    }
    const audio = audios[key]
    if (audio.dataset.key === keyPressed) {
      audio.currentTime = 0
      audio.play()
    }
  }
}

function styleElement(keyPressed) {
  // Apply Style
  for (const k in keys) {
    if (!Object.hasOwnProperty.call(keys, k)) {
      continue
    }

    const key = keys[k]
    if (key.dataset.key === keyPressed) {
      key.classList.toggle("playing")
      setTimeout(() => key.classList.toggle("playing"), 100)
    } else {
      key.classList.remove("playing")
    }
  }
}
