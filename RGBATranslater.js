/**
 * RGBATranslate
 * @author idler(zqc.sunny@aliyun.com)
 * 
 * To translate rgba to 16 binary model;
 * 
 * Usage:
 * var RGBATranslate = require('RGBATranslate');
 * var ele = document.getElementById('#example');
 * var bg = ele.style.backgroundColor;
 * ele.style.filter = RGBATranslate(bg);
 * 
 * If colorOnly=true only return #aarrggbb;
 * else return ieFilter; 
 * 
 * @color {Strin} rgba(x,x,x,o)
 * @colorOnly {Boolean} 
 * @return {String}
 */
module.exports = function RGBATranslate(color, colorOnly) {
    var rgba = color.substring(5,color.length - 1);
    var ieColor = '#' + translater(rgba);
    return !!colorOnly 
        ? ieColor 
        : 'progid:DXImageTransform.Microsoft.Gradient(startColorstr='+ ieColor +',endColorstr='+ ieColor +')';
};

/**
 * translater
 * 255,255,255,0.8 to ccffffff
 * @rgba {Strin} rgba color
 * @return {String} 16binary color
 */
exports.translater = function translater(rgba) {
    var colorArr = rgba.split(',');
    var opacity = parseInt(colorArr.pop() * 10) / 10 * 255;
    colorArr.unshift(opacity);
    return colorArr.map(function (num) {
        return parseInt(num).toString(16).split('.')[0];
    }).join('');
};