import fs from 'fs'
import nunjucks from 'nunjucks'

export type TemplateName = 'resetPassword'

export function render(file: string, params: any): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, templateString) => {
      if (error || !templateString) {
        reject(error)
      } else {
        const html = nunjucks.renderString(templateString, params)
        resolve(html)
      }
    })
  })
}

export function renderHTML(templateName: TemplateName, params: any) {
  const file = `${__dirname}/templates/${templateName}.html`
  return render(file, params)
}

export function renderText(templateName: TemplateName, params: any) {
  const file = `${__dirname}/templates/${templateName}.txt`
  return render(file, params)
}

export function renderSubject(templateName: TemplateName, params: any) {
  const file = `${__dirname}/templates/${templateName}.subject`
  return render(file, params)
}