import { Injectable } from '@nestjs/common';

import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>) {
  }

  findOne(userName: string): Promise<User> {
    return this.userRepository.findOne({where: {name: userName}});
  }

  createOne({ name, password }: Partial<User>): Promise<User> {
    const user = this.userRepository.create({
      name,
      password
    })
    return this.userRepository.save(user);
  }

}
