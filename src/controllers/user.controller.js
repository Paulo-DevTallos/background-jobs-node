import mailQueue from "../lib/queue-config";

export default {
    async createUser(req, res) {
        const { name, email, password } = req.body;
    
        const user = {
            name,
            email,
            password
        }
    
        //realizando o envio de email atraves do jobRegistration
        await mailQueue.add({ user });
    
        return res.json(user);
    }     
} 