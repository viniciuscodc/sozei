import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tag } from "./entity/Tag"
import { Tool } from "./entity/Tool"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [Tag, Tool],
    migrations: [],
    subscribers: [],
})
