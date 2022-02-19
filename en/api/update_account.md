#Update Account

Domain name:

China Mainland：https://api-cn.cloudshotspot.com
Internation.：https://api.cloudshotspot.com

Endpoint:

[domain]/v2/account/update


**Request URL：**
- ` https://api.cloudshotspot.com/v2/account/update `
  
**Request Method：**
- POST 

**Parameters:** 

|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |
|usercode |  Yes  |    string   |    Usercode   |
|nickname |  Yes  |    string   |    nickname of the account  |
|email |  Yes  |    string   |    Email address   |
|username |  Yes  |    string   |    Username   |
|password |  Yes  |    string   |    password   |
|start_time |  Yes  |    string   |    Start date,Example:2019-06-20   |
|end_time |  Yes  |    string   |     End date,Example:2019-08-20   |


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

