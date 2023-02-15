import User from "../models/User";


class UsersControlller {
    async index(req, res) {
        try {
            const users = await User.finf();
            return res.json(users);
        } catch(err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error. "})
        }
    }

    async show(req, res) {

    }

    async create(req, res) {
        try {
             const { email, password } = req.body;

             const user = await User.findOne({ email });

             if (user) {
                return res
                    .status(422)
                    .json({ message:`User ${email} already exists.` });
             }

             const newUser = await User.create({ email, password });

             return res.status(201).json(newUser); 
        } catch (err) {
             console.error(err);
             return res.status(500).json({ error: "Internal server error." })
        }
    }

    async update(req, res) {

    }

    async destroy(req, res){

    }

}

export default new UsersControlller();