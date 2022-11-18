import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    bookid: number;

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    summary: string

    @Column()
    ISBN: string

    @Column()
    url: string
}