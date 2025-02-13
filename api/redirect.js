import { redirectUrl } from './controllers/urlController.js';

export default async function handler(req, res) {
    return redirectUrl(req, res);  
}

