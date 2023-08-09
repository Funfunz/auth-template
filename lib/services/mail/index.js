import nodemailer from 'nodemailer';
import { renderHTML, renderSubject, renderText } from './render.js';
const { EMAIL_HOST, EMAIL_PORT = 25, EMAIL_USER, EMAIL_PASS, } = process.env;
const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    auth: {
        type: 'login',
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});
export function send(options) {
    options.html = options.html || options.text;
    return transporter.sendMail(options);
}
export function sendWithTemplate(template, to, params) {
    return Promise.all([
        renderSubject(template, params),
        renderText(template, params),
        renderHTML(template, params),
    ]).then(([subject, text, html]) => {
        return send({ to, subject, text, html });
    });
}
