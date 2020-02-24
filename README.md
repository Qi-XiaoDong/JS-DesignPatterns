## index1

### 调用textObj就可以得到一个对象，可以使用对象中的所有方法，并且每个方法的返回值为this，可以实现链式调用

### 缺点： 产生的对象和textObj没有必要的联系，所以一般通过构造函数的形式来使用

## index2

### 模仿protojs直接为Function添加一些方法，这样所有函数都可以使用这些方法，
### 但是直接操作了Function 污染了原生构造器， 其他人使用的函数一定对添加这些方法

### 只有给函数添加方法的能力，构造出的对象不可以使用添加的方法

```js
  Function.prototype.addfun = function (name, callback) {
    this[name] = callback;
    return this; // 链式添加
  }
```
### 添加的方法在原型上所有对象都可以继承到

```js
Function.prototype.addfun = function (name, callback) {
  this.prototype[name] = callback;
  return this; // 链式调用
}
```