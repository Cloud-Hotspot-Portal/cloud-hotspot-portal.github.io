#View Voucher
 
** Domain name：** 
- `China Mainland：https://api-cn.cloudshotspot.com`
- `Internation：https://api.cloudshotspot.com` 
 

**Endpoint:** 

- `[domain]/v2/voucher/detail`


**Request URL：** 
- ` https://api.cloudshotspot.com/v2/voucher/detail `
#View Voucher
**Request Method:**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    sitekey   |
|secretkey |  Yes  |    string   |    secretkey   |
|id |  Yes  |    int   |    id   |


**Returned Example**

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
