/**声明父类 */
function Father (id) {
  /**对象公有引用类型属性 */
  this.arr = [1,2,3,4,5];
  /**对象公有值类型属性 */
  this.id = id;
}
Father.prototype.showArr = function () {
  console.log(this.arr);
}

/**声明子类 */
function Son (id,name) {
  /**继承父类对象属性和方法 */
  Father.call(this,id);
  this.name = name;
}
/**子类实例化 */
var son1 = new Son(11, 'son1');
var son2 = new Son(10, 'son2');
