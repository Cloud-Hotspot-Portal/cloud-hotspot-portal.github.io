#Update Account
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
|truename |  Yes  |    string   |    Truename of the account  |
|email |  Yes  |    string   |    Email address   |
|username |  Yes  |    string   |    Username   |
|password |  Yes  |    string   |    password   |
|start_time |  Yes  |    string   |    Start date,Example:2019-06-20   |
|end_time |  Yes  |    string   |     End date,Example:2019-08-20   |


**Returned Example**

``` 
{
  "status": true,
  "msg": "success"
}

```

