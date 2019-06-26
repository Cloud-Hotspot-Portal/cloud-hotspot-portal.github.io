
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

``` 
{
  "status": true,
  "msg": "success",
  "user": {
    "id": "8",
    "voucher_code": "0111836338",
    "expire_date": "2019-07-09 14:27:08",
    "create_time": "2019-06-09 14:27:08"
  }
}

```

