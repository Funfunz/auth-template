import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'
import { renderHTML, renderSubject, renderText, TemplateName } from './render'

const {
  EMAIL_HOST,
  EMAIL_PORT = 25,
  EMAIL_USER,
  EMAIL_PASS,
} = process.env

const transporter: Transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  auth: {
    type: 'login',
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
} as any)

export function send(options: SendMailOptions) {
  options.html = options.html || options.text
  return transporter.sendMail(options)
}

export function sendWithTemplate(template: TemplateName, to: string, params: Record<string, string | number | boolean>) {
  return Promise.all([
    renderSubject(template, params),
    renderText(template, params),
    renderHTML(template, params),
  ]).then(([subject, text, html]) => {
    return send({to, subject, text, html })
  })
}



