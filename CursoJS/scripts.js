// Variáveis
// let idade = 5;
// console.log(idade);
// let altura = 180;
// console.log(altura);
// camelCase
// let nome,idade,altura; // não é recomendado

// let valorIngressoAdulto = 20; //pode mudar o valor
// valorIngressoAdulto = 30;
// console.log(valorIngressoAdulto);

// Constantes
// const valorIngressoAdulto = 20; //não pode mudar o valor
// console.log(valorIngressoAdulto);


// Tipos primitivos (valor)
// let nome = 'Lay'; //String literal
// let idade = 63; //number literal
// let estaAprovada = true; //boolean
// let sobreNome = undefined; //valor Padrão ou Undefinied
// let corSelecionada = null; //usada para resetar ou redefinir um valor

// JavaScript é dinâmico ele identifica os tipos 

// Objetos (referência)
let pessoa = {
    nome: 'Lay',
    sobrenome: 'Campos',
    idade: 63,
    estaAprovada: true,
}
console.log(pessoa);

// Arrays (conjunto de dados)
let frutas = ['maçã', 'banana', 'abacaxi', 'morango'];
console.log(frutas);
console.log(frutas[3]);
console.log(frutas.length);

//functions
// Verbo + Substantivo
// let corSite = "azul";
// function resetaCor(){
    // corSite = "";
// };
// console.log(corSite);
// resetaCor();
// console.log(corSite); // vazio - uma linha em branco

// let corSite = "azul";
// function resetaCor(cor){
    // corSite = cor;
// };
// console.log(corSite);
// resetaCor("rosa");
// console.log(corSite);

let corSite = "azul";
function resetaCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade; //espaço (rosa claro)
};
console.log(corSite);
resetaCor("rosa","claro");
console.log(corSite);

// Tipos de functions
// Realizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Lay');
}
dizerNome();

// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}
console.log(MultiplicarPorDois(5));

// Operadores
// Operadores Aritiméticos (matemáticos)
// Operadores Atribuição
// Operadores de Comparação
// Operadores Lógicos
// Operadores Bitwise

// Operadores Aritiméticos
let salario = 100;
// + , - , * , / , **
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ -- (Operadores de Incremento)
let idade = 18;
//console.log(idade++);
//console.log(idade); // vai exibir o resultado depois da operação
console.log(++idade); // vai exibir o resultado na operação
// a mesma coisa para -- (diminuir)

// Operadores de Atribuição
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
valorTecladoGamer += valorTecladoGamer; // o mesmo para -=
console.log(valorTecladoGamer);

// Operadores de igualdade
// Igualdade estrita - compara tipo
console.log(1 === 1); // true
console.log('1' === 1); // false - (string e número)
// Igualdade solta - converte valores - não é recomendado usar
console.log(1 == 1); // true
console.log('1' == 1); // true

/* Operador ternário
O operador ternário serve por exemplo, para não usar tantos if e elses..
*/
//cliente com o título de comum e premium
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo);
/* if e else
basicamente o if e else é usado para passar uma determinada condição
no código.
*/
// Operadores Lógicos
// Operador Lógico e (&&)
// Retorna TRUE se os dois operandos forem true
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false independente da ordem

// let maiorDeIdade = true;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraTrabalho;
// console.log(podeAplicar);

// let maiorDeIdade = false;
// let possuiCarteiraTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraTrabalho;
// console.log(podeAplicar);

