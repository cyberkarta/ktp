const {Ktp} = require('../../models')
module.exports = {
    index: async(req,res)=>{
        try {
            const ktp = await Ktp.findAll()
            res.render('ktp/view',{
                title:'Data Penduduk',
                ktp
            })
        } catch (error) {
            console.log(error)
        }
    },
    createView: async(req,res)=>{
        try {
            res.render('ktp/create',{
                title:'Tambah Penduduk'
            })
        } catch (error) {
            console.log(error)
        }    
    },
    actionCreate : async(req,res)=>{
        try {
            const {
                nik, 
                nama,
                jenis_kelamin,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi
            } = req.body
            const data = {
                nik, 
                nama,
                jenis_kelamin,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi
            };
            await Ktp.create(data);
            res.redirect('/penduduk')
        } catch (error) {
            console.log(error)
        }
    },
    viewEdit : async(req,res)=>{
        try {
            const {id} = req.params
            const penduduk = await Ktp.findByPk(id);
            res.render('ktp/edit',{
                title:'Edit Penduduk',
                penduduk
            })
        } catch (error) {
            console.log(error)
        }
    },
    actionEdit : async(req,res)=>{
        try {
            const { id } = req.params;
            const {
                nik, 
                nama,
                jenis_kelamin,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi
            } = req.body
            const ktp = await Ktp.findByPk(id);
            await ktp.update({
                nik, 
                nama,
                jenis_kelamin,
                alamat,
                kelurahan,
                kecamatan,
                kabupaten,
                provinsi
            })
            res.redirect('/penduduk')
        } catch (error) {
            console.log(error)
        }
    }
}