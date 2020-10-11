// const Sequelize = require('sequelize');

// module.exports = function (sequelize, DataTypes) {
//     const Project = sequelize.define("Project", {
//         id: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true
//         },
//         url_code: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isUrl: true
//             }
//         },
//         live_preview: {
//             type: DataTypes.STRING,
//             allowNull: true,
//             validate: {
//                 isUrl: true
//             }
//         },
//         project_updated_at: {
//             type: DataTypes.DATEONLY,
//             allowNull: false
//         },
//     });

//     return Project;
// };
