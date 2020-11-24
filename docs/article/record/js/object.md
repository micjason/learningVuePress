
[[toc]]

### 题目如下：
```
let a = {}
let b = { key:'b' }
let c = { key:'c' }
a[b]=123
a[c]=456
console.log(a[b])
```

####  前置知识：js对象属性通过点(.)和方括号([])的不同之处:
1. 点操作符: 静态的。右侧必须是一个以属性名称命名的简单标识符。属性名用一个标识符来表示。标识符必须直接出现再js程序中。
2. 中括号操作符: 动态的。**方括号里必须是一个计算结果为字符串的表达式**，属性名通过字符串表示。字符串是js的数据类型。
3. `[]`可以用变量作为属性名,`var a = 'name'; Obj[a]`
4. `[]`中括号可以用数字作为属性名,`Obj[1]`
5. `[]`可以动态访问属性名，可以在程序运行时创建和修改属性,
    ```
    var Obj = {};
    var arr = ['上海','广州','无锡'];
    for(var i=0; i<arr.length; i++){
        Obj['address'+i]=arr[i]
    }
    console.log(Obj)
    ```
6. 如果属性名中包含会导致语法错误的字符，或者属性名是关键字或者保留字，也可以使用[]表示法。`[hello world]`
   
#### 所以在执行`a[b]=123`和`a[c]=456`的时候，由于b和c都是对象，要先转换成字符串，
```
let b = { key:'b' }
b.toString() = "[object, Object]"
let c = { key:'c' }
c.toString() = "[object, Object]"
```
所以`console.log(a['[object Object]']) // 456`