import { Module } from '@nestjs/common';
import { MBTilesController } from './mbtiles.controller';
import { MBTilesService } from './mbtiles.service';

@Module({
  imports: [],
  controllers: [MBTilesController],
  providers: [MBTilesService],
})
export class MBTilesModule { }
