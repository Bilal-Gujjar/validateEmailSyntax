const request = require('supertest');
const app = require('./server');

describe('Post Endpoints', () => {
    it('should validate a correct email', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: 'test@example.com' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', true);
    });

    it('should invalidate an incorrect email with multiple @', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: 'test@@example.com' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', false);
    });

    it('should invalidate an email without domain', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: 'test@' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', false);
    });

    it('should invalidate an email without local part', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: '@example.com' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', false);
    });

    it('should validate when email contains leading/trailing spaces', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: '  test@example.com  ' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', true);
    });

    it('should invalidate an email without two characters after the last dot', async () => {
        const res = await request(app)
            .post('/validate')
            .send({ email: 'test@example.c' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('valid', false);
    });
});
