
**请求URL：** 
- ` https://api.cloudshotspot.com/v2/account/detail `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    无   |
|secretkey |  是  |    string   |    无   |
|usercode |  是  |    string   |    无   |


**返回示例**
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

