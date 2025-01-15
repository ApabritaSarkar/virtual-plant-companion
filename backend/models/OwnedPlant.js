const mongoose = require('mongoose');

const ownedPlantSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    datePlanted: { type: Date, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model('OwnedPlant', ownedPlantSchema);
