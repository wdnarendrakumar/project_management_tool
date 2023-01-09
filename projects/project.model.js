let mongoose = require('mongoose')

const { Schema } = mongoose

const ProjectSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String
    },
    status: {
        type: mongoose.Schema.Types.String,
    }
}) 