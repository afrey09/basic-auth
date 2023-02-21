'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Auth Login/Logout', () => {
  it('should create a new user', async () => {
    const response = await request.post('/signup').send({
      username: 'Adrienne',
      password: '12345678',
    });
    console.log (response.body);
    expect(response.username).toBe('Adrienne');
    // expect(response.status).toBe(403);
  });
});
