import assert from 'assert'
import chai from 'chai'

const expect = chai.expect

describe('Meu primeiro teste', () => {
    it('Verificar uma igualdade e tipo', () => {
        let aux = 2
        // assert.strictEqual(aux, 2)
        expect(aux).to.be.equals(2).to.be.a('number')
    })
    it('Verificar uma desigualdade', () => {
        let aux = 2
        // assert.notStrictEqual(aux, 3)
        expect(aux).to.be.equals(2).not.equals(3)
    })
})

describe('Meu segundo teste', () => {
    it('Verificar uma igualdade e tipo', () => {
        let aux = 5
        // assert.strictEqual(aux, 5)
        expect(aux).to.be.equals(5).to.be.a('number')
    })
    it('Verificar outra igualdade', () => {
        let aux = 'carro'
        // assert.strictEqual(aux, 'carro')
        expect(aux).to.be.equals('carro').to.be.a('string')
    })
})

describe('Meu terceiro teste', () => {
    it('Verificar uma desigualdade e tipo', () => {
        let aux = 2
        // assert.notStrictEqual(aux, '2')
        expect(aux).to.be.equals(2).not.equals('2')
    })
    it('Verificar outra desigualdade', () => {
        let aux = 'carro'
        // assert.notStrictEqual(aux, 'charrete')
        expect(aux).to.be.equals('carro').not.equals('charrete')
    })
})    
