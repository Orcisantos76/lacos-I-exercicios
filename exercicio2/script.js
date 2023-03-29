
console.log('Exercicio 2')
/*# Exercício 2

Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

Exemplo com entrada **`7`**:
```jsx
7
14
21
28
35
42
49
56
63
70
```*/
const numero = +(prompt('Insira um número para saber a tabúada: '))
//console.log(numero)
for(let contador = 1;contador<=10;contador++){
    console.log(`${contador} * ${numero} = ${contador*numero}`)
}