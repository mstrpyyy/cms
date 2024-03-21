import React from 'react'
import { Blogcard } from './blogcard'

describe('<Blogcard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Blogcard title={'Manfaat makan buah kuldi'} image={''} slug={''}    />)
    cy.get('[data-cy="blog-title"]').should('exist').and('be.visible').contains("Manfaat")
  })
})