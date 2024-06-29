const Data = require('../models/Data');

const getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateData = async (req, res) => {
    const { id } = req.params;
    const { actionType, actionName } = req.body;
    const username = req.user.username;

    try {
        const data = await Data.findById(id);

        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }

        data.actionType = actionType;
        data.actionName = actionName;
        data.editedBy = username;
        data.editedWhen = new Date();

        await data.save();
        res.json({ message: 'Data updated', data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getData, updateData };
