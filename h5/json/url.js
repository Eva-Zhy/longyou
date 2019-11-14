1.登陆：
url:'login'
data:'{
	openid:'',
	nickname:'', // 微信名称
	headimg:''	// 微信头像
}'
return:'{
	code:0
}'


2.获取装扮列表：
url:'getGoods'
data:'{
	openid:''
}'
return:'{
	{
  "code": 0,
  "data": {
	"room_bg": 0 // 背景id 0 无背景 1 都市高层 2 日式庭院 3 滨海别墅 4  欧式花园
    "goods_arr": [
      [
        {
          "id": 11,
          "name": "迷你茶几",
          "des": "一个茶几 一本书，我能睡它一下午",
          "width": 166,
          "height": 139,
          "gridx": 1, // gridx gridy 表示几列几行
          "gridy": 2,
          "belong": 1, // 是否绑定  0 未绑定  1绑定
          "type": 0,  // 是否在地上 0 在地上 1不在
          "src": "1/56.png",  // 图片1  默认左方向图 
          "src2": "1/56_1.png", // 图片1  默认右方向图 
          "sort": 1 // 分类id
        },
        {
          "id": 20,
          "name": "日式柔软靠椅",
          "des": "陷下去的那一刻，心都化了",
          "width": 99,
          "height": 100,
          "belong": 1,
          "type": 0,
          "gridx": 1,
          "gridy": 1,
          "src": "1/41.png",
          "src2": "1/41_1.png",
          "sort": 1
        },
        {
          "id": 15,
          "name": "黄色电视柜",
          "des": "一直和电视争宠，但从未赢过",
          "width": 219,
          "height": 189,
          "gridx": 1,
          "gridy": 3,
          "belong": 1,
          "type": 0,
          "src": "1/17.png",
          "src2": "1/17_1.png",
          "sort": 1
        }
      ],
      [
        {
          "id": 38,
          "name": "球形落地灯",
          "des": "谁还不是个掌上明珠呢",
          "width": 62,
          "height": 241,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "2/29.png",
          "src2": "2/29_1.png",
          "sort": 2
        },
        {
          "id": 102,
          "name": "球形落地灯",
          "des": "谁还不是个掌上明珠呢",
          "width": 177,
          "height": 233,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "2/33.png",
          "src2": "2/33_1.png",
          "sort": 2
        },
        {
          "id": 41,
          "name": "白色微波炉",
          "des": "叮一下，开启热气腾腾的生活",
          "width": 105,
          "height": 99,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "2/45.png",
          "src2": "2/45_1.png",
          "sort": 2
        }
      ],
      [
        {
          "id": 90,
          "name": "马桶",
          "des": "思考人生专座",
          "width": 98,
          "height": 160,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "3/12.png",
          "src2": "3/12_1.png",
          "sort": 3
        },
        {
          "id": 46,
          "name": "经典浴缸",
          "des": "在这里，你才可以随心所浴",
          "width": 190,
          "height": 185,
          "gridx": 1,
          "gridy": 2,
          "belong": 1,
          "type": 0,
          "src": "3/25.png",
          "src2": "3/25_1.png",
          "sort": 3
        },
        {
          "id": 48,
          "name": "全身镜",
          "des": "里面住着个小仙女",
          "width": 148,
          "height": 335,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "3/26.png",
          "src2": "3/26_1.png",
          "sort": 3
        }
      ],
      [
        {
          "id": 69,
          "name": "玩偶兔",
          "des": "成长路上的倾听者，少时梦想的保护伞",
          "width": 91,
          "height": 118,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "4/43.png",
          "src2": "4/43_1.png",
          "sort": 4
        },
        {
          "id": 53,
          "name": "小黄鸭",
          "des": "你的泡澡伴侣",
          "width": 57,
          "height": 73,
          "gridx": 1,
          "gridy": 1,
          "belong": 1,
          "type": 0,
          "src": "4/53.png",
          "src2": "4/53_1.png",
          "sort": 4
        },
        {
          "id": 59,
          "name": "老式电视",
          "des": "时光是记忆的橡皮擦",
          "width": 102,
          "height": 136,
          "gridx": 1,
          "gridy": 1,
          "belong": 0,
          "type": 1,
          "src": "4/69.png",
          "src2": "4/69_1.png",
          "sort": 4
        }
      ]
    ]
  }
}
}'



