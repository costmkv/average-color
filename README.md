# Average color

## Example

```javascript
const averageColor = require('./');
const imgPath = './image.jpg';

averageColor(imgPath)
  .then((color) => {
    console.log(color);
  })
  .catch((err) => {
    console.log(err);
  });
```
