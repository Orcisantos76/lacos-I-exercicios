console.log('Exercicio 3')
/*# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
```
*/
const myArray =['Rússia', 'Canadá','China', 'EUA','Brasil']
let contador = 0
while(contador < myArray.length){
    console.log(`${contador+1} - ${myArray[contador]}`)
    contador ++
}

console.log('-=-'.repeat(8),"Com for",'-=-'.repeat(8) )

for (let i=0; i < myArray.length; i++){
    console.log(`${i+1} - ${myArray[i]}`)
}