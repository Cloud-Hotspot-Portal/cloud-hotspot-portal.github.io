
**请求URL：** 
- ` https://api.cloudshotspot.com/v2/voucher/generate `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    无   |
|secretkey |  是  |    string   |    无   |


**返回示例**

``` 
{
  "status": true,
  "msg": "success",
  "data": {
    "voucher_code": "0111836338",
    "expire_date": "2019-07-09 14:27:08"
  }
}

```

