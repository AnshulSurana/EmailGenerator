import request from "supertest";

import { server } from '../src/server.js';

describe('Node-express service', () => {
    it('should initialise express server', async() => {
        console.log(server.address().port);
        expect(server.address().port).toBe(3000);
        const res = await request(server).get("/login");
        expect(res.statusCode).toBe(200);
        expect(typeof(res.text)).toBe('string');
    });
    it('should check health endpoint', async() => {
        const res = await request(server).get("/health");
        expect(res.statusCode).toBe(200);
    });
});