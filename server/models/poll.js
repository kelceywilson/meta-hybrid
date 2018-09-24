'use strict';
module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define('Poll', {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        votingDurationMins: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numSelectionsPerVoter: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        description: {
            type: DataTypes.STRING
        }
    }, {});
    Poll.associate = function(models) {
        Poll.hasMany(models.Vote, {
            foreignKey: 'pollId',
            as: 'votes'
        });
        Poll.belongsToMany(models.User, {
            as: 'Voters',
            through: 'Votes',
            foreignKey: 'pollId'
        });
        Poll.hasMany(models.Submission, {
            foreignKey: 'pollId',
            as: 'submissions'
        });
        Poll.belongsTo(models.Task, {
            foreignKey: 'taskId',
            onDelete: 'CASCADE'
        });
    };
    sequelize.sync();
    return Poll;
};