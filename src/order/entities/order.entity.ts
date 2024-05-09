import { Cart, Status } from "src/cart/entities/cart.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'orders'})
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.id)
    @JoinColumn({name: 'user_id'})
    user: User;

    @ManyToOne(() => Cart, (cart) => cart.items)
    @JoinColumn({name: 'cart_id'})
    cart: Cart;

    @Column({ type: 'json'})
    payment: Object;

    @Column({ type: 'json'})
    delivery: Object;

    @Column()
    comments: string;

    @Column()
    status: string;

    @Column()
    total: number;
}