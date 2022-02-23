import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { Product } from './product';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    forwardRef(() => UserModule),
    SharedModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
