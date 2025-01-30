import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelaEntity } from '../tela/tela.entity';
import { TelaTipoCac_VisualesService } from './tela-cac_Visuales.service';
import { CacVisualEntity } from '../cac_visuales/cac_visuales.entity';
import { TelaTipoCac_VisualesController } from './tela-cac_Visuales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TelaEntity, CacVisualEntity])],
  controllers: [TelaTipoCac_VisualesController],
  providers: [TelaTipoCac_VisualesService],
})
export class TelaTipoCac_VisualesModule {}
