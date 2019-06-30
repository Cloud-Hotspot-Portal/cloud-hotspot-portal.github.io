#对接Mikrotik RouterOS -  Hotspot

说明：当我们想用ROS hotspot部署热点实现手机SMS短信,微信连Wi-Fi,会员账号,上网凭证码(Voucher)上网验证服务时.可以采用云热点(Cloud Hotspot)提供的相关功能来快速低成本的生成Hotspot模板接入云端服务。

登录控制台
https://console.cloudshotspot.com

###1.创建站点：

成功登录后,点击创建站点。

![](../../image/Cloud-hotspot-create-site-en.png)

###2.站点信息:

品牌类型:选择Mikrotik

输入相应的信息
IP地址：输入Ros Hotspot服务接口的IP地址

跳转URL:输入认证完成后的跳转的URL网址

然后选择下一步.

![](../../image/Cloud-hotspot-site-information-en.png)

###3.账号信息

说明：这里的用户与密码在配置hotspot时要一致

![](../../image/Cloud-hotspot-user-information-en.png)

###4.设备信息

物理设备:就是MAC地址,就是服务Hotspot的接口

区域位置:服务器所在的地理位置,选择一个最接近的

![](../../image/Cloud-hotspot-device-information-en.png)

###5.选择套餐

在这里选择免费

![](../../image/Cloud-hotspot-package-plan-en.png)

###6.配置信息

在这一步骤,说明已经创建站点完成. 

下载站点生成的hotspot模板ZIP文件,上传至RouterOS中

复制配置信息，粘贴到路由器中

![](../../image/Cloud-hotspot-success-en.png)

