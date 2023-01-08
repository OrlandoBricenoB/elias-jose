const greetings = name => {
  if (typeof name !== 'string') {
    const errorType = new Error('Name must be a string.')
    return console.error(errorType)
  } else if (!name) {
    const errorEmpty = new Error('Name can\'t be empty.')
    return console.error(errorEmpty)
  }

  console.log(`¡Hola, ${name}!`)
}

/*
  * DOM
*/
const handleClickPrompt = () => {
  const name = prompt('Dinos tu nombre, man.')
  greetings(name)
}

const buttonElement = document.getElementById('promptName')
buttonElement.addEventListener('click', handleClickPrompt)
