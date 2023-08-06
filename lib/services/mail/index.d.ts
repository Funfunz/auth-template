import { SendMailOptions } from 'nodemailer';
import { TemplateName } from './render';
export declare function send(options: SendMailOptions): Promise<any>;
export declare function sendWithTemplate(template: TemplateName, to: string, params: Record<string, string | number | boolean>): Promise<any>;
