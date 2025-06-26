import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { TemaController } from './controllers/tema.controller';
import { TemaService } from './service/tema.service';

@Module({
  // importação da modelagem de tema
  imports: [TypeOrmModule.forFeature([Tema])],
  // importação da service de tema, que irá passar as regras de tema
  providers: [TemaService],
  // importação da controladora que irá liberar os endpoints de acesso
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
