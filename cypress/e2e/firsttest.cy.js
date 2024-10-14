Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})

describe('Test Page Load', () => {
	it('should load the page and verify the title', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/kohv/haldusleht.php')
		cy.title().should('include', 'Kohviautomaat')
		cy.wait(1000)
	})
})

describe('Test Registration Form', () => {
	it('should open the registration form and submit it', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/kohv/haldusleht.php')

		cy.contains('Registreerimine').click()
		cy.wait(1000) 

		cy.get('input[name="username"]').type('KAKAHA')
		cy.wait(1000)
		cy.get('input[name="passwd"]').type('KAKAHA.')
		cy.wait(1000)
		cy.get('input[name="passwd_again"]').type('KAKAHA.')
		cy.wait(1000)

		cy.get('input[name="registerBtn"]').click()
	})
})

describe('Test Music Form', () => {
	it('should fill and submit the music form', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/index.php?veebileht=musikaankeet/musikaankeet.php')

		cy.get('#nimi').type('Oleksandr')
		cy.get('#dnb').click()
		cy.wait(1000)

		cy.get('#music').select('Tunnis võib kuulata muusikat')
		cy.get('#jah').click()
		cy.wait(1000)

		cy.get('#points2').invoke('val', '1').trigger('change')

		cy.wait(1000)
		cy.get('#message').type('Ваше сообщение о радио')
		cy.wait(1000)
		cy.get('input[value="OK"]').click()
		cy.wait(1000)
	})
})

describe('Test Joulupuu Button', () => {
	it('should click the Jõulupuu button and interact with the canvas', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="Jõulupuu"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Incorrect Joulupuu Button', () => {
	it('should try to click an incorrect Jõulupuu button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="Jõulupuu123"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Podarok Button', () => {
	it('should click the kingitus button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="kingitus"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Podarok Button 2', () => {
	it('should click the kingitus 2 button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="kingitus 2"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Garland Button', () => {
	it('should click the Garland button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="Garland"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Taht Button', () => {
	it('should click the täht button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="täht"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})

describe('Test Kokku Button', () => {
	it('should click the Kokku button', () => {
		cy.visit('https://oleksandrbohatyrov22.thkit.ee/JSleht/Content/joulukaart/joulukaart.html')
		cy.get('input[value="Kokku"]').click()
		cy.wait(1000)
		cy.get('#kanva').should('exist')
	})
})
