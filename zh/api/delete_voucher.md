
** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`


**接口：** 
- `[domain]/v2/account/generate `


**请求URL：** 
- ` https://api-cn.cloudshotspot.com/v2/voucher/delete `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   | 
|id |  是  |    int   |    验证码ID   |


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