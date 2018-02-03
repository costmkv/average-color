# Average color

## Example

```javascript
var averageColor   = require('./');
var imgPath = './image.jpg';

averageColor(imgPath, function(err, color){
  // hex color by default
  console.log(color) // '5f5554'
})

averageColor(imgPath, 'rgb', function(err, color){
  console.log(color) // [95, 85, 84]
})
```

Options:

* `path` - path to the image
* `format` - 'hex' or 'rgb', defaults to 'hex'
