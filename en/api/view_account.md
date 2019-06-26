#View Account

**Request URL：**
- ` https://api.cloudshotspot.com/v2/account/detail `
  
**Request Method：**
- POST 

**Parameters:** 


|Parameter name|Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    sitekey   |
|secretkey |  Yes  |    string   |    secretkey   |
|usercode |  Yes  |    string   |    usercode   |

**Returned Example**

Success
``` 
{
  "status": true,
  "msg": "success",
  "user": {
    "usercode": "18c3333c0cfa439794a3073d90892c1a",
    "truename": "test1",
    "email": "test2@gmail.com",
    "start_time": "1560009600",
    "end_time": "1591632000",
    "status": "1",
    "create_time": "2019-06-09 06:07:02"
  }
}

```

