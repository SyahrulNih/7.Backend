const mongoose = require('mongoose')

const swaSchema = new mongoose.Schema({
    nis:{
        required: true,
        type: String
    },
    nama:{
        required: true,
        type: String
    },
    angkatan:{
        required: true,
        type: String
    },
    sekolah:{
        required: true,
        type: String
    },
})

module.exports = mongoose.model('Siswa', swaSchema, 'siswa')