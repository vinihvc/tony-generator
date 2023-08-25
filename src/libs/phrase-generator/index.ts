// Utils
import compose from './utils/compose'
import firstLowerCase from './utils/firstLowerCase'
import firstUpperCase from './utils/firstUpperCase'
import randomFromArray from './utils/randomFromArray'
import injectType from './utils/injectType'
import randomRange from './utils/randomRange'

// Services
import phrases from './services/phrases'
import interjections from './services/interjections'

export default function generate() {
  // Get phrase parts
  const phrase = randomFromArray(phrases)
  const interjection = randomRange() > 0.5 ? randomFromArray(interjections) : ''

  // Fix format
  return compose(
    interjection ? (v: string) => `${interjection}, ${v}` : (v: string) => v,
    interjection ? firstLowerCase : firstUpperCase,
  )(phrase[0](injectType(phrase[1])))
}
