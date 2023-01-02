import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

// SOMA
describe('Testes de soma', () => {
   it('Deve somar 4 e 5 resultando em 9', () => {
      let resultado = Calculadora.soma(4, 5)
      expect(resultado).to.be.eq(9)
   })
   it('Deve somar -4 e 5 resultando em 1', () => {
      let resultado = Calculadora.soma(-4, 5)
      expect(resultado).to.be.eq(1)
   })
   it.skip('Deve somar -2 e -5 resultando em -7', () => {
      let resultado = Calculadora.soma(-4, -5)
      expect(resultado).to.be.eq(-7)
   })  
   it('Deve somar 40 e 25 resultando em 65', () => {
      let resultado = Calculadora.soma(40, 25)
      expect(resultado).to.be.eq(65).to.be.a('number')
   }) 

   it.skip('Deve somar 40 e 25 resultando em 65 (simular erro)', () => {
      let resultado = Calculadora.soma(40, 25)
      expect(resultado).to.be.eq(65).to.be.a('string')
   }) 

   it("Deve somar vazio e 25 resultando em '25'", () => {
      let resultado = Calculadora.soma('', 25)
      expect(resultado).to.be.eq('25')
   }) 

   it.skip("Deve somar 25 e vazio resultando em '25' (simular erro)", () => {
      let resultado = Calculadora.soma(25, '')
      expect(resultado).to.be.eq(25)
   }) 
})
// SUBTRAÇÃO
describe('Testes de subtração', () => {
   it('Deve subtrair 4 e 5 resultando em -1', () => {
      let resultado = Calculadora.sub(4, 5)
      expect(resultado).to.be.eq(-1)
   })

   it('Deve subtrair 200 e 10 resultando em 190', () => {
      let  resultado = Calculadora.sub(200, 10)
      expect(resultado).to.be.eq(190).to.be.a('number')
   })
   it('Deve subtrair -25 e 20 resultando em -45', () => {
      let resultado = Calculadora.sub(-25, 20)
      expect(resultado).to.be.eq(-45).to.be.a('number')
   })

   it.skip('Deve subtrair 1500 e 2000 resultando em -500 (simular erro)', () => {
      let resultado = Calculadora.sub(1500, 2000)
      expect(resultado).to.be.eq(-500).to.be.a('string')
   })
   
   it.skip('Deve subtrair 0 de 5 resultando em -5 (simular erro)', () => {
      let resultado = Calculadora.sub(0, 5)
      expect(resultado).to.be.eq(0)
   })
   it.skip('Deve subtrair 2 e 5 resultando em -3 (simular erro)', () => {
      let resultado = Calculadora.sub(2, 5)
      expect(resultado).to.be.eq(-4)
   })  
})
// DIVISÃO
describe('Testes de divisão', () => {
   it('Deve dividir 4 por 2 resultando em 2', () => {
      let resultado = Calculadora.div(4, 2)
      expect(resultado).to.be.eq(2)
    })  

   it.skip('Deve dividir 16 por 2 resultando em 8 (simular erro)', () => {
      let resultado = Calculadora.div(16, 2)
      expect(resultado).to.be.eq(8).to.be.a('string')
   })
   it('Deve dividir 30 por 5 resultando em 6', () => {
      let resultado = Calculadora.div(30, 5)
      expect(resultado).to.be.eq(6).not.be.a('string')
   })
   it.skip('Deve dividir 30 por 5 resultando em 6 (simular erro)', () => {
      let resultado = Calculadora.div(30, 5)
      expect(resultado).to.be.eq(6).not.be.a('number')
   })

   it('Deve dividir 25 por 5 resultando em 5', () => {
      let  resultado = Calculadora.div(25, 5)
      expect(resultado).to.be.eq(5)
   })
})
// MULTIPLIÇÃO
describe('Testes de multiplicação', () => {
   it('Deve multiplicar 2 e 4 resultando em 8', () => {
      let  resultado = Calculadora.mult(2, 4)
      expect(resultado).to.be.eq(8)
   })  

   it.skip('Deve multiplicar 5 e 3 resultando em 15 (simular erro)', () => {
      let resultado = Calculadora.mult(5, 3)
      expect(resultado).to.be.eq(15).not.be.a('number')
   })  

   it('Deve multiplicar 7 e 7 resultando em 49', () => {
      let resultado = Calculadora.mult(7, 7)
      expect(resultado).to.be.eq(49)
   })      
     
   it.skip('Deve multiplicar 5 e 5 resultando em 25 (simular erro)', () => {
      let resultado = Calculadora.mult(5, 5)
      expect(resultado).to.be.eq(24)
   })  

   it('Deve multiplicar 5 e 0 resultando em 0', () => {
      let resultado = Calculadora.mult(5, 0)
      expect(resultado).to.be.eq(0)
   }) 
})
// RAIZ QUADRADA
describe('Testes de Raiz Quadrada', () => {
   it('Deve encontrar a raiz quadrada de 9 = 3', () => {
      let resultado = Calculadora.raiz(9)
      expect(resultado).to.be.eq(3)
   })  

   it('Deve encontrar a raiz quadrada de 64 = 8', () => {
      let resultado = Calculadora.raiz(64)
      expect(resultado).to.be.eq(8).to.be.a('number')
     })  

   it.skip('Deve encontrar a raiz quadrada de 225 = 15 (simular erro)', () => {
      let resultado = Calculadora.raiz(225)
      expect(resultado).to.be.eq(15).not.be.a('number')
   })  

   it.skip('Deve encontrar a raiz quadrada de 625 = 25 (simular erro)', () => {
      let resultado = Calculadora.raiz(625)
      expect(resultado).to.be.eq(15)
   })  
})
// NUMERO AO QUADRADO
describe('Testes de um numero ao quadrado', () => {
   it('Deve mostrar o valor de 2 ao quadrado = 4', () => {
      let resultado = Calculadora.quad(2)
      expect(resultado).to.be.eq(4)
   })
   it('Deve mostrar o valor de 8 ao quadrado = 64', () => {
      let resultado = Calculadora.quad(8)
      expect(resultado).to.be.eq(64)
   })  

   it.skip('Deve mostrar o valor de 4 ao quadrado = 16 (simular erro)', () => {
      let resultado = Calculadora.quad(4)
      expect(resultado).to.be.eq(16).not.be.a('number')
   })   
   it('Deve mostrar o valor de 10 ao quadrado = 100', () => {
      let resultado = Calculadora.quad(10)
      expect(resultado).to.be.eq(100).to.be.a('number')
   })  

   it.skip('Deve mostrar o valor de 10 ao quadrado = 100 (simular erro)', () => {
      let resultado = Calculadora.quad(10)
      expect(resultado).to.be.eq(95)
   }) 
})
// PORCENTAMGEM
describe('Testes de porcentagem ', () => {
   it('Deve mostrar a porcentagem (50% de 100) = 50', () => {
      let resultado = Calculadora.por(100, 50)
      expect(resultado).to.be.eq(50)
   })  
    
   it('Deve mostrar a porcentagem (5 % de 25) = 1,25', () => {
      let resultado = Calculadora.por(25, 5)
      expect(resultado).to.be.eq(1.25)
   })
   it('Deve mostrar a porcentagem (30 % de 150) = 45', () => {
      let resultado = Calculadora.por(150, 30)
      expect(resultado).to.be.eq(45).not.be.a('string')
   })  
   it.skip('Deve mostrar a porcentagem (50 % de 1000) = 500 (simular erro)', () => {
      let resultado = Calculadora.por(1000, 50)
      expect(resultado).to.be.eq(100)
   })    

   it('Deve mostrar a porcentagem (50 % de vazio) = 0', () => {
      let resultado = Calculadora.por('', 50)
      expect(resultado).to.be.eq(0)
   })  

   it.skip('Deve mostrar a porcentagem (50 % de x) = x não está definido (vai dar erro)', () => {
      let resultado = Calculadora.por(x, 50)
      expect(resultado).to.be.eq()
   })
})  
// SOMA ARRAY
describe('Deve mostrar a soma de um array', () => {
   it('soma de um array', () => {
       let resultado = Calculadora.somaArray([5, 5, 5])
       expect(resultado).to.be.eq(15)
   })
})   
// SUBTRAÇÃO ARRAY
describe('Deve mostrar a subtração de um array', () => {
   it('subtração de um array', () => {
       let resultado = Calculadora.subArray([1, 0, 1])
       expect(resultado).to.be.equal(0)
   })
})
// MEDIA
describe('Deve mostrar a Média', () => {
   it('Media de a, b', () => {
       let resultado = Calculadora.media(15, 15)
       expect(resultado).to.be.eq(15)
   })
   it('Media com um valor 0', () => {
      let resultado = Calculadora.media(0, 2)
      expect(resultado).to.be.equals(1);
   })
   it('media com dois valores 0 e 0', () => {
       let resultado = Calculadora.media(0, 0);
       expect(resultado).to.be.equals(0);
   })
})   
