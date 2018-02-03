var im = require('imagemagick');
var rgbToHex = require('rgb-hex');

module.exports = function(filePath, format, callback) {
		if (!callback) {
				callback = format;
				format = undefined;
		}

		var imArgs = [filePath, '-scale', '1x1\!', '-format', '%[pixel:u]', 'info:-'];
		format = format || 'hex';

		im.convert(imArgs, function(err, srgb) {
				if (err) {
						callback(err);
				}

				var rgb = srgb.substring(srgb.indexOf('(') + 1, srgb.indexOf(')'));

				var color = null;

				if (format === 'hex') {
						color = rgbToHex('rgb(' + rgb.toString() + ')');
				} else if (format === 'rgb') {
						color = rgb.split(',').map(function(value) {
								return Number(value);
						});
				}

				callback(null, color);
		})
};
