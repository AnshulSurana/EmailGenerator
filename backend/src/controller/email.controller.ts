import { Request, Response } from "express";
import fs from 'fs';

import constant from './constant.js';
import log from '../logger/index.js';

const data = JSON.parse(fs.readFileSync('./src/sampleData.json', 'utf-8'))

/**
 * 
 * @param match 
 * @param matchedName 
 * @returns deduced format from the data.
 */
const deduceFormat = (match: string, matchedName: string ) => {
    const formattedName = (match).split('@')[0];
    if (matchedName.length - 1 === formattedName.length) {
        return constant.FULLNAME_DOMAIN;
    } else {
        return constant.FIRST_NAME_INITIAL_DOMAIN;
    }
}

/**
 * 
 * @param req 
 * @param res 
 * @returns Either generated email or error.
 */
export async function getEmailsHandler(req: Request, res: Response) {
    log.info('Request to generate Email with query params',req.query);
    const fullName = req.query.fullName;
    const companyDomain = req.query.domain;
    const companyDomainLowerCase = companyDomain.toLowerCase();
     // Check if the company domain is present in the sample data
    const matchedEmail = Object.values(data).find((email: string) => email.endsWith(`@${companyDomainLowerCase}`));
    const matchedName = Object.keys(data).find(name => data[name] === matchedEmail);
    
    // send error if domain not found in sample data
    if (!matchedEmail) {
        log.info('Failed with no matching valid domain');
        return res.status(400).send({ error: 'Oops! Derivation not possible. Enter Valid Domain' });
    }

    // deduce format
    const format = deduceFormat(matchedEmail as string, matchedName as string);

    // Get the first name and last name from full name
    const [firstName, lastName=''] = fullName.split(' ');

    let email = '';
    const firstNameLowerCase = firstName.toLowerCase();
    const lastNameLowerCase = lastName.toLowerCase();

    if (format === constant.FULLNAME_DOMAIN) {
        email = `${firstNameLowerCase}${lastNameLowerCase}@${companyDomainLowerCase}`
    } else if (format === constant.FIRST_NAME_INITIAL_DOMAIN){
        email = `${firstNameLowerCase.substring(0,1)}${lastNameLowerCase}@${companyDomainLowerCase}`
    }
    log.info('Succesfully generated email');
    return res.status(200).send({email});
  }