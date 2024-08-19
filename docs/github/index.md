# github 自动化部署 前端

>总共2个步骤

## 1.github配置
* 创建一个新的分支，用来放置打包后的代码，我创建的新分支名称为 “view”
* settings->actions->general->Workflow permissions 修改工作流权限
![](/github/action_setting.png)
* settings->Pages->Build and deployment 选择‘view’分支，然后选择root
![](/github/page_select.png)

配置结束

## 2.项目添加配置
项目根目录创建文件 '.github\workflows\main.yml'，文件内容为：
```
name: gogogo
on:
  #监听push操作
  push:
    branches:
      - main # 这里只配置了main分支，所以只有推送main分支才会触发以下任务
jobs:
  # 任务ID
  build-and-deploy:
    # 运行环境
    runs-on: ubuntu-latest
    # 步骤
    steps:
      # 官方action，将代码拉取到虚拟机
      - name: Checkout  ️ 
        uses: actions/checkout@v3

      - name: Install and Build   # 安装依赖、打包，如果提前已打包好无需这一步
        run: |
          npm install
          npm run build

      - name: Deploy   # 部署
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          branch: view # 部署后提交到那个分支
          folder: dist # 这里填打包好的目录名称

```

参考地址：https://github.com/Old-Old-Six/studynotes