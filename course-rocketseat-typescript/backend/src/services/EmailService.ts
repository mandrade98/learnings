interface IMailTo {
    name: string;
    email: string
}

interface IMailMessage {
    subject: string;
    body: string;
    //attachment?: Array<string>;
    attachment?: string[]
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailtService {
    sendMail(request: IMessageDTO) : void;
}

class EmailService implements IEmailtService {
    sendMail({ to, message}: IMessageDTO) {
        console.log(`Email enviado para ${to.name} : ${message.subject}`);
    }
}

export default EmailService;