#Update Voucher

Domain name:

China Mainland：https://api-cn.cloudshotspot.com
Internation.：https://api.cloudshotspot.com

Endpoint:

[domain]/v2/voucher/update



**Request URL：**
- ` https://api.cloudshotspot.com/v2/voucher/update `
  
**Request API Method：**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    sitekey   |
|secretkey |  Yes  |    string   |    secretkey   |
|id |  Yes  |    string   |    id   |
|expire_date |  Yes  |    string   |    Expire Date time,Example:2019-09-20  |

**Returned Example**


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

