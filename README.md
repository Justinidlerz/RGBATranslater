#RGBA translater
To translate rgba to 16 binary model   

#Usage:
Use to translate backgroundColor to compatible ie8   
```javascript
//require translater
var RGBATranslate = require('RGBATranslate');  

var ele = document.getElementById('#example');
var bg = ele.style.backgroundColor;  
ele.style.filter = RGBATranslate(bg);  
```

If you only to get 16 binary color, you can set the colorOnly option to true, like so:   
```javascript
RGBATranslate(bg, true);  
```

Or if you only set the color to translate, you can use the translater core, like so:
```javascript
var translaterCore = require('RGBATranslate').translater;
var color = '255,255,255,0.9';
translaterCore(color); //return ccffffff;
```