import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

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
      },
    },
  );
  app.listen(() => console.log('App is listening!!!'));
}
bootstrap();
