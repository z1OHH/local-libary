import { Provider } from "@nestjs/common";
import { Book } from "src/entity/book.entity";
import { Connection } from 'typeorm'

export const bookProvider: Provider[] = [
    {
        provide: 'BOOKS_REPOSITORY',
        useFactory: (connection: Connection) =>
        connection.getRepository(Book),
        inject: ['DATABASE_CONNECTION'],
    },
];