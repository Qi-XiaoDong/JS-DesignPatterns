/**父类构造函数 */
function Father (name){
  this.fatherValue = true;
  this.arr = [1,2,3,4,5];
  this.name = name;
}
Father.prototype.getFathervalue = function () {
  console.log(this.fatherValue);
}
/**子类构造函数 */
function Son () {
  this.sonValue = false;
}

/**继承父类  直接继承父类实例对象*/

Son.prototype = new Father(123);

Son.prototype.getSonValue = function () {
  console.log(this.sonValue)
}


var son1 = new Son();
var son2 = new Son();



