module.exports = (sequelize, DataTypes) => {
    const Ktp = sequelize.define('Ktp',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nik:{
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        nama:{
            type: DataTypes.STRING,
            allowNull: false
        },
        jenis_kelamin:{
            type: DataTypes.STRING,
            allowNull: false
        },
        alamat:{
            type: DataTypes.STRING,
            allowNull: true
        },
        kelurahan:{
            type: DataTypes.STRING,
            allowNull: true
        },
        kecamatan:{
            type: DataTypes.STRING,
            allowNull: true
        },
        kabupaten:{
            type: DataTypes.STRING,
            allowNull: true
        },
        provinsi:{
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: 'ktp',
        timestamps: true
    });
    return Ktp;
}