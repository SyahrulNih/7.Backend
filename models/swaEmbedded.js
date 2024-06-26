const mongoose = require('mongoose')

const swaEmbeddedSchema = new mongoose.Schema({
    nis:{
        required:true,
        type: String
    },
    nama:{
        required:true,
        type: String
    },
    angkatan:{
        required:true,
        type: String
    },
    sekolah:{
        required:true,
        type: String
    },
    nilai:[{
        kdMp : String,
        matapelajaran : String,
        guru : String,
        kelas:Number,
        nilai:String
    }]
})
module,exports = mongoose.model('Siswa',swaEmbeddedSchema,'siswa')