module.exports = function (sequelize, DataTypes) {
    var Document = sequelize.define("Document", {
        document_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,100]
            }
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10,200]
            }
        },
        category: {
            type: DataTypes.TEXT,
            defaultValue: [
                "public safety",
                "elections/campaigns",
                "environment",
                "business",
                "education",
                "weather"
            ],
            allowNull: false,
            validate: {
                len: [10,50]
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
                len: [30,500]
            }
        },
        image: {
            type: DataTypes.BLOB
        }

    });

    return Document;
};
