module.exports = function (sequelize, DataTypes) {
    var Document = sequelize.define("Document", {
        document_name: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true,
                len: [10, 100]
            }
        },
        source: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
                notEmpty: true,
                len: [10, 200],
                isURL: true
            }
        },
        category: {
            type: DataTypes.STRING,
            values: [
                "public safety",
                "elections/campaigns",
                "environment",
                "business",
                "education",
                "weather"
            ],
            validate: {
                allowNull: false,
                notEmpty: true,
                len: [10, 50],
                isLowercase: true
            }
        },
        docdate: {
            type: DataTypes.DATEONLY,
            validate: {
                allowNull: false,
                notEmpty: true,
                isDate: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            validate: {
                allowNull: false,
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.BLOB
        }

    });

    return Document;
};
