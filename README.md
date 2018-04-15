# Average color

## Example

```javascript
var averageColor = require('./');
var imgPath = './image.jpg';

averageColor(imgPath, function(err, color){
  console.log(color) // '5f5554'
})
```

Options:

* `path` - path to the image
