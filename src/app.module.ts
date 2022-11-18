import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    BooksModule,
    RouterModule.register([
      {
        path: 'api/books',
        module: BooksModule,
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
