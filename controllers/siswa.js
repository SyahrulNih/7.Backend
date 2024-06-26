const Siswa = require('./models/swaEmbedded')

module.exports = {
    insert: async (req, res) => {
        const data = new Siswa ({
            nis: req.body.nis,
            nama: req.body.nama,
            angkatan: req.body.angkatan,
            sekolah: req.body.sekolah,
        })

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    },
    getSiswa : async (req,res) => {
        try {
            const data = await Siswa.find();
            res.json(data)
        }catch (error) {
            res.status(500).json({message:error.message})
        }
    },
    getSiswaByNm : async (req, res) => {
        const nis = req.params.nis
        try {
            const data = await Siswa.find().where('nis').equals(nis);
            res.json(data);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    },
    update: async (req,res) => {
        const filter = {nis:req.params.nis}
        const updatedData = {
            nis: req.params.nis,
            nama: req.params.nama,
            angkatan: req.params.angkatan,
            sekolah: req.body.sekolah,
        }
        try { 
            await Siswa.updateOne(filter, updatedData)
            res.status(200).json(updatedData)
        } catch (error) {
            res.status(409).json({message: error.message})
        }
    },
    delete: async (req,res) => {
        const filter = {nis: req.params.nis}
        try {
            await Siswa.deleteOne(filter)
            res.send("data telah terhapus")
        }catch (error) {
            res.status(409).json({message: error.message})
        }
    },
    insertNilai: async (req, res) => {
        const nis = req.params.nis

        try {
            await Siswa.updateOne(
                {"nis": nis},
                {
                    $push: {
                        "nilai": {
                            "kdMp":req.body.kdMp,
                            "matapelajaran":req.body.matapelajaran,
                            "guru":req.body.guru,
                            "kelas":req.body.kelas,
                            "nilai":req.body.nilai,
                        }
                    }
                })
            res.send('NIlai telah Tersimpan')
        } catch(error) {
            res.status(409).json({message: error.message})
        }
    },
    getNilaiByNim: async(req,res) => {
        const nis = req.params.nis;
        try{
            const result = await Siswa.findOne({"nis": nis},{"_id":0, "nilai":1})
            res.json(result)
        } catch(error) {
            res.status(500).json({message : error.message})
        }
    }
//     insertNilai: async (req, res) => {
//         const nis = req.params.nis

//         try{
//             await Siswa.updateOne(
//                 {"nis":nis},
//                 {
//                     $push:{
//                         "nilai": {
//                             "kdMp": req.body.kdMp,
//                             "matapelajaran": req.body.matapelajaran,
//                             "guru": req.body.guru,
//                             "kelas": req.body.kelas,
//                             "nilai":req.body.nilai,
//                         }
//                     }
//                 })
//             res.send('Nilai telah di simpan')
//         }catch(error){
//             res.status(409).json({message: error.message})
//         }
//     },
//     getNilaiByNim : async(req,res) => {
//         const nis = req.params.nis;
//         try {
//             const result = await Siswa.findOne({"nis" : nis},{"_id":0,"nilai":1})
//             res.json(result)
//         } catch (error){
//             res.status(500).json({ message: error.message})
//         }
//     },
}
