const { Steppy } = require('twostep');
const averageColor = require('../index');
const expect = require('expect.js');

describe('average-color', () => {
  it('rgb', (done) => {
    Steppy(
      function () {
        averageColor(`${__dirname}/rgb.jpg`, this.slot());
      },
      function (err, color) {
        expect(color).to.be('5e5453');

        this.pass(null);
      },
      done,
    );
  });

  it('cyan', (done) => {
    Steppy(
      function () {
        averageColor(`${__dirname}/cyan.jpg`, this.slot());
      },
      function (err, color) {
        expect(color).to.be('666238');

        this.pass(null);
      },
      done,
    );
  });
});
