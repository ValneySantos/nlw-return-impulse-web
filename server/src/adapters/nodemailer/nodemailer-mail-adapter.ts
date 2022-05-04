import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0ff69c5d219ccb",
    pass: "39fa58a2ecfd39"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
 async sendMail({subject, body}: SendMailData){
    
  await transport.sendMail({
    from:  'Equip Feedget <oi@feedget.com>',
    to: 'Valney Filho <filhovalney@gmail.com>',
    subject,
    html: body,
  })
 }
}