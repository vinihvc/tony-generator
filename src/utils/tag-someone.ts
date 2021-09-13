const findTagRegex = /(\S*@\[[^\]]+\])|(\S*@\S+)/gi

const addTag = (text: string) => {
  return `<span class='text-twitter-500'>${text}</span>`
}

const defaultText =
  'Quem faz código bom é quem não se garante com bug em produção'

const tagSomeone = (text: string) => {
  const newText = text.replaceAll(findTagRegex, (tag) => addTag(tag))

  return newText || defaultText
}

export default tagSomeone
