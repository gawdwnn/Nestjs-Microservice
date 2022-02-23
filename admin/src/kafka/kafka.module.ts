import { forwardRef, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';
import { LinkModule } from '../link/link.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KafkaError } from './kafka-error';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([KafkaError]),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['pkc-6ojv2.us-west4.gcp.confluent.cloud:9092'],
            ssl: true,
            sasl: {
              mechanism: 'plain',
              username: 'NX3IUMAGQ4MNIPHO',
              password:
                '6xAnJb8hMBOjiAdCF/Vve7YKMjffi0v5T2Tnlhh0Vu1YpBJGJh2quOnH2PShJQj8',
            },
          },
        },
      },
    ]),
    forwardRef(() => LinkModule),
    forwardRef(() => OrderModule),
  ],
  providers: [KafkaService],
  exports: [KafkaService],
  controllers: [KafkaController],
})
export class KafkaModule {}
