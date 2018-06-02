# DomainRush
A node.js Domain Rush Application  
一个基于node.js的 reseller club 平台域名抢注程序

#使用前请确保安装node.js

# 安装
方法1，git clone
```
git clone git@github.com:TianHero/DomainRush.git
```
方法2 npm
```
npm install domainsrush
```
方法3 直接下载zip

# 使用说明
1,config.js 是配置文件
```js
  this.auth_userid = "";//代理账号id
  this.api_key = "";//api_key

  this.customer_id = "";//客户id

  this.common_contact_id = "";//通用联系人id
  this.eu_contact_id = "";//eu联系人id
```

2,domains.js 是放域名相关的文件
```js
    domains: [
      "aaa.pw",
      "aaa.eu",
      "aaa.org",
      "bbb.org",
      "aaa.in",
      "ccc.in"
    ],
    ns:[
      'merlin.ns.cloudflare.com',
      'aron.ns.cloudflare.com'
    ]
```
3,在当前目录下打开cmd 或者powershell，运行request.js  <font color="red">一定确保路径正确哦</font>
```
node request.js
```

4,成功的域名会显示在./success/success.txt中文件名做了处理，6.1日成功的域名会显示在./success/success6-1.txt中，如果觉得文件太多，可以删除，但是要保留./success/ 这个目录  

5,之后的工作就是把域名和相应的ns放进domains.js文件中，在当前目录下 node request.js