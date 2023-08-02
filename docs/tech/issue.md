# 常见问题

## Github加速 
### 方法1

```shell

修改/etc/hosts,加入以下内容

140.82.113.4 github.com
199.232.69.194 github.global.ssl.fastly.net
140.82.114.9 codeload.github.com
185.199.111.154 github.githubassets.com

```
### 方法2 

安装fastgithub

<https://github.com/dotnetcore/FastGithub>

### 方法3

科学上网

## 访问Github问题
### Firefox报错

建立安全连接失败

连接到 github.com 时发生错误。对等端的证书有一个无效的签名。 

错误代码：SEC_ERROR_BAD_SIGNATURE 

```js
解决办法

1 地址栏输入：about:config 

2 输入首选项名称：security.enterprise_roots.enabled 

3 修改值为：true 

```

### git.exe报错

clone、pull或push等证书异常

fatal: unable to access 'https://github.com/xxx.git/' 

SSL certificate problem: unable to get local issuer certificate 

```js
解决办法

1 管理员身份运行：cmd 

2 在cmd输入：git config --global http.sslverify false 
 
```