import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as fs from 'fs';
import * as path from 'path';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST'],
  port: parseInt(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DATABASE'],
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.resolve(__dirname, "./cert/eu-central-1-bundle.pem")).toString(),
  }
};
console.log(ormConfig);

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRoot(ormConfig)
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
