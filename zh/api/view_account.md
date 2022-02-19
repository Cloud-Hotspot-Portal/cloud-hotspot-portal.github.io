** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`


**接口：** 
- `[domain]/v2/account/detail `
 

**请求URL：** 
- ` https://api-cn.cloudshotspot.com/v2/account/detail `
  
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   |
|usercode |  是  |    string   |    用户编码   |


**返回示例**

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



