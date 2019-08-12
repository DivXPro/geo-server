
declare module '@mapbox/mbtiles' {
  namespace MBTiles {
    type TileData = any;
    type TileHeaders = any;
  
    interface MBTilesStatic {
      new(path: string, callback: (err: Error, mbtiles: Tiles) => void): Tiles;
    }

    interface Tiles {
      getTile(z: number, x: number, y: number, callback: (err: Error, data: TileData, headers: TileHeaders) => void): void;
      getInfo(callback: (err: Error, info: any) => void): void;
    }
  }
  const MBTiles: MBTiles.MBTilesStatic;
  export = MBTiles;
}
