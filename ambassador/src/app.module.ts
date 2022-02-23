import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkModule } from './link/link.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ambassador_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'ambassador',
      autoLoadEntities: true,
      synchronize: true,
    }),
    forwardRef(() => UserModule),
    ProductModule,
    LinkModule,
    forwardRef(() => OrderModule),
    KafkaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
