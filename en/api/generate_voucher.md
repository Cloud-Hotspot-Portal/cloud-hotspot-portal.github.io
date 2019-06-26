#Generate Voucher
**Request URL：**
- ` https://api.cloudshotspot.com/v2/voucher/generate `
  
**Request Method：**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |


**Returned Example**

``` 
{
  "status": true,
  "msg": "success",
  "data": {
    "voucher_code": "0111836338",
    "expire_date": "2019-07-09 14:27:08"
  }
}

```

