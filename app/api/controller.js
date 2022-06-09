const {Ktp} = require('../../models')
module.exports = {
    getPenduduk: async(req,res)=>{
        try {
            const {id} = req.params
            const data = await Ktp.findOne({ where: { nik: id } });
            res.status(200).json({data : data})
        } catch (error) {
            res.status(500).json({message: error.message || `Internal Server Error`})
        }
    }
}