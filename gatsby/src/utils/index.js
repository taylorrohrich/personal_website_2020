import { pickBy } from "lodash"

const capitalizeFirstLetter = word =>
  word.charAt(0).toUpperCase() + word.slice(1)

const cleanObject = object => pickBy(object, v => v !== undefined)

export { capitalizeFirstLetter, cleanObject }
