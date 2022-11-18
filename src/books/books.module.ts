import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { bookProvider } from "src/provider/book.provider";
import { BooksController } from "./books.controller";
import { BooksService } from "./books.services";

@Module({
    imports: [DatabaseModule],
    controllers: [BooksController],
    providers: [...bookProvider,BooksService],
})
export class BooksModule{}
