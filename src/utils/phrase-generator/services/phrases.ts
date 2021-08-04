// Interfaces
import PhraseType from '../types/phrase'

const phrases: PhraseType[] = [
  [() => `Eae meu caro`, []],

  [(arg) => `Vou bater no ${arg[0]}`, ['people']],

  [(arg) => `Oh ${arg[0]}, fala comigo não`, ['people']],

  [(arg) => `Quero uma talk do ${arg[0]}`, ['people']],

  [(arg) => `${arg[0]} é ${arg[1]}`, ['substantive', 'adjective']]
]

export default phrases
