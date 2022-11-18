import { Body, Controller, Delete, Get,  Param,  Post, Put} from "@nestjs/common";
import { Observable } from "rxjs";
import { Book } from "src/entity/book.entity";
import { UpdateResult } from "typeorm";
import { BooksService } from "./books.services";

@Controller()
export class BooksController{
    constructor(private booksService: BooksService) {}

    @Get()
    findAll(): Promise<Book[]>{
        return this.booksService.findAll();
    }
   
    @Post()
    create(@Body() createBook: Book){
        return this.booksService.create(createBook)
    }

    @Delete(':id')
    delete(@Param('id')id: number){
        return this.booksService.delete(id)
    }
}
