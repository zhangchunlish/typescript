"use strict";
var REN;
(function (REN) {
    REN[REN["male"] = 0] = "male";
    REN[REN["female"] = 1] = "female";
    REN[REN["ladyboy"] = 2] = "ladyboy";
})(REN || (REN = {}));
console.log(REN.ladyboy); //返回了2，这是索引index，跟数组很像。
(function (REN) {
    REN["nan"] = "\u7537";
    REN["nv"] = "\u5973";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao); //返回了妖 这个字
