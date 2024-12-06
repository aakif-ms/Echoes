const mongoose = require('mongoose');
const path = require('path'); 
const Schema = mongoose.Schema;

const defaultImage = '../../assets/Kedarkantha.jpg';

const EchoSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
        default: defaultImage,
    },
});

EchoSchema.methods.getFormattedBirthDate = function() {
    return this.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

module.exports = mongoose.model('Memory', EchoSchema);
