#Update Voucher
**Request URL：**
- ` https://api.cloudshotspot.com/v2/voucher/update `
  
**Request Method：**
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
  "status": true,
  "msg": "success"
}

```