// Operador Lógio ou (||)
// Retorna TRUE se um dos operadores forem true
let maiorDeIdade = false;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraTrabalho;
console.log('pode aplicar', podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado', candidatoRecusado);

// Comparações com valores não booleanos
// Falsy
// undefined
// null
// 0
// false
// ''
// NaN - not a number

// Trufy 
false || 'Rafael'
"Rafael"
false || 1
1
false || 1 || 3
1

let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

// Trocando Valores
let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// If.. Else
// Switch .. case

// Se a hora estiver entre 06:00 até 12:00 : Bom Dia!
// Se a hora estiver entre 12:00 até 18:00 : Bom Tarde!
// Caso contrário : Boa Noite!
let hora = 10;

if (hora > 6 && hora < 12) {
    // código a ser executado
    console.log("Bom Dia!");
}
else if (hora > 12 && hora < 18) {
    // código a ser executado
    console.log("Boa Tarde!");
}
else {
// código a ser executado
console.log("Boa Noite!");    
}

let media = 8;

if (media <= 6) {
    console.log('Voce está na recuperação');

} else {
    console.log('Voce está aprovado');
}

/* Switch... Case (comparações diferentes)
estrutura condicional parecida com o if..else
*/
let permissao // comum, gerente, diretor
permissao = 'diretor';

switch (permissao) {
    case 'comum':
    console.log('Usuário Comum');
    break;
    case 'gerente':
    console.log('Usuário gerente');
    break;
    case 'diretor':
    console.log('Usuário diretor');
    break;
    default:
    console.log('Usuario nao reconhecido!')
}

//Laço/ Loop/ For
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');
// console.log('Estou aprendendo');

// 1. For
// 2. While
// 3. Do..while
// 4. For..in
// 5. For..of

// 1. For (i = index, índice)
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!', i);
}
for(let i = 1; i <= 5; i++) {
    if(i % 2 !== 0){ // operador modulus
        console.log(i);
    }
}
for(let i = 5; i >= 1; i--) {
    if(i % 2 !== 0){ // operador modulus
        console.log(i);
    }
}

// While loop - (criar a variável fora do looping)
// let i = 5;
// while(i >= 1) {
    // if(i % 2 !== 0){
        // console.log(i);
    // }
    // i--;
// }   

//do..while
let i = 0;
do {
    console.log('Digitando!', i);
    i++
} while (i < 10)

//for..in
const individuo = {
    nome: 'Lay',
    idade: 63
};
// key-value
for (let chave in individuo) {
    console.log(chave, individuo.nome); // ou (chave, individuo['nome'])
}
const color = ['Red', 'Blue', 'Pink'];
for (let index in color) {
    console.log(index, color[index]);
}

// For..of
for(let cor of color) {
    console.log(cor);
}

// Função deve retornar o maior entre dois valores
let valorMaior = max(50, 100);
console.log(valorMaior);
function max(num1, num2) {
    return num1 > num2 ? num1: num2; 
}

// fizzBuzz - comparar alguns valores e ter um tipo
// de retorno, baseado no valor que teve na entrada

// Divisível por 3 => Fizz
// Divisível por 5 +> Buzz
// Divisível por 3 e 5 => FizzBuzz
// Não Divisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'
const resultado = FizzBuzz(7);
console.log(resultado);

function FizzBuzz(entrada) {

    if (typeof entrada !== 'number')
        return 'Não é um número!';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    
    return entrada;
}

// Medidor de Velocidade
// velocidade máxima é de até 70km
// a cada 5km acima do limite você ganha 1 ponto na carteira
// Math.floor() - arredondar
// caso pontos maior que 12 -> "Carteira será suspensa"
verificarVelocidade(130)
function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
       console.log('ok');
    else {
       const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
       if(pontos >= 12)
          console.log('Sua carteira será suspensa kkkkk');
       else 
          console.log('Pontos', pontos);
    } 
}

// Par ou Ímpar
// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar 
exibirTipo(20);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'Par');
        else
            console.log(i, 'impar');
    }
}

// Propriedades de um Objeto
// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto
const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Joe Russo',
    personagem: 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(objeto) {
    for (prop in objeto)
        if(typeof objeto[prop] === 'string')
        console.log(prop, objeto[prop])
}
//ou
let notebook = {
    Processador: 'Intel Core',
    IdDeFabricação: 391119,
    Ram: 16,
    Sistema: 'Windows'
}
ValorObjeto(notebook);
function ValorObjeto(notebook) {
    for (prop in notebook)
        if(typeof notebook[prop] === 'string')
        console.log(prop, notebook[prop])
}

// Múltiplos
// Criar função somar que retorna a 
// soma de todos os múltiplos de 3 e 5
somar(10);
// Múltiplos de 3 em 10 - (3, 6, 9)
// Múltiplos de 5 em 10 - (5, 10)
// soma dos múltiplos = 33
// armazenar os múltiplos de 3
// armazenar os múltiplos de 5
// somar os dois
function somar(limite) {
   let multiplosDe3 = 0;
   let multiplosDe5 = 0;
   for(i = 0; i <= limite; i++) {
       if(i % 3 === 0)
       multiplosDe3 += i;
       if(i % 5 === 0)
       multiplosDe5 += i;
   }
   console.log(multiplosDe3 + multiplosDe5);
}

