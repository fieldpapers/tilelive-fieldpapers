# tilelive-fieldpapers

I am a [tilelive](https://github.com/mapbox/tilelive.js) source for [Field
Papers](http://fieldpapers.org/) atlases and snapshots.

## Usage

This will look up rasters associated with a Field Papers atlas or snapshot and
render them as tiles.

This is intended for RGB(A) multiband rasters. It uses Mapnik (via
tilelive-mapnik) and GDAL (via node-gdal) under the hood to inspect rasters and
render them, so it should work with any format that GDAL supports (and has been
compiled with support for).

```javascript
tilelive.load("fieldpapers+http://next.fieldpapers.org/snapshots/xz4z2mkc", ...);
```

## Caveats

This only works with [Field Papers vNext](http://next.fieldpapers.org/), which
is being developed here: https://github.com/fieldpapers
