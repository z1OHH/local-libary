import { Body, Controller, Delete, Get,  Param,  Post, Put} from "@nestjs/common";
import path from "path";
import { Observable } from "rxjs";
import { Book } from "src/entity/book.entity";
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

    @Put('id')
    update(@Param('id')id: number, @Body() Book: Book){
        return this.booksService.update(+id,Book)
    }

}
