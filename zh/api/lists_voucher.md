#获取列表

** 域名：** 
- `中国：https://api-cn.cloudshotspot.com`
- `国际：https://api.cloudshotspot.com`


**接口：** 
- `[domain]/v2/voucher/getlist `


**请求URL：** 
- ` https://api-cn.cloudshotspot.com/v2/voucher/getlist `
  
 
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|sitekey |  是  |    string   |    站点Key   |
|secretkey |  是  |    string   |    站点Secret   |


**返回示例**

``` 
{
  "status": 200,
  "msg": "success",
  "data": [
    {
      "id": "37",
      "voucher_code": "6493056143",
      "expire_date": "2022-02-20 13:29:07",
      "create_time": "2022-02-19 13:29:07"
    },
    {
      "id": "38",
      "voucher_code": "9417753362",
      "expire_date": "2022-02-20 15:18:48",
      "create_time": "2022-02-19 15:18:48"
    },
    {
      "id": "39",
      "voucher_code": "6664382185",
      "expire_date": "2022-02-20 15:18:50",
      "create_time": "2022-02-19 15:18:50"
    },
    {
      "id": "40",
      "voucher_code": "5492811894",
      "expire_date": "2022-02-20 15:18:51",
      "create_time": "2022-02-19 15:18:51"
    }
  ]
}

```



