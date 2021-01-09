const {queryWilayah} = require('../model/user')

const searchLokasi = async (req, res) => {
  const {provinsi} = req.params
  let {isKota,kota, kecamatan, kelurahan, kodepos} = req.query
  const wilayah = {
    provinsi: provinsi || '',
    isKota,
    kota: kota || '',
    kecamatan: kecamatan || '',
    kelurahan: kelurahan || '',
    kodepos: kodepos || ''
  }
  const result = await queryWilayah(wilayah)
  res.send({
    success: true,
    data: result
  })
}


module.exports = {
  searchLokasi  
}