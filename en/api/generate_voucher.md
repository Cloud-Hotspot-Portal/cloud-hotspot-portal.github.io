#Generate Voucher
 
  
  
** Domain name：** 
- `China Mainland：https://api-cn.cloudshotspot.com`
- `Internation：https://api.cloudshotspot.com` 
 

**Endpoint:** 

- `[domain]/v2/voucher/generate`



**Request API URL：**
- ` https://api.cloudshotspot.com/v2/voucher/generate `
  
**Request Method：**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |
|day |  Yes  |    int   |    How many days will be expired. example: 1  |

**Returned Example**


``` 
{
  "status": 200,
  "msg": "success",
  "data": {
    "voucher_code": "5521499306",
    "expire_date": "2022-02-19 16:06:45"
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
