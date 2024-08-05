import crypto from 'crypto';

type Params = Record<string, string|number>

 export const generateSignature = (params:Params, apiSecret:string):string => {
    const keys = Object.keys(params).sort();
    const sortedParams = keys.map(key => `${key}=${params[key]}`).join('&');
    const stringToSign = `${sortedParams}${apiSecret}`;
    
    return crypto.createHash('sha1').update(stringToSign).digest('hex');
}