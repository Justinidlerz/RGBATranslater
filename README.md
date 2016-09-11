#RGBA translater
To translate rgba to 16 binary model   

#Usage:
```javascript
npm install rgba-translater
```

Use to translate backgroundColor to compatible ie8   
```javascript
//require translater
var RGBATranslater = require('rgba-translater');  

var ele = document.getElementById('#example');
var bg = ele.style.backgroundColor;  
ele.style.filter = RGBATranslater(bg);  
```

If you only to get 16 binary color, you can set the colorOnly option to true, like so:   
```javascript
RGBATranslater(bg, true);  
```

Or if you only set the color to translate, you can use the translater core, like so:
```javascript
var translaterCore = require('rgba-translater').translater;
var color = '255,255,255,0.9';
translaterCore(color); //return ccffffff;
```