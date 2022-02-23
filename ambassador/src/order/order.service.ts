import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from '../shared/abstract.service';
import { Repository } from 'typeorm';
import { Order } from './order';

@Injectable()
export class OrderService extends AbstractService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {
    super(orderRepository);
  }
}
