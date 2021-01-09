const{queryPromise} = require('../utils/connection')

const queryWilayah = async (wilayah) => {
  const queryKota = wilayah.kota ? `kota = ${wilayah.kota}`:`kota is not null`
  const query = `select * from wilayah where provinsi like '%${wilayah.provinsi}%' AND ${queryKota} AND nama_kota like '%${wilayah.kota}%' and kecamatan like '%${wilayah.kecamatan}%' and kelurahan like '%${wilayah.kelurahan}%' and kodepos like '%${wilayah.kodepos}%'`
  const data = await queryPromise(query)
  return data.results
}

module.exports = {
  queryWilayah
}
