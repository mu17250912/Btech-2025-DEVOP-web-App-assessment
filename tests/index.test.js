const request = require('supertest');
const express = require('express');

const app = express();
app.get('/new-feature', (req, res) => {
  res.json({ message: 'This is the new feature!' });
});

describe('GET /new-feature', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/new-feature')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'This is the new feature!' }, done);
  });
});