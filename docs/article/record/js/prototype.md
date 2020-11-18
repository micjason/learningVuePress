### 什么是原型链
每个对象都可以有一个原型_proto_，这个原型还可以有它自己的原型，以此类推，形成一个原型链。查找特定属性的时候，我们先去这个对象里去找，如果没有的话就去它的原型对象里面去，如果还是没有的话再去向原型对象的原型对象里去寻找...... 这个操作被委托在整个原型链上，这个就是我们说的原型链了。

### 什么是原型继承
每一个构造函数都有prototype原型属性，通过构造函数创建出来的对象都继承自该原型属性。所以可以通过更改构造函数的原型属性来实现继承。

#### 怎么实现
1. 将一个构造函数的prototype属性直接指向一个构造函数的实力，然后再改变它自己的constuctor指向自己，
2. 在构造函数里面使用call方法，改变this的指向，指向父构造函数，缺点：
* 只能继承父对象的实例属性和方法，
* 不能继承父对象原型属性和方法
* 无法实现函数复用，每个子对象都有父对象实例的副本，性能欠优
3. 两种同时使用