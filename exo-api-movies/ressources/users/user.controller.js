import { User } from './user.model';

export const list = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) return res.status(400).end();
        res.status(200).json({ users: users });

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const getOne = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).end();
        res.status(200).json({ users: user });
        console.log(user)

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const updateOne = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (updatedUser) return res.status(400).end();
        res.status(200).json({ user: updatedUser })

    } catch (err) {
        console.log(err);
        res.status(400).end()
    }
}

export const create = async (req, res) => {
    try {
        const users = await User.create({ ...req.body });
        res.status(200).json({ users: users });

    } catch (err) {
        console.log(err);
        res.status(400).end();

    }
}

export const deleteOne = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (deletedUser) return res.status(400).end();
        res.status(200).json({ user: deletedUser })

    } catch (err) {
        console.log(err);
        res.status(400).end()
    }
}