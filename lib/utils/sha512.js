import crypto from 'crypto';
const KEY = process.env.SESSION_SECRET || '';
export default function (text) {
    const hash = crypto.createHmac('sha512', KEY);
    hash.update(text);
    return hash.digest('hex');
}
