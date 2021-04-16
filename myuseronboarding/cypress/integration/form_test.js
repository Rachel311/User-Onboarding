const textInput = () => cy.get('input[name="text"]')
const EmailInput = () => cy.get('[name="email"]')
const PasswordInput = () => cy.get('[name="password"]')
const CheckboxInput = () => cy.get('input[type="checkbox"]')
const submitButton = () => cy.get('onSubmit="onSubmit')


describe('filling out inputs and cancelling', () => {
    it('can type inside the text input', () => {
        textInput()
        .should('have.value', '')
        .type('Harry Harrison')
        .should('have.value', 'Harry Harrison')
    })

describe('filling out inputs and cancelling', () => {
    it('can type inside the text input', () => {
        EmailInput()
        .should('have.value', '')
        type('harry555@gmail.com')
})


describe('filling out inputs and cancelling', () => {
    it('can type inside the text input', () => {
        PasswordInput()
        .should('have.value', '')
        type('HarryLovesSally')
})


it('the checkbox should be enabled', () => {
    CheckboxInput().should('be.enabled')
})


it('the submit button enables if we type into both inputs', () => {

    submitButton().should('not.be.enabled')
    textInput().type('foo')
    emailInput().type('bar')
    PasswordInput().type('maybe')
    submitButton().should('be.enabled')
})

