import { getEmailDetails } from '../../src/Services/emailGenerator';

// @ts-ignore
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ email: 'asurana@babbel.com' }),
    })
);
  
describe('email generator service tests', () => {
    it('Should be respond with correct data', async () => {
        expect(getEmailDetails).toBeInstanceOf(Function);
        const response = getEmailDetails('Anshul Surana', 'babbel.com');
        expect(response).toBeInstanceOf(Promise);
        const res = await getEmailDetails('Anshul Surana', 'babbel.com');
        expect(res).toStrictEqual({"data": {"email": "asurana@babbel.com"}, "error": null, "isOk": true});
    });
});