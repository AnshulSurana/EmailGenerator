import { Request, Response } from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require("../sampleData.json");

const deduceFormat = (match: string, matchedName: string ) => {
    const formattedName = (match).split('@')[0];
    if (matchedName.length - 1 === formattedName.length) {
        return 'FULLNAME_DOMAIN';
    } else {
        return 'FLASTNAME_DOMAIN';
    }
}

export async function getEmailsHandler(req: Request, res: Response) {
    const fullName = req.query.fullName;
    const companyDomain = req.query.domain;

     // Check if the company domain is present in the sample data
    const matchedEmail = Object.values(data).find((email: string) => email.endsWith(`@${companyDomain}`));
    const matchedName = Object.keys(data).find(name => data[name] === matchedEmail);
    if (!matchedEmail) {
        return res.status(400).send({ error: 'Oops! Derivation not possible. Enter Valid Domain' });
    }
    const f = deduceFormat(matchedEmail as string, matchedName as string);

    // Get the first name and last name from full name
    const [firstName, lastName=''] = fullName.split(' ');
    let email = '';
    if (f === 'FULLNAME_DOMAIN') {
        email = `${firstName}${lastName}@${companyDomain}`
    } else if (f ==='FLASTNAME_DOMAIN' ){
        email = `${firstName.substring(0,1)}${lastName}@${companyDomain}`
    }

    return res.send({email});
  }