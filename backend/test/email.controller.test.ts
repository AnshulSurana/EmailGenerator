import { Request, Response } from "express";

import { getEmailsHandler } from '../src/controller/email.controller.js'

type Query = {
    fullName: string,
    domain: string
}
const mockRequest = (query: Query) => {
    return {
        url: 'https://url',
        query: query
    };
};

const mockResponse = () => {
    const res: Response = {};
    res.status = (code) => {
        expect(code).toBeTruthy();
        return res;
    };
    res.json = () => res;
    res.redirect = (data) => {
        console.log(data);
        expect(data).toBeTruthy();
        return data;
    }
    res.send = (data) => {
        console.log(data);
        expect(data).toBeTruthy();
        return data;
    }
    return res;
};

const testQueryData = {
    'Nina Simons': "babbel.com",
    'Priya Kuber': "linkedin.com",
    'Matthew Hall': "google.com",
    'Robert Miller': "slideshare.net",
};

describe('email controller tests', () => {

    it('should test email controller getEmailHandler with babbel.com', async() => {
        const query: Query = {
            fullName: 'anshul surana',
            domain: 'babbel.com'
        }
        const response = await getEmailsHandler(mockRequest(query), mockResponse());
        console.log(response);
        expect(response).toStrictEqual({ email: 'asurana@babbel.com' });
    });
    it('should test email controller getEmailHandler with other present domain', async() => {
        const query: Query = {
            fullName: 'anshul surana',
            domain: 'google.com'
        }
        const response = await getEmailsHandler(mockRequest(query), mockResponse());
        expect(response).toStrictEqual({ email: 'anshulsurana@google.com' });
    });
    it('should test email controller getEmailHandler with non existing domain', async() => {
        const query: Query = {
            fullName: 'anshul surana',
            domain: 'slideshare.net'
        }
        const response = await getEmailsHandler(mockRequest(query), mockResponse());
        expect(response).toStrictEqual({ error: "Oops! Derivation not possible. Enter Valid Domain"});
    });
    it('should test email controller getEmailHandler for test queries', async() => {
        const query: Query = {
            fullName: 'anshul surana',
            domain: 'slideshare.net'
        }
        const desiredResponse = {
            'Nina Simons': 'nsimons@babbel.com',
            'Priya Kuber': "priyakuberlinkedin.com",
            'Matthew Hall': "matthewhallgoogle.com",
            'Robert Miller': "Oops! Derivation not possible. Enter Valid Domain",
        }
        let responseObject = {};
        Object.keys(testQueryData).forEach(async (val) => {
            const query = {
                fullName: val,
                domain: testQueryData[val]
            }
            let response = await getEmailsHandler(mockRequest(query), mockResponse());
            responseObject = {
                ...responseObject,
                [val] : response?.email ?? response?.error
            }
        });
        expect(desiredResponse).toMatchObject(responseObject);
    });
    it('should test email controller getEmailHandler for faulty values', async() => {
        const query: Query = {
            fullName: '',
            domain: 'slideshare.net'
        }
        const response = await getEmailsHandler(mockRequest(query), mockResponse());
        expect(response).toStrictEqual({ error: "Oops! Derivation not possible. Enter Valid Domain"});
    });
});