import{_ as s,c as a,o as n,a4 as p,a5 as e,a6 as i,a7 as l}from"./chunks/framework.CGbWEyNr.js";const f=JSON.parse('{"title":"github 自动化部署 前端","description":"","frontmatter":{},"headers":[],"relativePath":"github/index.md","filePath":"github/index.md"}'),t={name:"github/index.md"},o=p('<h1 id="github-自动化部署-前端" tabindex="-1">github 自动化部署 前端 <a class="header-anchor" href="#github-自动化部署-前端" aria-label="Permalink to &quot;github 自动化部署 前端&quot;">​</a></h1><blockquote><p>总共2个步骤</p></blockquote><h2 id="_1-github配置" tabindex="-1">1.github配置 <a class="header-anchor" href="#_1-github配置" aria-label="Permalink to &quot;1.github配置&quot;">​</a></h2><ul><li>创建一个新的分支，用来放置打包后的代码，我创建的新分支名称为 “view”</li><li>settings-&gt;actions-&gt;general-&gt;Workflow permissions 修改工作流权限 <img src="'+e+'" alt=""></li><li>settings-&gt;Pages-&gt;Build and deployment 选择‘view’分支，然后选择root <img src="'+i+`" alt=""></li></ul><p>配置结束</p><h2 id="_2-项目添加配置" tabindex="-1">2.项目添加配置 <a class="header-anchor" href="#_2-项目添加配置" aria-label="Permalink to &quot;2.项目添加配置&quot;">​</a></h2><p>项目根目录创建文件 &#39;.github\\workflows\\main.yml&#39;，文件内容为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>name: gogogo</span></span>
<span class="line"><span>on:</span></span>
<span class="line"><span>  #监听push操作</span></span>
<span class="line"><span>  push:</span></span>
<span class="line"><span>    branches:</span></span>
<span class="line"><span>      - main # 这里只配置了main分支，所以只有推送main分支才会触发以下任务</span></span>
<span class="line"><span>jobs:</span></span>
<span class="line"><span>  # 任务ID</span></span>
<span class="line"><span>  build-and-deploy:</span></span>
<span class="line"><span>    # 运行环境</span></span>
<span class="line"><span>    runs-on: ubuntu-latest</span></span>
<span class="line"><span>    # 步骤</span></span>
<span class="line"><span>    steps:</span></span>
<span class="line"><span>      # 官方action，将代码拉取到虚拟机</span></span>
<span class="line"><span>      - name: Checkout  ️ </span></span>
<span class="line"><span>        uses: actions/checkout@v3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: Install and Build   # 安装依赖、打包，如果提前已打包好无需这一步</span></span>
<span class="line"><span>        run: |</span></span>
<span class="line"><span>          npm install</span></span>
<span class="line"><span>          npm run build</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      - name: Deploy   # 部署</span></span>
<span class="line"><span>        uses: JamesIves/github-pages-deploy-action@v4.3.3</span></span>
<span class="line"><span>        with:</span></span>
<span class="line"><span>          branch: view # 部署后提交到那个分支</span></span>
<span class="line"><span>          folder: dist # 这里填打包好的目录名称</span></span></code></pre></div><p>注意：需要打包后的文件夹在根目录下，即dist文件在根目录下 <img src="`+l+'" alt=""></p><p>参考地址：<a href="https://github.com/Old-Old-Six/studynotes" target="_blank" rel="noreferrer">https://github.com/Old-Old-Six/studynotes</a></p>',10),c=[o];function r(h,u,d,g,_,m){return n(),a("div",null,c)}const k=s(t,[["render",r]]);export{f as __pageData,k as default};
