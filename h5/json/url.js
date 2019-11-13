1.登陆：
url:'login'
data:'{
	openid:''
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
	code:0,
	data:{
		goods_arr:[
			[ //家具
				{
					id: 1, 
					name: "S型躺椅",    // 名称
					des: "人生就像咸鱼，爱躺才会赢", // 描述
					width: 2.3,  // 宽
					height: 2.1, // 高
					belong: 1, 	// 是否获取  1 获取 0 没获取
					type: 0,	// 默认为0
					src: '1/1.png',  // 图片路径
					src2: '1/1_1.png', // 图片
					sort: 1 // 分类1 家具 2电器 3洗浴 4娱乐 5装修
				}
			],
			[ //电器
				{
					id: 1, 
					name: "S型躺椅",    // 名称
					des: "人生就像咸鱼，爱躺才会赢", // 描述
					width: 2.3,  // 宽
					height: 2.1, // 高
					belong: 1, 	// 是否获取  1 获取 0 没获取
					type: 0,	// 默认为0
					src: '1/1.png',  // 图片路径
					src2: '1/1_1.png', // 图片
					sort: 2 // 分类1 家具 2电器 3洗浴 4娱乐 5装修
				}
			]
		]
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
		num:1
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
		type:0 // 0 仅签到 1获取普通礼盒 2获取稀有礼盒 3获取福利盲盒
		day:1 // 天数
	}
}'
6.打开普通/稀有礼盒
url:'openGift'
data:'{
	openid:'',
	type:0 // 0 普通 1 稀有
}'
return:'{
	code:0,
	data:{
		goods:{
			id:0; // id号
			name: "S型躺椅", // 名称
            des: "人生就像咸鱼，爱躺才会赢", // 描述
            src: '1/1.png', // 图片路径
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
url:'getGameInfo'
data:{
	openid:'',
	channel:'', // 渠道值
	system:'', // 系统值
	area:'', // 大区值
	role:'' // 角色值
}
return:{
	code:0
}


9.进入龙族：
url:'getGameInfo'
data:{
	openid:'',
	gift_id:0
}
return:{
	code:0
}



















