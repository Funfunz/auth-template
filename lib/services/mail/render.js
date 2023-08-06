import fs from 'fs';
import nunjucks from 'nunjucks';
export function render(file, params) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (error, templateString) => {
            if (error || !templateString) {
                reject(error);
            }
            else {
                const html = nunjucks.renderString(templateString, params);
                resolve(html);
            }
        });
    });
}
export function renderHTML(templateName, params) {
    const file = `${__dirname}/templates/${templateName}.html`;
    return render(file, params);
}
export function renderText(templateName, params) {
    const file = `${__dirname}/templates/${templateName}.txt`;
    return render(file, params);
}
export function renderSubject(templateName, params) {
    const file = `${__dirname}/templates/${templateName}.subject`;
    return render(file, params);
}
