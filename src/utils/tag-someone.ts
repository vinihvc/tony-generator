// regex to match @someone
const findTagRegex = /(\S*@\[[^\]]+\])|(\S*@\S+)/gi

const defaultText =
  'Quem faz código bom é quem não se garante com bug em produção'

/**
 * Add span with blue text
 */
const addTagClassName = (text: string) => {
  return `<span class='text-twitter-500'>${text}</span>`
}

/**
 * Match @someone in text
 * ```md
 * “Quero uma talk do @viniciushvc” - Tony 2021
 * ```
 */
const tagSomeone = (text: string) => {
  const newText = text.replace(findTagRegex, addTagClassName)

  return newText || defaultText
}

export default tagSomeone
