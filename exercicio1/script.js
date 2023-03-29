/*# Exercício 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.*/
let pedido = prompt('Deseja comer mais coxinha? sim/não')
let conta = 0
if (pedido ==="sim"){
    conta += 2.5
}else{
    console.log('Pedido vazio')
}
//console.log(conta)
while (pedido ==="sim"){        
    pedido = prompt('Deseja comer mais coxinha? sim/não')
    if (pedido === 'nao'){
        break
    }
    conta += 2.5    
}
console.log(`O valor total da sua conta é R$${conta.toFixed(2)}`)