const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    actionType: { type: String, required: true },
    actionName: { type: String, required: true },
    editedBy: { type: String },
    editedWhen: { type: Date }
});

module.exports = mongoose.model('Data', dataSchema);
