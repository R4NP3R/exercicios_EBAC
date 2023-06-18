/// <reference types="cypress" />

describe('Ver se todas a funcionalidades do site estão funcionando', () => {
  beforeEach(() =>{
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Testando a funcionalidade de Adicionar Contatos', () => {
    cy.get('input[type="text"]').type('Rafael Silva Santos')
    cy.get('input[type="email"]').type('ssrafa.2014@gmail.com')
    cy.get('input[type="tel"]').type('(11) 963644375')
    cy.get('.adicionar').click()
  })
  
  it('Testando a funcionalidade de Editar Contatos', () => {
    cy.get('.edit').first().click()    
    cy.get('input[type="text"]').clear().type('Rafael Silva Santos')    
    cy.get('input[type="email"]').clear().type('ssrafa.2014@gmail.com')    
    cy.get('input[type="tel"]').clear().type('(11) 963644375')
    cy.get('.alterar').click()
  })
  
  it('Testando a funcionalidade de Deletar Contatos', () => {
    cy.get('.delete').first().click()
  })
})