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
          brokers: ['pkc-l6wr6.europe-west2.gcp.confluent.cloud:9092'],
          ssl: true,
          sasl: {
            mechanism: 'plain',
            username: 'R3GVCJHB2IEMVUTY',
            password:
              'FN3ckkO4hMubmqW/3s3VvI6lJdbqYIa0V9y37Q4ZWxGkme0BeedB0qKt1wU78dID',
          },
        },
      },
    },
  );
  app.listen(() => console.log('running'));
}
bootstrap();
