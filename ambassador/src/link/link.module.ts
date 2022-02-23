import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { LinkController } from './link.controller';
import { Link } from './link';
import { LinkService } from './link.service';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Link]),
    forwardRef(() => UserModule),
    KafkaModule,
  ],
  controllers: [LinkController],
  providers: [LinkService],
  exports: [LinkService],
})
export class LinkModule {}
