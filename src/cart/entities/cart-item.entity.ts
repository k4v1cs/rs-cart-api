import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Cart } from './cart.entity';

@Entity({name: 'cart_items'})
export class CartItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'product_id'})
    productId: number;

    @Column()
    count: number;

    @ManyToOne(() => Cart, (cart) => cart.items)
    @JoinColumn({name: 'cart_id'})
    cart: Cart;
}