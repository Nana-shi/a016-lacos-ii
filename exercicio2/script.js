/* Exercicio 2

Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

**Utilize o for...in para resolver**

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
```

*/

let numero = Number(prompt("Digite um numero:"))
let tabuada = []
tabuada.push(numero)
console.log(tabuada)

for(let i in tabuada){
    while(i < 10){
        i++
        for (numero of tabuada){
        console.log(`${numero} X ${i} : ${i*numero}`)
    }
} 
}