获取保存列表：
url:'getSaveGoods'
data:'{
	openid:''
}'
return:'{
	{
  "code": 0,
  "data": {
	"room_bg": 0 // 背景id 0 无背景 1 都市高层 2 日式庭院 3 滨海别墅 4  欧式花园
    "goods_arr": [
      [
        {
          "id": 11, // id 
          "name": "迷你茶几", // 名字
          "des": "一个茶几 一本书，我能睡它一下午",
          "width": 166,
          "height": 139,
          "gridx": 1, // gridx gridy 表示几列几行
          "gridy": 2,
		  "x": 82, 
          "y": 223,
          "belong": 1, // 是否绑定  0 未绑定  1绑定
          "type": 0,  // 是否在地上 0 在地上 1不在
          "src": "1/56.png",  // 图片1  默认左方向图 
          "src2": "1/56_1.png", // 图片1  默认右方向图 
          "sort": 1 // 分类id
        }
      ]
    ]
  }
}
}'

保存数据：
url:'saveGoods'
data:'{
	openid:'',
	"room_bg": 0 // 背景id 0 无背景 1 都市高层 2 日式庭院 3 滨海别墅 4  欧式花园
    
	"goods_arr": [
      [
        {
          "id": 11,
          "name": "迷你茶几",
          "des": "一个茶几 一本书，我能睡它一下午",
          "width": 166,
          "height": 139,
          "gridx": 1, // gridx gridy 表示几列几行
          "gridy": 2,
		  "x": 82, 
          "y": 223,
          "belong": 1, // 是否绑定  0 未绑定  1绑定
          "type": 0,  // 是否在地上 0 在地上 1不在
          "src": "1/56.png",  // 图片1  默认左方向图 
          "src2": "1/56_1.png", // 图片1  默认右方向图 
          "sort": 1 // 分类id
        }
      ]
    ]
}'
return:'{
	{
  "code": 0
}
}'


3.获取跳棋次数
url:'getGameNum'
data:'{
	openid:''
}'
return:'{
	code:0,
	data:{
		num:1 // 剩余次数
	}
}'

4.使用跳棋次数
url:'useGameNum'
data:'{
	openid:''
}'
return:'{
	code:0,
	data:{
		num:1 // 剩余次数
	}
}'


4.分享增加次数
url:'shareGame'
data:'{
	openid:''
}'
return:'{
	code:0
}'

5.签到增加次数
url:'signInGame'
data:'{
	openid:''
}'
return:'{
	code:0,
	data:{
		"day": 3, // 签到次数
		"days":[
      {
        "day": 1, // 第几天
        "type": 1, //  0 未签到 1签到
        "state": 0//  0 未领取 1以领取
      },
      {
        "day": 2,
        "type": 1,
        "state": 0
      }, {
        "day": 3,
        "type": 1,
        "state": 0
      }, {
        "day": 4,
        "type": 0,
        "state": 0
      }, {
        "day": 5,
        "type": 0,
        "state": 0
      }
    ]
	}
}'

6.打开普通/稀有礼盒
url:'openGift'
data:'{
	openid:'',
	type:0 // 0 普通 1 稀有 2 盲盒 3 优惠卷
}'
return:'{
	code:0,
	data:{
		goods:{ // 当type为 0 1 返回改数据
			id:0; // id号
			name: "S型躺椅", // 名称
            des: "人生就像咸鱼，爱躺才会赢", // 描述
            src: '1/1.png', // 图片路径
		},
		gift:{
			id:0
			name:""
		},
		coupons:{
			id:0
			name:""
			code:''
		}		
	}
}'

7.获取游戏信息：
url:'getGameInfo'
data:{
	openid:''
}
return:{
	code:0,
	data:{
		channel:[{ // 渠道列表
				name:''
			}
		],
		system:[{ // 系统列表
				name:''
			}
		],
		area:[{ // 大区列表
				name:''
			}
		],
		role:[{ // 角色列表
				name:''
			}
		]
	}
}


8.提交游戏信息：
url:'postGameInfo'
data:{
	openid:'',
	gift_id:'', // 游戏id 可以为空
	channel:'', // 渠道值
	system:'', // 系统值
	area:'', // 大区值
	role:'' // 角色值
}
return:{
	code:0
}


9.9带1：
// 是否带过判断
url:"checkGoods"
data:{
	openid:'',
	goods_id:0 // 装饰品id
}
return:{
	code:0 // 0 未带过 1 带过
}

// 提交9带1
url:'selectGoods'
data:{
	openid:'',
	goods_id:0// 装饰品id
}
return:{
	code:0
}



















