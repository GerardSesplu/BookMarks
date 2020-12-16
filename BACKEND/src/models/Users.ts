import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";


export class Users extends Model {

    public id!: Number;
    public username!: String;
    public firstname!: String;
    public lastname!: String;
    public birthdate!: Date;
    public email!: String;
    public password!: String;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: new DataTypes.INTEGER,
            allowNull: true
        },
        lastname: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        phone: {
            type: new DataTypes.INTEGER,
            allowNull: true
        },
        birthdate: {
            type: new DataTypes.DATE,
            allowNull: true
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        
        genre: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        
        password: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        createdAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: new DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    },
    {
        tableName: "Users",
        sequelize: database
    }
);