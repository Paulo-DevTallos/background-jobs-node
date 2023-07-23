import Mail from '../lib/mail-config';

export default {
    key: 'RegistrationMail',
    async handler({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Queue test <queue@teste.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá ${user.name} seja bem-vindo ao nosso sistema! :D`,
        })
    }
}