// Média de Nota Escolar
// Obter a média a partir de um array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
const array = [70, 70, 80]
// 75
console.log(mediaDoAluno(array));
function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
    // let soma = 0;
    // for (let nota of notas) {
        //soma += nota;
    // }
    // const media = soma/(notas.length);
    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}
function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}

// Contador de Asteríscos
// Criar uma função que exibe a quantidade de asteríscos (*)
// que aquela linha possue
exibirAsteriscos(5);
function exibirAsteriscos(linhas) {
    // let padrao = '';
    // for(let linha = 1; linha <= linhas; linha++) {
        // padrao += '*';
        // console.log(padrao);
    // }
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}

// Números Primos
// Criar Função para mostrar os números primos
// Número primo ( divisível por 1 ou por ele mesmo)
exibirNumerosPrimos(15);
function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        // let ehPrimo = true;
        // for (let divisor = 2; divisor < numero; divisor++) {
            // if(numero % divisor === 0) {
                // ehPrimo = false;
                // break;
            // }
        // }
        // if(ehPrimo) console.log(numero);
        if(NumeroPrimo(numero)) console.log(numero);
    }
}
function NumeroPrimo(numero) {
    let ehPrimo = true;
    for (let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor === 0) {
            return false;
        }
    }
    return true;    
}

// camelCase - umDois
// Factory Function (Funções de Fábrica)
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
}
const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);

// Construtor Functions
// Pascal Case - UmDois (todas iniciais são maiúsculas)
function Televisao(marcaTelevisao, tamanhoTela, capacidadeBateria) {
    this.marcaTelevisao = marcaTelevisao,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Ligando Televisão...");
    } 
}
const televisao = new Televisao('samsung', 40.5, 5000);
console.log(televisao);

// Naturez Dinâmica de Objetos
const mouse = {
    cor: 'Red',
    marca: 'Microsoft'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);

// Clonando Objetos
const radio = {
    marcaRadio: 'Motorola',
    tamanhoRadio: {
        vertical: 20,
        horizontal: 10
    },
    ligar: function () {
        console.log('Sintonizando Canal...');
    }
}
const novoObjeto = Object.assign({
    pilha: 'AAA'
}, radio);
console.log(novoObjeto);

const objeto2 = {...radio};
console.log(objeto2);

// Math
Math.random()
Math.max(3, 6, 8, 10)
Math.min(3, 6, 8, 10)

// String
// Tipo primitivo
// const mensagem = 'minha primeira mensagem';
// Tipo Objeto
// const outraMensagem = new String('Bom Dia!');

// Template Literal
// \n = sequência de escape (quebra de linha)
// const mensagem = 'Oi isso é minha\n primeira mensagem';

// Object {}
// Boolean true, false
// String '', ""
// Template ``
// const outra = `Oi isso é a minha primeira mensagem`;

// const nome = 'Rafael';
// const email = 
// `Olá ${nome}
// Obrigada por se inscrever no canal`;

// Date - Lidando com datas
const data1 = new Date();
const data2 = new Date('December 26 2022 16:19:02');
const data3 = new Date(2022, 11, 26, 16, 30);
data3.setFullYear(2030);

// Montador de Endereço - Objeto Endereço
// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)
let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};
function exibirEndereco(endereco) {
    for (let chave in endereco)
       console.log(chave, endereco[chave]);
}
exibirEndereco(endereco);

// Encontre a Igualdade - (de Objetos)
// Duas funções para comparar Objetos
function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1;
function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2));
function temEnderecoMemoriaIguais(endereco1, endereco2) {
    // comparando se a referência do objeto aponta para o mesmo local na memória
    // return endereco1 === endereco2;
    return endereco1 === endereco3;
}
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));

// Montador de Postagem de Blog
// Criar um objeto de postagem de blog 
// que vai conter as seguintes propriedades:
/*
título
mensagem
autor
visualizações
comentários
    (autor, mensagem)
estaAoVivo
*/ 
// let postagem = {
    // titulo: 'a',
    // mensagem: 'b',
    // autor: 'c',
    // visualizacoes: 10,
    // comentarios: [
        // { autor: 'a', mensagem: 'b' },
        // { autor: 'a', mensagem: 'b' }
    // ],
    // estaAoVivo: true
// }
// console.log(postagem);


