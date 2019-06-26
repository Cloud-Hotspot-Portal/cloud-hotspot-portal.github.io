#List Accounts
**Request URL：**
- ` https://api.cloudshotspot.com/v2/account/getlist `
  
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
    },
    {
      "usercode": "18c3333c0cfa439794a3073d90892c1a",
      "truename": "test1",
      "email": "test2@gmail.com",
      "start_time": "1560009600",
      "end_time": "1591632000",
      "status": "1",
      "create_time": "2019-06-09 06:07:02"
    }
  ]
}

```

