const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const home = new Schema({
    topTitulo: {
        type: String
    },
    topSubtitulo: {
        type: String
    },
    topTextoBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },
    serTitulo: {
        type: String
    },
    serSubtitulo: {
        type: String
    },
    serUmIcon: {
        type: String
    },

    serUmTitulo: {
        type: String
    },
    serUmDesc: {
        type: String
    },

    serDoisIcon: {
        type: String
    },

    serDoisTitulo: {
        type: String
    },
    serDoisDesc: {
        type: String
    },

    serTresIcon: {
        type: String
    },

    serTresTitulo: {
        type: String
    },
    serTresDesc: {
        type: String
    },

}, {
    timestamps: true
});

mongoose.model('Home', home);
