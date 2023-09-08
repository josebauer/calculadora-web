// Adds function to copy the result to the clipboard
export default function (ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copiar') {
    button.innerText = 'Copiado!'
    button.classList.add('success')
    navigator.clipboard.writeText(document.getElementById('result').value)
  } else {
    button.innerText = 'Copiar'
    button.classList.remove('success')
  }
}

 