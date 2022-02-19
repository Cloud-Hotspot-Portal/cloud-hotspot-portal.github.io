#List Accounts

  
** Domain name：** 
- `China Mainland：https://api-cn.cloudshotspot.com`
- `Internation：https://api.cloudshotspot.com` 
 

**Endpoint:** 

- `[domain]/v2/account/list`



**Request URL：**
- ` https://api.cloudshotspot.com/v2/account/list `
  
**Request Method：**
- POST 

**Parameters:**

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |

**Returned Example**
 
Success

``` 
{
  "status": 200,
  "msg": "success",
  "data": [
    {
      "usercode": "d979c595452f99966c2fc01bebf107be",
      "nickname": "test",
      "email": "test@qa.it",
      "start_time": "1645113600",
      "end_time": "1647014400",
      "status": "1",
      "create_time": ""
    },
    {
      "usercode": "7a992ee8294d0377f99fc930884b918c",
      "nickname": "qa2",
      "email": "test2@qa.it",
      "start_time": "2022-02-13",
      "end_time": "2022-07-09",
      "status": "1",
      "create_time": ""
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

