const user = require('express').Router()
const {searchLokasi} = require('../controller/user')



user.get('/search-daerah/:provinsi', searchLokasi)


module.exports = user