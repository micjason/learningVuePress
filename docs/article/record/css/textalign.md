
### 关于text-align:justify的使用心得
有时候我们会碰到下面这样的对齐方式
![demo.jpg](https://upload-images.jianshu.io/upload_images/12518470-061e91035d4ffdb4.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
一般限定宽度后设置text-align:justify，发现无效，这是因为text-align:justify；只对最后一行之前的行生效，当文本只有一行的时候，既是第一行，也是最后一行；所以只有一行的时候需要特殊处理。

这里有两种方式：
1. 设置text-align-last:justify；不过text-align-last不是所有浏览器支持。例如safari。
2. 加一个伪类
```
XXX:after {
        content: "";
        width: 100%;
        height: 0;
        margin: 0;
        display: inline-block;
        overflow: hidden;
      }
```
再来说下，多行的时候，既然文字从左到右已经排满了，那设置text-align为left　center　right　justify有什么区别呢，看看这张图片你就懂了,上面是设置了justify，下面是没有样式的情况。
![demo2.jpg](https://upload-images.jianshu.io/upload_images/12518470-45277eb0c7828e56.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
