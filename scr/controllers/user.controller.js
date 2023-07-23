import Mail from '../lib/mail-config';

exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password
    }

    //realizando o envio de email
    await Mail.sendMail({
        from: 'Queue test <queue@teste.com.br>',
        to: `${name} <${email}>`,
        subject: 'Cadastro de usuário',
        html: `Olá ${name} seja bem-vindo ao nosso sistema! :D`,
    })

    return res.json(user);
}   