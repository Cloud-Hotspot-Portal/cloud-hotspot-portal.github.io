#Create Account

**Request URL：** 
- ` https://api.cloudshotspot.com/v2/account/create `
  
**Request Method:**
- POST 

**Parameters:** 

|Parameter name |Require|Type|Note|
|:----    |:---|:----- |-----   |
|sitekey |  Yes  |    string   |    Sitekey   |
|secretkey |  Yes  |    string   |    Secretkey   |
|truename |  Yes  |    string   |    Truename   |
|email |  Yes  |    string   |    Email   |
|username |  Yes  |    string   |    Username   |
|password |  Yes  |    string   |    Password   |
|start_time |  Yes  |    string   |    Start date,Example:2019-06-20   |
|end_time |  Yes  |    string   |     End date,Example:2019-08-20   |


**Returned Example**

Success
``` 
{
  "status": true,
  "data": [
    {
      "usercode": "16996b4a6e09318c9317b95cff805008",
      "truename": "test2",
      "email": "test2@gmail.com",
      "start_time": "1560009600",
      "end_time": "1591632000",
      "status": "1",
      "create_time": "2019-06-09 05:54:32"
    }
  ]
}

```

Error

``` 
{
  "status": false,
  "msg": "invalid sitekey or secretkey"
}

```
