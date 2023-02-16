const valores = [7.7, 3.2, 4.5, 9.8]

console.log(valores[0], valores[2])
console.log(valores[5])

valores[4] = 10
console.log(valores.length)
// quando você pede para acessar um indice que não existe, ele vai retornar undefined(valor indefinido)

valores.push({id : 3}, 'teste', null, false)
console.log(valores)

console.log(valores.pop()) // tirar elemento