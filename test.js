var averageColor  = require('./');
var expect  = require('expect.js');

var imgPath = './image.jpg';

describe('average-colour', function() {
		it('should get hex', function(done) {
				averageColor(imgPath, function(err, color) {
						expect(color).to.be('5f5554');

						done();
				});
		});

		it ('should get rgb', function(done) {
				averageColor(imgPath, 'rgb', function(err, color) {
						expect(color).to.eql([95, 85, 84]);

						done();
				});
		});
});
