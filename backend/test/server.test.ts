import request from "supertest";

import app from '../src/server.js';

describe('Node-express service', () => {

    it('should initialise express server', async() => {
        const res = await request(app).get("/healthcheck");
        expect(res.statusCode).toBe(200);
        expect(typeof(res.text)).toBe('string');
    });
    it('should check health endpoint', async() => {
        const res = await request(app).get("/healthcheck");
        expect(res.statusCode).toBe(200);
    });
});