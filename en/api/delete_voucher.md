# Delete Voucher
 
  
  
** Domain name：** 
- `China Mainland：https://api-cn.cloudshotspot.com`
- `Internation：https://api.cloudshotspot.com` 
 

**Endpoint:** 

- `[domain]/v2/voucher/delete `


**Request API URL：**
- ` https://api.cloudshotspot.com/v2/voucher/delete `
  
**Request Method：**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |
|id |  Yes  |    string   |    Id   |



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
