import{_ as s,c as a,o as n,a4 as p,a8 as e}from"./chunks/framework.Dxea9bgL.js";const _=JSON.parse('{"title":"vuejs源代码启动 调试","description":"","frontmatter":{},"headers":[],"relativePath":"github/vue-debug.md","filePath":"github/vue-debug.md"}'),t={name:"github/vue-debug.md"},l=p(`<h1 id="vuejs源代码启动-调试" tabindex="-1">vuejs源代码启动 调试 <a class="header-anchor" href="#vuejs源代码启动-调试" aria-label="Permalink to &quot;vuejs源代码启动 调试&quot;">​</a></h1><h2 id="_1-项目启动" tabindex="-1">1.项目启动 <a class="header-anchor" href="#_1-项目启动" aria-label="Permalink to &quot;1.项目启动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>下载pnpm</span></span>
<span class="line"><span>npm install pnpm -g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装依赖</span></span>
<span class="line"><span>pnpm install</span></span>
<span class="line"><span></span></span>
<span class="line"><span>启动</span></span>
<span class="line"><span>npm run dev</span></span></code></pre></div><p>启动后会生成packages\\vue\\dist\\vue.global.js，这个文件为实时更新的源码打包文件，我们调试源码需要引入这个文件</p><p><img src="`+e+`" alt=""></p><h2 id="_2-创建study-myvue-vue文件-添加代码-用浏览器直接打开" tabindex="-1">2.创建study/myVue.vue文件，添加代码，用浏览器直接打开 <a class="header-anchor" href="#_2-创建study-myvue-vue文件-添加代码-用浏览器直接打开" aria-label="Permalink to &quot;2.创建study/myVue.vue文件，添加代码，用浏览器直接打开&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script src=&quot;../../dist/vue.global.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div id=&quot;counter&quot;&gt;Counter: {{ counter }} &lt;button @click=&quot;changeCount&quot;&gt;+&lt;/button&gt;&lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  const Counter = {</span></span>
<span class="line"><span>    data() {</span></span>
<span class="line"><span>      return {</span></span>
<span class="line"><span>        counter: 0,</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    methods: {</span></span>
<span class="line"><span>      changeCount() {</span></span>
<span class="line"><span>        this.counter += 1</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Vue.createApp(Counter).mount(&#39;#counter&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><blockquote><p>可以开始你的源码探索之路了。水滴石穿，继续努力偶少年！！！</p></blockquote>`,8),i=[l];function c(o,u,r,d,h,g){return n(),a("div",null,i)}const m=s(t,[["render",c]]);export{_ as __pageData,m as default};
