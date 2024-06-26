const express = require ('express')
const routerSwa = express.Router()

const controllerSiswa = require('../controllers/siswa')

routerSwa.route('/siswa')
    .post(controllerSiswa.insert)
    .get(controllerSiswa.getSiswa)

routerSwa.route('/siswa/:nis')
    .get(controllerSiswa.getSiswaByNm)
    .put(controllerSiswa.update)
    .delete(controllerSiswa.delete)

routerSwa.route('/siswa/nilai/:nis')
    .get(controllerSiswa.getNilaiByNim)
    .put(controllerSiswa.insertNilai)

// routerSwa.route('/siswa/nilai/nis')
//     .get(controllerSiswa.getNilaiByNim)
//     .put(controllerSiswa.insertNilai)

module.exports = routerSwa