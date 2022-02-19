
** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`


**接口：** 
- `[domain]/v2/account/detail `

 
**请求URL：** 
- ` https://api-cn.cloudshotspot.com/v2/voucher/detail `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   |
|id |  是  |    int   |    voucher_id   |
|expire_date |  是  |     string  |    过期日期  |


**返回示例**
Success
``` 
{
  "status": 200,
  "msg": "success",
  "data": {
    "id": "40",
    "voucher_code": "5492811894",
    "expire_date": "2022-12-19 15:18:51",
    "create_time": "2022-02-19 15:57:45"
  }
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