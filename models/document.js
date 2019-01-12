module.exports = function (sequelize, DataTypes) {
    var Document = sequelize.define("Document", {
        document_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,200]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,50]
            }
        },
        docdate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1,500]
            }
        },
        image: {
            type: DataTypes.BLOB
        }

    });

    return Document;
};
