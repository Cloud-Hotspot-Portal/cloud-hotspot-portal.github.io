#创建账号

**请求URL：** 
- ` https://api.cloudshotspot.com/v2/account/create `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    无   |
|secretkey |  是  |    string   |    无   |
|truename |  是  |    string   |    无   |
|email |  是  |    string   |    无   |
|username |  是  |    string   |    无   |
|password |  是  |    int   |    无   |
|start_time |  是  |    string   |    无   |
|end_time |  是  |    string   |    无   |


**返回示例**

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
