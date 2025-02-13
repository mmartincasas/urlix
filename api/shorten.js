import { shortenUrl } from './controllers/urlController.js';

export default async function handler(req, res) {
    return shortenUrl(req, res);
}