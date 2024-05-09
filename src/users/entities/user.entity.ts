import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    name: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({unique: true, nullable: false, })
    password: string;
}