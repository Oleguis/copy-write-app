const request = require('supertest')
const app = require('../src/app')

describe('Pruebas para la ruta /iecho', function () {
  it('Respuesta Content-Type: applicatin/json', function () {
    return request(app) // supertest nos permite hacer y testear requests HTTP
      .get('/iecho?text=hola mundo') // hacemos un request HTTP: GET a '/houses'
      .expect('Content-Type', /json/) // podemos testear los headers
  })

  it('Respuesta status = 200', function () {
    return request(app)
      .get('/iecho?text=reconocer')
      .expect(200)
  })

  it('Respuesta = {"text": "reconocer", "palindrome": true}', function () {
    return request(app)
      .get('/iecho?text=reconocer')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        text: 'reconocer',
        palindrome: true
      })
  })

  it('Respuesta = {"text": "rajabarT", "palindrome": false}', function () {
    return request(app)
      .get('/iecho?text=Trabajar')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        text: 'rajabarT',
        palindrome: false
      })
  })

  it('Respuesta = {"error": "No Text"} status=400', function () {
    return request(app)
      .get('/iecho')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, {
        error: 'No Text'
      })
  })
})
