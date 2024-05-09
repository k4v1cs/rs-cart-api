import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { CartItem } from './cart-item.entity';
import { User } from 'src/users/entities/user.entity';

export enum Status {
    OPEN = "OPEN",
    ORDERED = "ORDERED"
}

@Entity({name: 'carts'})
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'user_id'})
    user: User;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.OPEN
    })
    status: Status;

    @OneToMany(() => CartItem, (cartItem => cartItem.cart), {cascade: ["insert", "update", "remove"]})
    items: CartItem[];
}