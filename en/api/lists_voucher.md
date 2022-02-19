#List Vouchers

Domain name:

China Mainland：https://api-cn.cloudshotspot.com
Internation.：https://api.cloudshotspot.com

Endpoint:

[domain]/v2/voucher/list

**Request API URL：**
- ` https://api.cloudshotspot.com/v2/voucher/list `
  
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
  "status": 200,
  "msg": "success",
  "data": [
    {
      "id": "37",
      "voucher_code": "6493056143",
      "expire_date": "2022-02-20 13:29:07",
      "create_time": "2022-02-19 13:29:07"
    },
    {
      "id": "38",
      "voucher_code": "9417753362",
      "expire_date": "2022-02-20 15:18:48",
      "create_time": "2022-02-19 15:18:48"
    },
    {
      "id": "39",
      "voucher_code": "6664382185",
      "expire_date": "2022-02-20 15:18:50",
      "create_time": "2022-02-19 15:18:50"
    },
    {
      "id": "40",
      "voucher_code": "5492811894",
      "expire_date": "2022-02-20 15:18:51",
      "create_time": "2022-02-19 15:18:51"
    }
  ]
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
