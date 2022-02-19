#获取账号列表


** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`

**接口：** 
- `[domain]/v2/account/getlist `

 
**请求URL：** 
- `https://api-cn.cloudshotspot.com/v2/account/list `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   |


**返回示例**
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