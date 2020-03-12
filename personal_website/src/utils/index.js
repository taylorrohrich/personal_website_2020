import { pickBy } from "lodash"

const capitilizeFirstletter = word =>
  word.charAt(0).toUpperCase() + word.slice(1)

const cleanObject = object => pickBy(object, v => v !== undefined)

export { capitilizeFirstletter, cleanObject }
