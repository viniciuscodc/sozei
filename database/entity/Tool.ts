import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm"
import { Tag } from "./Tag"

@Entity()
export class Tool {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    link: string

    @Column()
    description: string

    @ManyToMany(() => Tag, { onDelete: 'CASCADE'})
    @JoinTable()
    tags: Tag[]
}