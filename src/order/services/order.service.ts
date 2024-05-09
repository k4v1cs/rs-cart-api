import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  private orders: Record<string, Order> = {}

  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {
  }

  findById(orderId: number): Promise<Order> {
    return this.orderRepository.findOne(orderId, {relations: ['cart', 'cart.items']});
  }

  create(data: Partial<Order>, userId: number): Promise<Order> {
    const order = this.orderRepository.create({
      ...data,
      status: 'inProgress',
      user: {id: userId}
    });

    return this.orderRepository.save(order);
  }

  async update(orderId, data) {
    const order = await this.findById(orderId);

    if (!order) {
      throw new Error('Order does not exist.');
    }
    return this.orderRepository.update(orderId, data);
  }
}
