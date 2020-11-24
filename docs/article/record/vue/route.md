
## vue路由

1. 定义一个router文件夹，新建`index.js`，引入vue和vue-router，然后引入各个组件，`Vue.use(Router)`,编写路由规则，
`export default new Router(routes:[规则])`
在`main.js`里面引入`index.js`,`Vue.use(router)`,挂载在到实例上

2. 动态路由匹配  
```
{
      path: '/pageb/:id',
      name: 'pageB',
      component: pageB
}
```
```
<div @click="jump('/pageB/bar')">导向B-bar</div>
<div @click="jump('/pageB/foo')">导向B-foo</div>
```
此时bar跳到foo不会触发页面的生命周期钩子，复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) `$route` 对象：
```
$route(to, from) {
    console.log(this.$route.params, to, from)
}
```
常规参数只会匹配被 / 分隔的 URL 片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)：

3. 嵌套路由
```
children: [
        {
          path: '/pageb2',
          name: 'pageB2',
          component: pageB2
        },
        {
          path: '/pageb3',
          name: 'pageB3',
          component: pageB3
        }
      ]
```
然后就可以在子组件里面使用router-view了
```
<div @click="jump('/pageb2')">page2</div>
<div @click="jump('/pageb3')">page3</div>
```
```
jump(src) {
      this.$router.push({
        path: src
      })
}
```
4. 编程式的导航`this.$router.push`
* 字符串  字符串路径
`router.push('home')`
* 对象
`router.push({ path: 'home' })`
* 命名的路由
`router.push({ name: 'user', params: { userId: '123' }})`
* 带查询参数，变成 `/register?plan=private`
`router.push({ path: 'register', query: { plan: 'private' }})`

注意：如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：
```
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
```
// 这里的 params 不生效
`router.push({ path: '/user', params: { userId }}) // -> /user`