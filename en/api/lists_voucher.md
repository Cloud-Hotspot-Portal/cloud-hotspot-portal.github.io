#List Vouchers
**Request URL：**
- ` https://api.cloudshotspot.com/v2/voucher/getlist `
  
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
  "data": [
    {
      "id": "6",
      "voucher_code": "905097311",
      "expire_date": "2019-07-09 14:25:32",
      "create_time": "2019-06-09 14:25:32"
    },
    {
      "id": "8",
      "voucher_code": "0111836338",
      "expire_date": "2019-07-09 14:27:08",
      "create_time": "2019-06-09 14:27:08"
    }
  ]
}

```

