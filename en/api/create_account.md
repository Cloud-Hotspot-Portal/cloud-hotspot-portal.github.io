#Create Account

Domain name:

China Mainland：https://api-cn.cloudshotspot.com
Internation.：https://api.cloudshotspot.com

Endpoint:

[domain]/v2/account/create

** Request API URL：** 
- ` https://api.cloudshotspot.com/v2/account/create `
  
**Request Method:**
- POST 

**Parameters:** 

|Parameter name |Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |
|nickname |  Yes  |    string   |    nickname   |
|email |  Yes  |    string   |    Email   |
|username |  Yes  |    string   |    Username   |
|password |  Yes  |    string   |    Password   |
|start_time |  Yes  |    string   |    Start date,Example:2019-06-20   |
|end_time |  Yes  |    string   |     End date,Example:2019-08-20   |


**Returned Example**

Success
``` 
{
  "status": 200,
  "msg": "success",
  "data": {
    "usercode": "b3ae46171a83276f397985677d4f37a3"
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
