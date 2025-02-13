import { saveUrl, getUrlByCode } from '../services/urlService.js';

export async function shortenUrl(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { original_url } = req.body;
    if (!original_url) {
        return res.status(400).json({ error: 'Missing original URL' });
    }

    let short_code;
    let existingUrl;

    do {
        short_code = Math.random().toString(36).slice(2, 8);
        existingUrl = await getUrlByCode(short_code);
    } while (existingUrl);

    try {
        await saveUrl(original_url, short_code);
        res.status(200).json({ short_url: `${process.env.BASE_URL}/${short_code}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function redirectUrl(req, res) {
    const { short_code } = req.query;
    const original_url = await getUrlByCode(short_code);

    if (!original_url) {
        return res.status(404).json({ error: 'URL not found' });
    }

    res.writeHead(302, { Location: original_url });
    res.end();
}
