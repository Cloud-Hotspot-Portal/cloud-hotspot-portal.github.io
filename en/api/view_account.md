#View Account

Domain name:

China Mainland：https://api-cn.cloudshotspot.com
Internation.：https://api.cloudshotspot.com

Endpoint:

[domain]/v2/account/detail


**Request API URL：**
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
  "status": 200,
  "msg": "success",
  "data": {
    "usercode": "33931cf477d9d86b142caaae27261683",
    "nickname": "test3",
    "email": "test3@qa.it",
    "start_time": "2022-01-02",
    "end_time": "2022-11-02",
    "status": "1",
    "create_time": ""
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
