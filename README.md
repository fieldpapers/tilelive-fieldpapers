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
tilelive.load("fieldpapers+http://fieldpapers.org/snapshots/xz4z2mkc", ...);
```

## Debugging

tilelive-fieldpapers uses [debug](https://github.com/visionmedia/debug) to
facilitate debugging. To enable tilelive-fieldpapers-related messages, set
`DEBUG=tilelive-fieldpapers` before running code that calls into this.

## Quick links
- [🔗 fieldpapers.org](https://fieldpapers.org)
- [📋 Project overview](https://github.com/fieldpapers)
- [🐞 Issues and bug reports](https://github.com/fieldpapers/fieldpapers/issues)
- [🌐 Translations](https://explore.transifex.com/fieldpapers/fieldpapers/)
- [🤝 Code of Conduct](https://wiki.openstreetmap.org/wiki/Foundation/Local_Chapters/United_States/Code_of_Conduct_Committee/OSM_US_Code_of_Conduct)
