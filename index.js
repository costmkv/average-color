const gm = require('gm');
const Promise = require('bluebird');
Promise.promisifyAll(gm.prototype);

const parseChannelColor = color => Number(color.match(/\((.+)\)/)[1]);
const getChannelColor = color => Math.floor(255 * parseChannelColor(color));

module.exports = async function (filePath) {
  const report = await gm(filePath).identifyAsync();

  const channels = report['Channel Statistics'];
  const color = Buffer.alloc(3);

  if (channels.Gray) {
    const gray = getChannelColor(channels.Gray.Mean);

    for (let index = 0; index < 3; index += 1) {
      color.writeUInt8(gray, index);
    }
  } else if (channels.Red && channels.Green && channels.Blue) {
    ['Red', 'Green', 'Blue'].forEach((channel, index) => {
      color.writeUInt8(getChannelColor(channels[channel].Mean), index);
    });
  } else if (
    channels.Cyan && channels.Magenta && channels.Yellow && channels.Black
  ) {
    const cmyk = {};

    ['Cyan', 'Magenta', 'Yellow', 'Black'].forEach((channel) => {
      cmyk[channel] = parseChannelColor(channels[channel].Mean);
    });

    ['Cyan', 'Magenta', 'Yellow'].forEach((channel, index) => {
      const calcColor = Math.floor(255 * (1 - cmyk[channel]) * (1 - cmyk.Black));
      color.writeUInt8(calcColor, index);
    });
  } else {
    throw new Error('Unsupported image color profile');
  }

  return color.toString('hex');
};
