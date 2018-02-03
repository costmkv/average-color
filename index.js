const im = require('imagemagick');
const rgbToHex = require('rgb-hex');

module.exports = function (filePath, format, callback) {
  if (!callback) {
    callback = format;
    format = undefined;
  }

  const imArgs = [filePath, '-scale', '1x1', '-format', '%[pixel:u]', 'info:-'];
  format = format || 'hex';

  im.convert(imArgs, (err, srgb) => {
    if (err) {
      callback(err);
    }

    const rgb = srgb.substring(srgb.indexOf('(') + 1, srgb.indexOf(')'));

    let color = null;

    if (format === 'hex') {
      color = rgbToHex(`rgb(${rgb.toString()})`);
    } else if (format === 'rgb') {
      color = rgb.split(',').map(value => Number(value));
    }

    callback(null, color);
  });
};
