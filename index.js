"use strict";

var http = require("http"),
    url = require("url"),
    util = require("util");

var clone = require("clone"),
    request = require("request");

var meta = require("./package.json"),
    PREFIX = "fieldpapers+",
    NAME = meta.name,
    VERSION = meta.version;

module.exports = function(tilelive) {
  var load = function(uri, callback) {
    var headers = {
      "User-Agent": [NAME, VERSION].join("/")
    };

    var sourceUrl = url.format(uri);

    return request({
      uri: sourceUrl,
      headers: headers,
      json: true
    }, function(err, rsp, body) {
      if (err) {
        return callback(err);
      }

      if (rsp.statusCode !== 200) {
        return callback(new Error(util.format("Received %d response for %s", rsp.statusCode, sourceUrl)));
      }

      return tilelive.load("raster+" + body.geotiff.url, callback);
    });
  };

  var Source = function(uri, callback) {
    if (typeof(uri) === "string") {
      uri = url.parse(uri, true);
    } else {
      uri = clone(uri);
    }

    uri.protocol = uri.protocol.replace(PREFIX, "");

    switch (uri.protocol) {
      case "http:":
      case "https:":
        return load(uri, callback);

      default:
        return callback(new Error(util.format("Unsupported %s transport: %s", NAME, url.format(uri))));
    }
  };

  Source.registerProtocols = function(_tilelive) {
    _tilelive.protocols[PREFIX + "http:"] = Source;
    _tilelive.protocols[PREFIX + "https:"] = Source;
  };

  Source.registerProtocols(tilelive);

  return Source;
};
