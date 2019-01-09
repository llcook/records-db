module.exports = function (sequelize, DataTypes) {
    var Document = sequelize.define("Document", {
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Source: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Category: {
            type: DataTypes.TEXT,
            defaultValue: "Other",
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        File: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }

        },

    });

    return Document;
};

//TODO:
    // - Validations
    // - Character limits
    // - allow nulls?


//  -source: (who created the document) (100)
//   e.g. Department of Public Works, Denver Police Department, etc.
// -document-name: (100)
//   e.g. 2016 Audit, Flooding data 1960-2014
// -description: (limit characters for each — 260)
// -image: link to Amazon s3 storage location for particular document
// -createdAt - automatically created
// -updatedAt - automatically created
