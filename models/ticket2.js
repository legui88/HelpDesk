module.exports = (sequelize, DataTypes) => {
    return sequelize.define('helpdesk_ticket', {
        id: {
            type: DataTypes.INTEGER(20),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        secure_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: 'helpdesk_ticket'
    })
}