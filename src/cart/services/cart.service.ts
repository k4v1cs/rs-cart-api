import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart, Status } from '../entities/cart.entity';
import { Repository } from 'typeorm';
import { CartItem } from '../entities/cart-item.entity';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>
  ) {
  }

  findByUserId(userId: number): Promise<Cart> {
    console.log('Find by user', userId);
    return this.cartRepository.findOne({
      relations: ['items'],
      where: { user: {id: userId} },
    });
  }

  findOpenByUserId(userId: number): Promise<Cart> {
    console.log('Find open by user', userId);
    return this.cartRepository.findOne({
      relations: ['items'],
      where: {  user: {id: userId}, status: Status.OPEN },
    });
  }

  createByUserId(userId: number): Promise<Cart> {
    console.log('Creating cart');

    const userCart = this.cartRepository.create({
      user: {id: userId},
      items: [],
      createdAt: new Date(),
      updatedAt: new Date(),
      status: Status.OPEN
    });

    return this.cartRepository.save(userCart);
  }

  async findOrCreateByUserId(userId: number): Promise<Cart> {
    const userCart = await this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  async updateByUserId(userId: number, { items }: Cart): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    cart.items = this.cartItemRepository.create(items);
    cart.updatedAt = new Date();

    return this.cartRepository.save(cart);
  }

  async updateStatusByUserId(userId: number, status: Status): Promise<Cart> {
    const cart = await this.findOrCreateByUserId(userId);

    cart.status = status;
    cart.updatedAt = new Date();

    return this.cartRepository.save(cart);
  }

  async removeByUserId(userId): Promise<void> {
    const cart = await this.findByUserId(userId);
    cart.items?.length && await this.cartItemRepository.delete(cart.items.map(cart => cart.id));
    await this.cartRepository.remove(cart);
  }

}
