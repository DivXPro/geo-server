import { Controller, Get, Param, Res, HttpStatus, Header } from '@nestjs/common';
import { MBTilesService } from './mbtiles.service';
import { Response } from 'express';

@Controller('tiles')
export class MBTilesController {
  constructor(private readonly mbtilesService: MBTilesService) { }

  @Get(':area/:z/:x/:y.pbf')
  @Header('Access-Control-Allow-Origin', '*')
  async getTile(@Param('area') area: string, @Param('z') z: number, @Param('x') x: number, @Param('y') y: number, @Res() res: Response) {
    const data = await this.mbtilesService.getTile(area, z, x, y);
    // res.status(HttpStatus.OK).json(data);
    res.send(data);
  }
}
