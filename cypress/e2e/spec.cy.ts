describe('real api spec', {
  viewportHeight: 1400,
  viewportWidth: 500
}, () => {

  /*
  const searchTerm = 'ragdoll';

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });
  */
 
  /* 
  it('Submit form', () => {
    cy.get('#search')
      .clear()
      .type(searchTerm);

    expect(cy.get('#search').should('have.value', searchTerm));

    cy.get('[data-cy="submit"]').click();

    cy.location('pathname', { timeout: 2000 }).should('eq', `/breed/${searchTerm}`);

    cy.get('[data-cy="otherImage"]').should('have.length.above', 1).each((link) => {
      expect(link.attr('src')).to.contain(
        'https://cdn2.thecatapi.com/images/'
      );
    })

    cy.get('.cat-wiki-logo').click();
    cy.location('pathname', {timeout: 3000}).should('eq', `/home`);
  })
  */

  it('Mocked Breed', () => {

    //cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds/search?q=*', { fixture: 'breed.json' })

    //cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds/**', { fixture: 'breed.json' })

    //cy.intercept('GET', 'https://api.thecatapi.com/v1/images/**', { fixture: 'image.json' })

    //cy.intercept('GET', 'https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=*', { fixture: 'image.json' })

    //cy.intercept('GET', 'search?q=*', { fixture: 'breed.json' });
    //cy.intercept('GET', '/images/**', { fixture: 'image.json' })

    //cy.request('http://localhost:4200/breed/ragdoll');

  });

})


/*
cy.intercept(‘GET’, ‘https://api.example.com/data’, (req) => {
  // Modify the request or response
  req.reply({
    status: 200,
    body: {
      message: ‘Intercepted API request’,
      data: [
        { name: ‘John’, age: 25 },
        { name: ‘Jane’, age: 30 },
      ]
    }
  })
}).as(‘apiRequest’)

// Make a test request
cy.visit(‘/my-page’)

// Wait for the intercepted API request to complete
cy.wait(‘@apiRequest’)

// Assert on the response
cy.get(‘@apiRequest’).then((interception) => {
  expect(interception.response.body.message).to.equal(‘Intercepted API request’)
  expect(interception.response.body.data).to.have.length(2)
})
*/