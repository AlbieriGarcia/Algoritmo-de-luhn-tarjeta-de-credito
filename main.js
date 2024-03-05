// Una tarjeta de credito, o una tarjeta SIM, es valida si obteniendo la reversa de este numero
// y la suma de sus digitos debe ser un multiplo de 10, es decir que la suma modulo 10 debe ser igual a cero
// tarjeta valida: 49927398716
// link de la explicacion completa: https://blogprog.gonzalolopez.es/articulos/algoritmo-de-luhn.html
const prompt = require('prompt-sync')({sigint: true});

const num = prompt("Escriba el numero de tarjeta: ");

const pares = [];
const impares = [];
let suma = 0;

// se multiplica por 2 los digitos que ocupan las posiciones pares empezando por el final

for (let i = num.length -2 ; i >= 0; i = i - 2) {
    let n = num[i] * 2;
    if (n > 9) {
        let str = n.toString();
        const arr = [];
        for(let i = 0 ; i <= 1; i++){
            arr.push(str[i] * 1);
        }

        arr.forEach(e =>{
            pares.push(e);
        }) 
    }
    else {
        pares.push(n);
    }

}

for (let i = num.length -1 ; i >= 0; i = i - 2) {
    impares.push(num[i] * 1)
}

// Se suman los dígitos que ocupan las posiciones impares con los dígitos de los productos obtenidos

for(let i = 0; i < pares.length; i ++){
    suma = suma + pares[i]   
}

for(let i = 0; i < impares.length; i ++){
    suma = suma + impares[i] 
}

//Si el resto de dividir el total entre 10 es igual a cero, el número es correcto: 70 mod 10 = 0

const resto = suma % 10;

console.log(resto)

const respuesta = resto == 0 ? true: false;

console.log(respuesta);