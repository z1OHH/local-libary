import { Book } from "src/entity/book.entity";
import { createConnection } from "typeorm"

export const databaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => 
            await createConnection({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: '2195',
                database: 'local-libary',
                entities:[Book],
                synchronize: true,
            }),
        },
];
