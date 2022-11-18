import { Inject, Injectable, } from "@nestjs/common";
import { from, Observable } from "rxjs";
import { Book } from "src/entity/book.entity";
import { Repository ,DeleteResult} from 'typeorm'


@Injectable()
export class BooksService{
constructor(
    @Inject('BOOKS_REPOSITORY') 
    private booksRepository: Repository<Book>,
){}
    findAll(): Promise<Book[]>{
        return this.booksRepository.find();
    }

    create(createBook: Book) : Promise<Book>{
        let book : Book = new Book();
        book.bookid = createBook.bookid;
        book.title = createBook.title;
        book.author = createBook.author;
        book.summary = createBook.summary;
        book.ISBN = createBook.ISBN;
        book.url = createBook.url;
        return this.booksRepository.save(book);
    }

    delete(id: number): Observable<DeleteResult>{
        return from(this.booksRepository.delete(id))
    }
}
