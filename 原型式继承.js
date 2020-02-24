function inherit (O){
  // 过渡对象
  function F (){}
  F.prototype = O;
  return new F();
}

// 圣杯模式
var myInherit = (function () {
  var F = function () {};
  return function (Son, Father) {
    F.prototype = Father.prototype; // 继承原型
    Son.prototype = new F();
  }
})()

