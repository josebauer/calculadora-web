import { handleButtonPress, handleTyping } from "./keyHandlers.js"
import calculate from "./calculate.js"
import copyResult from './copyResult.js'
import switchTheme from './switchTheme.js'

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyResult)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)
