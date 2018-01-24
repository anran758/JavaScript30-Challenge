## CSS variables

这一集开始变得有意思了. 首先学习css的`var`变量, CSS中原生的变量定义语法是：`--*`，变量使用语法是：`var(--*)`，其中`*`表示我们的变量名称. 

其次使用了H5的`data-`属性, 我们可以通过`HTMLElement.dataset`来对`data-*`上的数据进行读写. 如下,
``` html
  <!-- HTML -->
  <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px" data-color="red">
```

``` JavaScript
  // JavaScript
  console.log($('#blur').dataset)    // {sizing: 'px', color: 'red'}
  console.log($('#blur').dataset.sizing)    // px
```

Demo效果的实现使用了一个巧妙的方法. 作者将变量设置到了`html`的`style`上, 覆盖了原先设置`:root`上的变量, 因此达到了我们想要的效果.