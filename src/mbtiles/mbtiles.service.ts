import { Injectable } from '@nestjs/common';
import * as zlib from 'zlib';
import * as MBTiles from '@mapbox/mbtiles';

const tileSources = [
  {
    source: 'beijing',
    path: 'mbtiles/beijing.mbtiles',
  },
  {
    source: 'newyork',
    path: 'mbtiles/newyork.mbtiles',
  },
  {
    source: 'demo',
    path: 'mbtiles/demo.mbtiles',
  },
  {
    source: 'shanghai',
    path: 'mbtiles/shanghai.mbtiles',
  },
];

@Injectable()
export class MBTilesService {
  private loadMBTiles(source: string): Promise<MBTiles.TileData> {
    const tiles = tileSources.find(t => t.source === source);
    return new Promise((resolve, reject) => {
      const mbt = new MBTiles(
        `${process.cwd()}/${tiles.path}`,
        (err: Error, mbtiles: MBTiles.Tiles) => {
          return err ? reject(err) : resolve(mbtiles);
      });
    });
  }

  async getTile(source: string, z: number, x: number, y: number) {
    const mbtiles = await this.loadMBTiles(source);
    const tileData = await new Promise((resolve, reject) => {
      mbtiles.getTile(z, x, y, (err: Error, data: MBTiles.TileData) => {
        return err ? reject(err) : resolve(data);
      });
    });
    return new Promise((resolve, reject) => {
      zlib.gunzip(tileData as Buffer, (err, data) => {
        if (err) {
          throw new Error();
        }
        return err ? reject(err) : resolve(data);
      });
    });
  }
}
