exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = {
        name,
        email,
        password
    }

    return res.json(user);
}