// Construtor Function
// Criar um objeto postagem
// título, mensagem, autor, visualizações, comentários, estaAoVivo 
function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}
let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);

// Faixa de Preço (3:28)
// Criar um array de objetos de faixa de preço
// para que possa ser usado em um e-commerce
// faixas, tooltip, mínimo, máximo

// Primeira Opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 700},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
];
// Segunda opção (Factory Function)
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]
console.log(faixas);
console.log(faixas2);
// Terceira opção (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40)
]
console.log(faixas3);

// Introdução a Arrays
// Add Novos Elementos
// Encontrar Elementos
// Remover Elementos
// Dividir Elementos
// Dividir Arrays
// Combinar Arrays

// Add Novos Elementos
const numeros = [1, 2, 3];
// Inserir no Início
numeros.unshift(0);
console.log(numeros);
// Inserir no Meio
numeros.splice(1, 0, 'a'); // sempre zero depois da posição - se colocar 1 ele anula a posição 1
console.log(numeros);
// Inserir no Fim
numeros.push(5);
console.log(numeros);
// Encontrar Elementos (Tipo Primitivos)
const numbers = [1, 2, 3, 4];
console.log(numbers.indexOf(2)); // resulta a posiçõo (2 está na posição 1)
console.log(numbers.indexOf(5)); // não tem esse elemento então retorna -1
console.log(numbers.indexOf('1')) // não é uma string então retorna -1
// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.lastIndexOf(1)); 
// se existisse mais de um número 1 ele retornaria a posição do último encontrado posição 3
console.log(numbers.indexOf(2) !== -1); // retorna true
console.log(numbers.includes(2)); // mais simples mesmo resultado - retorna true
// Encontrar Elementos (Tipo Referência)
const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'},
];
// const marca = marcas.find(function(marca) {
    // return marca.nome === 'a';
// });
// console.log(marca);
console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}));
// Arrow Functions (setas)
const raias = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];
console.log(marcas.find(marca => marca.nome === 'a'));
// Removendo Elementos
const contagem = [1, 2, 3, 4, 5, 6];
// Remover no Final
const ultimo = contagem.pop();
console.log(ultimo);
console.log(contagem);
// Remover no Início
const primeiro = contagem.shift();
console.log(primeiro);
console.log(contagem);
// Remover no Meio
const meio = contagem.splice(2, 1); // posição 2, remover apenas uma vez
console.log(meio);
console.log(contagem);

// Esvaziando um Array
let count = [1, 2, 3, 4, 5, 6];
let outros = count;
// Solução 1
// count [];
// console.log(outros);
// Solução 2
count.length = 0;
console.log(count);
console.log(outros);
// Solução 3
count.splice(0, count.length);
console.log(count);
console.log(outros);
// Solução 4 - não usada pois é muito lento o processo
// while (count.length > 0);
       // count.pop();
// Combinando e Cortando Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
// Combinar
const combinado = first.concat(second);
console.log(combinado);
// Dividir
// const dividido = combinado.slice(1, 3);
// const dividido = combinado.slice(1);
const dividido = combinado.slice();
console.log(dividido);

// Operador Spread (...)
const third = [7, 8, 9];
const fourth = [10, 11, 12];
// Combinar 
// const combined = [...third, ...fourth];
const combined = [...third,'%', ...fourth, '#'];
console.log(combined);
const clonado = [...combined];
console.log(clonado);

// Foreach = Iterando um Array
const sequencias = [1, 2, 3, 4, 5];
for (sequencia of sequencias);
console.log(sequencia);
sequencias.forEach((sequencia, indice) => console.log(sequencia, indice))

// Combinando Array
// const juntar = sequencias.join('.');
// const juntar = sequencias.join('-');
const juntar = sequencias.join(';'); //etc...
console.log(juntar);

const frase = "Olá bem vindo ao curso";
const result = frase.split(' ');
console.log(result);
// no console = ['Olá', 'bem', 'vindo', 'ao', 'curso']
console.log(result.join('-'));
// no console = Olá-bem-vindo-ao-curso //slug

// Input - Como receber dados do usuário
// Obs: Usando o console
// prompt('Olá, qual sua cor preferida?')

// let CorFavorita = prompt('Olá, qual sua cor favorita?')
// undefined
// CorFavorita
// 'preta'
// if (CorFavorita = 'preta') {
    // alert('Essa é a minha também!');
// }

// Introdução - Manipulação do DOM

    
    







