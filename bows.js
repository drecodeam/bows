(function(window) {
  var logger = require('andlog'),
      goldenRatio = 0.618033988749895,
      hue = 0,
      padLength = 15,
      yieldColor,
      bows;

  yieldColor = function() {
    hue += goldenRatio;
    hue = hue % 1;
    return hue * 360;
  };

  bows = function(str) {
    var msg;
    msg = "%c" + (str.slice(0, padLength));
    msg += Array(padLength + 3 - msg.length).join(' ') + '|';

    return logger.log.bind(logger, msg, "color: hsl(" + (yieldColor()) + ",99%,40%); font-weight: bold");
  };

  bows.config = function(config) {
    if (config.padLength) {
      return padLength = config.padLength;
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = bows;
  } else {
    window.bows = bows;
  }
}).call(this);
