import Debug from 'debug'

const {
  NAMESPACE = 'backend',
  DEBUG = '',
} = process.env

Debug.enable(DEBUG)

export default function (name: string) {
  return Debug(`${NAMESPACE}:${name}`)
}