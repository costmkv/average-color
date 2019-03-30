const averageColor = require('../index');
const expect = require('expect.js');

describe('average-color', () => {
  it('rgb', async () => {
    const color = await averageColor(`${__dirname}/rgb.jpg`);
    expect(color).to.be('5e5453');
  });

  it('cyan', async () => {
    const color = await averageColor(`${__dirname}/cyan.jpg`);
    expect(color).to.be('666238');
  });
});
