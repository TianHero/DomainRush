# DomainRush
A node.js Domain Rush Application  
一个基于node.js的 reseller club 平台域名抢注程序

#使用前请确保安装node.js 传送门：http://nodejs.cn/download/   windows系统选择msi

# 安装
方法1，git clone
```
git clone git@github.com:TianHero/DomainRush.git
```
方法2 npm
```
npm install domainsrush
```
方法3 直接下载zip <font color="red">直观简单</font> https://github.com/TianHero/DomainRush/archive/master.zip

# 使用说明
## 1,config.js 是配置文件
```js
  this.auth_userid = "";//代理账号id
  this.api_key = "";//api_key

  this.customer_id = "";//客户id

  this.common_contact_id = "";//通用联系人id
  this.eu_contact_id = "";//eu联系人id
```

## 2,domains.js 是放域名相关的文件
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
## 3,在当前目录下打开cmd 或者powershell，运行request.js  <font color="red">一定确保路径正确哦</font>  
第一次如果没安装依赖的话 需要执行 npm install 再继续下面的操作
```
node request.js
```

## 4,成功的域名会显示在./success/success.txt中文件名做了处理，6.1日成功的域名会显示在./success/success6-1.txt中，如果觉得文件太多，可以删除，但是要保留./success/ 这个目录  
再次强调，通过本程序抢注成功的会显示在./success/ 中 ，如果也在DomainRush.exe加上了，那个程序也会显示成功，因为那个程序没有处理返回结果，就是说如果已经成功了，他并不知道，需要再次发送请求才知道域名已经到自己的账号下了，所以那个程序显示的成功，并不一定是他抢成功的，但是本程序在success/下面出现的域名，肯定是本程序抢注成功的。望周知！！！
```json
//这是已经到自己账号下返回的结果
{ status: 'error',
  error: 'The domain xxx.com already exists in our database. This may occur if there is a pending Order for xxx.com in our database under your account or any other account. You may search for this domain within your control panel. If you do not find this domain within your profile please contact our Support Department.' }
```
## 5,之后的工作就是把域名和相应的ns放进domains.js文件中，在当前目录下 node request.js
## 6，配置文件只提供两种联系人id，通用的和eu，发送请求的时候可以根据域名不同，自动选择对应的联系人id。（通用的可以用于com，org，in，pw,top,online等等）
## 7，觉得可以的话页面右上角给个星星
