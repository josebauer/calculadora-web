// Create the calculate function
export default function calculate() {
  const resultInput = document.getElementById('result')

  resultInput.value = 'ERRO'
  resultInput.classList.add('error')

  const result = eval(input.value)

  resultInput.value = result
  resultInput.classList.remove('error')
}
