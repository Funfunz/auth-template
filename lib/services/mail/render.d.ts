export type TemplateName = 'resetPassword';
export declare function render(file: string, params: any): Promise<string>;
export declare function renderHTML(templateName: TemplateName, params: any): Promise<string>;
export declare function renderText(templateName: TemplateName, params: any): Promise<string>;
export declare function renderSubject(templateName: TemplateName, params: any): Promise<string>;
