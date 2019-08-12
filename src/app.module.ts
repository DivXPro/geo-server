import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MBTilesModule } from './mbtiles/mbtiles.module';

@Module({
  imports: [MBTilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
