const{queryPromise} = require('../utils/connection')

const queryWilayah = async (wilayah) => {
  const query = `select * from wilayah where provinsi like '%${wilayah.provinsi}%' AND kota = '${wilayah.isKota}' AND nama_kota like '%${wilayah.kota}%' and kecamatan like '%${wilayah.kecamatan}%' and kelurahan like '%${wilayah.kelurahan}%' and kodepos like '%${wilayah.kodepos}%'`
  const data = await queryPromise(query)
  return data.results
}

module.exports = {
  queryWilayah
}
