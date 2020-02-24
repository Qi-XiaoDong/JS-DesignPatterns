/* var textObj = function () {
  return {
    text1 : function () {
      console.log(1);
      return this;
    },
    text2 : function () {
      console.log(2);
      return this;
    },
    text3 : function () {
      console.log(3);
    }
  }
}

var obj = textObj()
obj.text1().text2().text3(); */


// var TextObj = function () {
//   this.text1 = function () {
//     console.log(1);
//     return this;
//   };
//   this.text2 = function () {
//     console.log(2);
//     return this;
//   };
//   this.text3 = function () {
//     console.log(3);
//     return this;
//   }
// }

// var TextObj = function () {};
// TextObj.prototype = {
//     text1 : function () {
//       console.log(1);
//       return this;
//     },
//     text2 : function () {
//       console.log(2);
//       return this;
//     },
//     text3 : function () {
//       console.log(3);
//     }
// }

var text = new TextObj();
text.text1().text2().text3();
