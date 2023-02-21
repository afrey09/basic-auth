'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Auth Login/Logout', () => {
  it('should create a new user', async => {
    const response = await request.post('/api/v1/auth/signup').send({
      email: 'upchh@example.com',
      password: '12345678',
    });

    expect(response.status).toBe(201);
  })
})