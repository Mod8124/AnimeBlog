// supertest let you mock out http request
const request = require('supertest');
const app = require('../src/index');

describe('Should render auth Routes', function () {
  test('responds to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });

  test('responds to error page /*', async () => {
    const res = await request(app).get('/hola');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(404);

    // should render a msg error
    expect(res.text).toContain("Page doesn't found it");
  });

  test('should render a login page', async () => {
    const res = await request(app).get('/login');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);

    // should render a msg error
    expect(res.text).toContain('Welcome back!');
  });

  test('should show a error msg on /login', async () => {
    const res = await request(app).post('/login');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);

    // should render a msg error
    expect(res.body).toHaveProperty('errors');
  });

  test('should render a signup page', async () => {
    const res = await request(app).get('/signup');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);

    // the render should contain
    expect(res.text).toContain('Hello There!');
  });

  test('should show a error msg on /signup ', async () => {
    const res = await request(app).post('/signup');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);

    // should render a msg error
    expect(res.body).toHaveProperty('errors');
  });

  test('should redirect to /', async () => {
    const res = await request(app).get('/logout');
    expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
    expect(res.statusCode).toBe(302);

    // should render a msg error
    expect(res.redirect).toBe(true);
  });
});

describe('Should render blog Routes', function () {
  test('responds to /blogs (route protected)', async () => {
    const res = await request(app).get('/blogs');
    console.log(res.headers);
    expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
    expect(res.statusCode).toBe(302);
  });

  test('responds to /blogs/:id (route protected)', async () => {
    const res = await request(app).get('/blogs/2');
    expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
    expect(res.statusCode).toBe(302);
  });

  test('responds to /blogs/single/:id (route protected)', async () => {
    const res = await request(app).get('/blogs/2');
    expect(res.header['content-type']).toBe('text/plain; charset=utf-8');
    expect(res.statusCode).toBe(302);
  });

  test('responds on post to /blogs/ (route protected)', async () => {
    const res = await request(app).post('/blogs/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);
    expect(res.body).toBeInstanceOf(Object);
  });

  test('responds on update to /blogs/update/2 (route protected)', async () => {
    const res = await request(app).post('/blogs/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);
    expect(res.body).toBeInstanceOf(Object);
  });

  test('responds on update to /blogs/comments/2 (route protected)', async () => {
    const res = await request(app).post('/blogs/');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);
    expect(res.body).toBeInstanceOf(Object);
  });

  test('responds on delete to /blogs/2 (route protected)', async () => {
    const res = await request(app).delete('/blogs/2');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Object);
  });
});
