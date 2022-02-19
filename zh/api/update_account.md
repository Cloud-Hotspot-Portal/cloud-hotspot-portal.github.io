
** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`


**接口：** 
- `[domain]/v2/account/update `
 

**请求URL：** 
- ` https://api-cn.cloudshotspot.com/v2/account/update `
  

**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   |
|usercode |  是  |    string   |    用户编码   |
|nickname |  是  |    String   |    用户昵称   |
|email |  是  |    string   |    用户邮箱   |
|username |  是  |    String   |    用户账号   |
|password |  是  |    String   |    用户密码   |
|start_time |  是  |    string   |    生效时间 //2021-01-01  |
|end_time |  是  |    string   |    结束时间  //2023-12-31 |
 



**返回示例**

``` 
{
  "status": 200,
  "msg": "success",
  "data": []
}

```


 Error
```
 {
  "status": 400,
  "msg": "sitekey or secretkey can not be empty",
  "data": []
}
```
