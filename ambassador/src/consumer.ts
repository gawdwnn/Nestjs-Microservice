import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
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
        consumer: {
          groupId: 'ambassador-consumer',
        },
      },
    },
  );
  app.listen();
  console.log('app is consuming...');
}

bootstrap();
