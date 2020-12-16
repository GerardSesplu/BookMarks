import { Model, DataTypes, Sequelize} from 'sequelize';
import { database } from "./../database";


export class FavouriteBooks extends Model {

    public id!: Number;
    public title!: String;
    public author!: String;
    public apiId!: String;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

FavouriteBooks.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        author: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        apiId: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        userId: {
            type: new DataTypes.INTEGER,
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
        tableName: "FavouriteBooks",
        sequelize: database
    }
);