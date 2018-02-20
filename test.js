const averageColor = require('./');
const expect = require('expect.js');

const imgPath = './image.jpg';

describe('average-color', () => {
  it('should get hex', (done) => {
    averageColor(imgPath, (err, color) => {
      expect(color).to.be('5f5554');

      done();
    });
  });

  it('should get rgb', (done) => {
    averageColor(imgPath, 'rgb', (err, color) => {
      expect(color).to.eql([95, 85, 84]);

      done();
    });
  });
});
