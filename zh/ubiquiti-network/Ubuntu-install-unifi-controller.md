#Ubuntu 18.04.6 LTS 安装Unifi Controller

##1.1 用SSH工具以root管理员身份登录到服务器

![](../../image/ubuntu-18-04-ssl-tool.png)

##1.2 更新atp软件源

```shell
apt-get upadte
```
![](../../image/ubuntu-apt-get-update.png)

##2.1 安装Java JDK8

```shell
apt-get install openjdk-8-jdk
```

![](../../image/ubuntu-apt-get-install-java-jdk.png)

![](../../image/ubuntu-apt-get-install-java-jdk-2.png)


##2.2 检测Java安装版本信息
```shell 
 java -version

```
![](../../image/ubuntu-java-version.png)



##3.1下载unifi controller 6.5.55

到 https://www.ui.com/download/unifi/ 下载最新Linux版UniFi控制器
 
```shell 
 wget https://dl.ui.com/unifi/6.5.55/unifi_sysvinit_all.deb --no-check-certificate

```


![](../../image/ubuntu-install-unifi-controller.png)
##3.2 安装Unifi Controller软件包 
```shell

 dpkg -i unifi_sysvinit_all.deb

```
 由于Ubuntu系统是第一次安装Unifi controller软件服务,开始安装可能会缺少部分依赖，导致安装失败如下图;
![](../../image/ubuntu-dpkg-install-unifi-controller.png)
```shell
dpkg: error processing package unifi (--install):
dependency problems - leaving unconfigured
Processing triggers for ureadahead (0.100.0-21) ...
Processing triggers for systemd (237-3ubuntu10.52) ...
Errors were encountered while processing:
unifi
```
##3.3  安装Unifi Controller系统依赖软件安装包
解决以上问题需执行以下命令，将依赖补充完整，再执行一次安装

```shell
 apt-get install -f

```
![](../../image/ubuntu-dpkg-install-unifi-controller-depends-software.png)



##3.4 启动 Unifi Controller服务
 ```shell 
systemctl enable unifi.service #添加到开机启动 
systemctl start unifi.service 
systemctl status unifi 
```


![](../../image/ubuntu-start-unifi-controller-software.png)

  

##4.1 云服务器防火墙规则
如果云服务器是阿里云或腾讯云提供的,请在管理平台添加防火墙规则，把3478,8080,8443,8843,8880添加到规则内放行端口即可。



##4.2 访问Unifi Controller服务

在浏览器打开https://IP:8443
 

![](../../image/access-unifi-controller-on-centos-1.png)
![](../../image/access-unifi-controller-on-centos-2.png)
![](../../image/access-unifi-controller-on-centos-3.png)
![](../../image/access-unifi-controller-on-centos-4.png)