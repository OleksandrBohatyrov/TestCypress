describe('Tood page test', () => {
	it('Visit my website', () => {
    cy.visit('https://oleksandrbohatyrov22.thkit.ee/')
    cy.get('[data-cy="tood"]').click()
	})
})


 // второй тест
describe('Bohatyrov test', () => {
	it('Visit my website', () => {
    cy.visit('https://oleksandrbohatyrov22.thkit.ee/tood.html')
    cy.get('[href="/JSleht/index.php"]').click()
    cy.get(':nth-child(4) > a').click()

	})
})

 // третий тест
 describe('Bohatyrov test', () => {
	it('Visit my website', () => {
    cy.visit('https://oleksandrbohatyrov22.thkit.ee/')
    
	})
})

