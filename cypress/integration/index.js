context('Test app', () => {
  before(() => {
    cy.visit(`http://localhost:3000/`)
  })

  beforeEach(() => {
    cy.request('http://ip-api.com/json/?fields=countryCode,city,regionName,lat,lon,country').as('ip-api');
    cy.request('http://api.openweathermap.org/data/2.5/onecall?lat=55.6761&lon=12.5683&units=metric&exclude=minutely,hourly&lang=es&appid=a41dd9c95c21d27cec7ff126a953c653').as('onecall-api');
  })

  it('The request to ip-api should response with a status code 200', () => {
    cy.get('@ip-api').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('The request to ip-api should response with the following properties: country, city, lat, lon', () => {
    cy.get('@ip-api').then((response) => {
      expect(response.body).to.have.property('country')
      expect(response.body).to.have.property('city')
      expect(response.body).to.have.property('lat')
      expect(response.body).to.have.property('lon')
    })
  })

  it('The request to onecall-api should response with a status code 200', () => {
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  it('onecallapi should have the following properties: current and daily', () => {
    cy.get('@onecall-api').then((response) => {
      expect(response.body).to.have.property('current')
      expect(response.body).to.have.property('daily')
    })
  })

  it('By clicking the city item, it should render its weather forecast information', () => {
    cy.get('[data-testid="Pilar"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.get('[data-testid="Copenhagen"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.get('[data-testid="Pisa"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.get('[data-testid="Beijing"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.get('[data-testid="Cairo"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
    cy.get('[data-testid="Sydney"]').click()
    cy.get('@onecall-api').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
