# vuejs源代码启动 调试 

## 1.项目启动

```
下载pnpm
npm install pnpm -g

安装依赖
pnpm install

启动
npm run dev
```

启动后会生成packages\vue\dist\vue.global.js，这个文件为实时更新的源码打包文件，我们调试源码需要引入这个文件

![](/github/vue-dubug-mulu.png)

## 2.创建study/myVue.vue文件，添加代码，用浏览器直接打开
```
<script src="../../dist/vue.global.js"></script>

<div id="counter">Counter: {{ counter }} <button @click="changeCount">+</button></div>

<script>
  const Counter = {
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      changeCount() {
        this.counter += 1
      },
    },
  }
  Vue.createApp(Counter).mount('#counter')
</script>

```



>可以开始你的源码探索之路了。水滴石穿，继续努力偶少年！！！