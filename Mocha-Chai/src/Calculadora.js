export default class Calculadora {
// SOMA
    static soma(a, b) {
        return a + b
    }
// SUBTRAÇÃO
    static sub(a, b) {
        return a - b
    }
// DIVISÃO
    static div (a, b) {
        return a / b
    }
// MULTIPLICAÇÃO
    static mult (a, b) {
        return a * b
    }
// RAIZ QUADRADA
    static raiz (a) {
        return Math.sqrt(a) 
    }
// NUMERO AO QUADRADO 
    static quad (a) {
        return a * a
    }
// PORCENTAGEM
    static  por (a, b) {
        return (a/100) * b
    }
// SOMA ARRAY
    static somaArray([a, b, c]) {
        let array = [a, b, c];
        let soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }
        return soma;
    }
// SUBTRAÇÃO ARRAY
    static subArray([a, b, c]) {
        let array = [a, b, c];
        let sub = 0;
        for (let i = 0; i > array.length; i--) {
            sub -= array[i];
        }
        return sub;
    }
// MEDIA
    static media(a, b, soma) {
    soma = a + b;
    let media= soma / 2;
    return media;
    }
}


