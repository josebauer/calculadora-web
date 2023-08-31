const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

// Keys allowed to input
const allowedKeys = ['(', ')', '/', '*', '-', '+', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.', '%', ' ']

// Adds functionality to the buttons.
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function () {
    const value = charKeyBtn.dataset.value
    input.value += value
    input.focus()
  })
})

// Clear input
document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
  input.focus()
})

// Allows insertions of keys
input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
    return
  }
  if (ev.key === 'Enter') {
    calculate()
  }
})

// Adds functionality to the equal symbol
document.getElementById('equal').addEventListener('click', calculate)

// Create the calculate function
function calculate() {
  resultInput.value = 'ERRO'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  resultInput.classList.remove('error')
}

// Adds function to copy the result to the clipboard
document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
  const button = ev.currentTarget
  if (button.innerText === 'Copiar') {
    button.innerText = 'Copiado!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = 'Copiar'
    button.classList.remove('success')
  }
})

// Switch theme - Dark / Light
document.getElementById('themeSwitcher').addEventListener('click', function () {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#ffd700')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#e5ff00')
    main.dataset.theme = 'dark'
  }
})