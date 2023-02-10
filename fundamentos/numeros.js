const peso1 = 1.0
const peso2 = Number("3.4")

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))

const av1 = 9.321
const av2 = 6.333

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))