
## 移动端适配方案
分析lib-flexible的源码后，发现它主要做了以下几件事：
```
window.onload = function () {
      var dpr = 0
      var scale = 0

      if (!dpr && !scale) {
        var isAndroid = window.navigator.appVersion.match(/android/gi)
        var isIPhone = window.navigator.appVersion.match(/iphone/gi)
        var devicePixelRatio = window.devicePixelRatio
        if (isIPhone) {
          // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
          if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
            dpr = 3
          } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
            dpr = 2
          } else {
            dpr = 1
          }
        } else {
          // 其他设备下，仍旧使用1倍的方案
          dpr = 1
        }
        scale = 1 / dpr
      }

      var metaEl = document.createElement('meta')
      metaEl.setAttribute('name', 'viewport')
      metaEl.setAttribute(
        'content',
        'initial-scale=' +
          scale +
          ',maximum-scale=' +
          scale +
          ',minimum-scale=' +
          scale +
          ',user-scalable=no'
      )
      if (document.documentElement.firstElementChild) {
        document.documentElement.firstElementChild.appendChild(metaEl)
      } else {
        var wrap = document.createElement('div')
        wrap.appendChild(metaEl)
        document.write(wrap.innerHTML)
      }

      var rem = document.documentElement.clientWidth / 10

      document.documentElement.style.fontSize = rem + 'px'
      document.body.style.fontSize = 12 * dpr + 'px'
    }
```
1. 动态设置dpr，只考虑了ios设备，dpr = 物理像素（分辨率） / 独立像素（通过window.screen.width获取，实际上就是屏幕的宽度），根据计算，安卓dpr比较混乱，则采取不缩放
2. 动态设置meta标签和html，body的字体大小

根据屏幕宽度/10设置比例，在所有屏幕下10rem都表示满屏，这样设置会导致继承的其他元素字体很大，所有又设置了body下的字体

### Q:为什么要进行缩放？
A: 如果设置initial-scale=1.0...也是可以做到同样的效果，但是这时候比如在iphone4下，1px的元素是采用2*2的物理像素来渲染，如果想做到1*1的物理像素去渲染，需要设置css下1px等于1物理像素，等于把画布放大了2倍，然后设置initial-scale=0.5使画布等于窗口大小

至于设置data-dpr，然后设置不同dpr下的字体大小，在源码里面没看到相关设置

这样设置完毕之后实际操作起来会比较麻烦，因为满屏是10rem，这设计稿上量出px单位后需要转换了rem。如果设计稿是750px宽，可以分成75份，这样每10px=1rem，换算比较方便

### 如果使用工具构建
1. 需要安装两个插件
lib-flexible和postcss-pxtorem
2. 在main.js里面引入lib-flexible，新建postcss.config.js（根目录）
```
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      //设计稿对应的rem尺寸，此时是iPhone6对应的75px
      rootValue: 75,
      //所有元素的px自动转化成rem
      propList: ['*'],
    },
  },
}
```

主要参考文档：
[https://segmentfault.com/a/1190000009017413?_ea=1801249](https://segmentfault.com/a/1190000009017413?_ea=1801249)
[https://www.sohu.com/a/318395528_100004247](https://www.sohu.com/a/318395528_100004247)
