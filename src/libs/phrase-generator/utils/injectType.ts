// Services
import people from '../services/people'
import substantives from '../services/substantives'
import adjectives from '../services/adjectives'

// Utils
import randomFromArray from './randomFromArray'

const types = {
  people: people,
  substantive: substantives,
  adjective: adjectives,
}

export default function injectType(args: string[]) {
  return args.map((value) =>
    randomFromArray<string>(types[value as keyof typeof types]),
  )
}
