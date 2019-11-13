

// belong: 0 不属于我 1 属于我
// type :  0 放地上 1 放墙上
goods_arr = [
    [
        {
            id: 11,
            name: "迷你茶几",
            des: "一个茶几 一本书，我能睡它一下午",
            width: 166,
            height: 139,
            gridx: 1,
            gridy: 2,
            belong: 1,
            type: 0,
            src: '1/56.png',
            src2: '1/56_1.png',
            sort: 1
        },
        {
            id: 20,
            name: "日式柔软靠椅",
            des: "陷下去的那一刻，心都化了",
            width: 99,
            height: 100,
            belong: 1,
            type: 0,
            gridx: 1,
            gridy: 1,
            src: '1/41.png',
            src2: '1/41_1.png',
            sort: 1
        },
        {
            id: 15,
            name: "黄色电视柜",
            des: "一直和电视争宠，但从未赢过",
            width: 219,
            height: 189,
            gridx: 1,
            gridy: 3,
            belong: 1,
            type: 0,
            src: '1/17.png',
            src2: '1/17_1.png',
            sort: 1
        },
    //
    //     {
    //         id: 1,
    //         name: "S型躺椅",
    //         des: "人生就像咸鱼，爱躺才会赢",
    //         width: 132,
    //         height: 121,
    //         gridx: 1,
    //         gridy: 3,
    //         belong: 1,
    //         type: 0,
    //         src: '1/1.png',
    //         src2: '1/1_1.png',
    //         sort: 1
    //     },
    //     {
    //         id: 2,
    //         name: "豪华双人床",
    //         des: "床有多大，心就有多大",
    //         width: 150,
    //         height: 123,
    //         gridx: 2,
    //         gridy: 3,
    //         belong: 1,
    //         type: 0,
    //         src: '1/5.png',
    //         src2: '1/5_1.png',
    //         sort: 1
    //     }, {
    //     id: 3,
    //     name: "奶茶色双人床",
    //     des: "人是铁，床是吸铁石",
    //     width: 3.3,
    //     height: 2.8,
    //     belong: 0,
    //     type: 0,
    //     src: '1/2.png',
    //     src2: '1/2_1.png',
    //     sort: 1
    // }, {
    //     id: 4,
    //     name: "老式储物柜",
    //     des: "柜子一开，小时候的回忆就涌出来",
    //     width: 3.2,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/6.png',
    //     src2: '1/6_1.png',
    //     sort: 1
    // },
    //     {
    //         id: 5,
    //         name: "很有架子",
    //         des: "每天都摆架子给我看",
    //         width: 3.85,
    //         height: 4.5,
    //         belong: 0,
    //         type: 0,
    //         src: '1/9.png',
    //         src2: '1/9_1.png',
    //         sort: 1
    //     }, {
    //     id: 6,
    //     name: "故事酒柜",
    //     des: "心中有故事，哪瓶都是拉菲",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/14.png',
    //     src2: '1/14_1.png',
    //     sort: 1
    // }, {
    //     id: 7,
    //     name: "小角柜",
    //     des: "小资从小角柜开始",
    //     width: 3.85,
    //     height: 3.8,
    //     belong: 0,
    //     type: 0,
    //     src: '1/37.png',
    //     src2: '1/37_1.png',
    //     sort: 1
    // }, {
    //     id: 8,
    //     name: "简易书架",
    //     des: "没有书架的家，是没有灵魂的",
    //     width: 3.8,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/7.png',
    //     src2: '1/7_1.png',
    //     sort: 1
    // }, {
    //     id: 9,
    //     name: "焦糖衣柜",
    //     des: "衣柜衣柜 谁是，世界上最漂亮的女人",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/87.png',
    //     src2: '1/87_1.png',
    //     sort: 1
    // }, {
    //     id: 10,
    //     name: "北欧衣柜",
    //     des: "玩个魔术，来个大变仙女",
    //     width: 3.85,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/10.png',
    //     src2: '1/10_1.png',
    //     sort: 1
    // },  {
    //     id: 12,
    //     name: "古董边柜",
    //     des: "再过500年，它就是个古董",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/63.png',
    //     src2: '1/63_1.png',
    //     sort: 1
    // }, {
    //     id: 13,
    //     name: "深色茶几",
    //     des: "可别学它，上面满满是杯具",
    //     width: 3.85,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/70.png',
    //     src2: '1/70_1.png',
    //     sort: 1
    // }, {
    //     id: 14,
    //     name: "白色餐桌",
    //     des: "有了它，就有了精致的生活",
    //     width: 3.85,
    //     height: 3.4,
    //     belong: 0,
    //     type: 0,
    //     src: '1/23.png',
    //     src2: '1/23_1.png',
    //     sort: 1
    // }, {
    //     id: 16,
    //     name: "淡白茶几",
    //     des: "谁说实用和颜值不能兼具",
    //     width: 3.85,
    //     height: 3.6,
    //     belong: 0,
    //     type: 0,
    //     src: '1/24.png',
    //     src2: '1/24_1.png',
    //     sort: 1
    // }, {
    //     id: 17,
    //     name: "小板凳",
    //     des: "坐下就是全家福，少一个都不行",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/74.png',
    //     src2: '1/74_1.png',
    //     sort: 1
    // }, {
    //     id: 18,
    //     name: "木质摇椅",
    //     des: "摇啊摇，摇到外婆桥",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/79.png',
    //     src2: '1/79_1.png',
    //     sort: 1
    // }, {
    //     id: 19,
    //     name: "皮质单人椅",
    //     des: "舒服得像男友的拥抱",
    //     width: 3.25,
    //     height: 3.2,
    //     belong: 0,
    //     type: 0,
    //     src: '1/39.png',
    //     src2: '1/39_1.png',
    //     sort: 1
    // },  {
    //     id: 21,
    //     name: "化妆台",
    //     des: "清晨看一眼，精神一整天",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/80.png',
    //     src2: '1/80_1.png',
    //     sort: 1
    // }, {
    //     id: 22,
    //     name: "挂壁置物架",
    //     des: "收藏生活的小美好",
    //     width: 3.85,
    //     height: 4.55,
    //     belong: 0,
    //     type: 0,
    //     src: '1/82.png',
    //     src2: '1/82_1.png',
    //     sort: 1
    // }, {
    //     id: 23,
    //     name: "木质鞋柜",
    //     des: "最有味道的家具",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/83.png',
    //     src2: '1/83_1.png',
    //     sort: 1
    // }, {
    //     id: 24,
    //     name: "床头柜",
    //     des: "我有许多秘密，就不告诉你",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/84.png',
    //     src2: '1/84_1.png',
    //     sort: 1
    // }, {
    //     id: 25,
    //     name: "方型矮柜",
    //     des: "家具里的小短腿",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/85.png',
    //     src2: '1/85_1.png',
    //     sort: 1
    // }, {
    //     id: 26,
    //     name: "三角梳妆台",
    //     des: "魔镜魔镜 我是不是，这条gai上最靓的仔",
    //     width: 3.85,
    //     height: 3.85,
    //     belong: 0,
    //     type: 0,
    //     src: '1/86.png',
    //     src2: '1/86_1.png',
    //     sort: 1
    // }, {
    //     id: 27,
    //     name: "双人躺椅",
    //     des: "和已知的人，躺赢未知的人生",
    //     width: 3.85,
    //     height: 3.2,
    //     belong: 0,
    //     type: 0,
    //     src: '1/18.png',
    //     src2: '1/18_1.png',
    //     sort: 1
    // }, {
    //     id: 28,
    //     name: "深色沙发",
    //     des: "无沙发不成家",
    //     width: 3.85,
    //     height: 3.8,
    //     belong: 0,
    //     type: 0,
    //     src: '1/32.png',
    //     src2: '1/32_1.png',
    //     sort: 1
    // }, {
    //     id: 29,
    //     name: "豪华L型沙发",
    //     des: "好的沙发，才能让你发",
    //     width: 3.85,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/8.png',
    //     src2: '1/8_1.png',
    //     sort: 1
    // }, {
    //     id: 30,
    //     name: "几何沙发",
    //     des: "围着坐才更有温度",
    //     width: 3.85,
    //     height: 4.5,
    //     belong: 0,
    //     type: 0,
    //     src: '1/15.png',
    //     src2: '1/15_1.png',
    //     sort: 1
    // }, {
    //     id: 31,
    //     name: "黄色皮沙发",
    //     des: "我在客厅里，安了个王座",
    //     width: 3.85,
    //     height: 3.8,
    //     belong: 0,
    //     type: 0,
    //     src: '1/36.png',
    //     src2: '1/36_1.png',
    //     sort: 1
    // }, {
    //     id: 32,
    //     name: "黄色皮质沙发椅",
    //     des: "裹紧小毛毯，陷进沙发里",
    //     width: 3.85,
    //     height: 3.2,
    //     belong: 0,
    //     type: 0,
    //     src: '1/11.png',
    //     src2: '1/11_1.png',
    //     sort: 1
    // },
    ]
    ,
    [ {
        id: 38,
        name: "球形落地灯",
        des: "谁还不是个掌上明珠呢",
        width: 62,
        height: 241,
        gridx: 1,
        gridy: 1,
        belong: 1,
        type: 0,
        src: '2/29.png',
        src2: '2/29_1.png',
        sort: 2
    },{
        id: 102,
        name: "球形落地灯",
        des: "谁还不是个掌上明珠呢",
        width: 177,
        height: 233,
        gridx: 1,
        gridy: 3,
        belong: 1,
        type: 1,
        src: '2/33.png',
        src2: '2/33_1.png',
        sort: 2
    },{
        id: 41,
        name: "白色微波炉",
        des: "叮一下，开启热气腾腾的生活",
        width: 105,
        height: 99,
        belong: 1,
        gridx: 1,
        gridy: 1,
        type: 1,
        src: '2/45.png',
        src2: '2/45_1.png',
        sort: 2
    },
        {
            id: 33,
            name: "粉红音箱",
            des: "良好邻里关系的障碍",
            width: 2.8,
            height: 2.8,
            belong: 0,
            type: 0,
            src: '2/60.png',
            src2: '2/60_1.png',
            sort: 2
        }, {
        id: 34,
        name: "粉红音箱",
        des: "良好邻里关系的障碍",
        width: 2.3,
        height: 2.3,
        belong: 0,
        type: 0,
        src: '2/61.png',
        src2: '2/61_1.png',
        sort: 2
    }, {
        id: 35,
        name: "柱型台灯",
        des: "打开开关，让心更明亮一些",
        width: 2.3,
        height: 2.3,
        belong: 0,
        type: 0,
        src: '2/71.png',
        src2: '2/71_1.png'
    }, {
        id: 36,
        name: "方型台灯",
        des: "打开开关，让心更明亮一些",
        width: 2.3,
        height: 2.3,
        belong: 0,
        type: 0,
        src: '2/77.png',
        src2: '2/77_1.png',
        sort: 2
    }, {
        id: 37,
        name: "中式落地灯柱",
        des: "生活需要情调，气氛需要营造",
        width: 2.6,
        height: 3.8,
        belong: 0,
        type: 0,
        src: '2/76.png',
        src2: '2/76_1.png'
    }, {
        id: 39,
        name: "阿拉伯数字时钟",
        des: "如果，时间能倒着走就好了",
        width: 0.8,
        height: 0.8,
        belong: 0,
        type: 1,
        src: '2/31.png',
        src2: '2/31_1.png',
        sort: 2
    }, {
        id: 40,
        name: "白色空调",
        des: "燥热的心情，有时候需要冷静冷静",
        width: 1.6,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '2/21.png',
        src2: '2/21_1.png',
        sort: 2
    }, {
        id: 42,
        name: "黑色烤炉",
        des: "烘焙的味道，治愈的味道",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '2/78.png',
        src2: '2/78_1.png',
        sort: 2
    }, {
        id: 43,
        name: "黑曜石冰箱",
        des: "把冰箱塞满，才是生活",
        width: 3.4,
        height: 3.4,
        belong: 0,
        type: 0,
        src: '2/79.png',
        src2: '2/79_1.png'
    }, {
        id: 44,
        name: "黑曜石冰箱",
        des: "把冰箱塞满，才是生活",
        width: 2.85,
        height: 3.15,
        belong: 0,
        type: 1,
        src: '2/33.png',
        src2: '2/33_1.png',
        sort: 2
    },
    ],
    [
        {
            id: 90,
            name: "马桶",
            des: "思考人生专座",
            width: 98,
            height: 160,
            gridx: 1,
            gridy: 1,
            belong: 1,
            type: 0,
            src: '3/12.png',
            src2: '3/12_1.png',
            sort: 3
        },{
        id: 46,
        name: "经典浴缸",
        des: "在这里，你才可以随心所浴",
        width: 190,
        height: 185,
        belong: 1,
        type: 0,
        gridx: 1,
        gridy: 2,
        src: '3/25.png',
        src2: '3/25_1.png',
        sort: 3
    },{
        id: 48,
        name: "全身镜",
        des: "里面住着个小仙女",
        width: 148,
        height: 335,
        belong: 1,
        type: 0,
        gridx: 1,
        gridy: 1,
        src: '3/26.png',
        src2: '3/26_1.png',
        sort: 3
    },{
            id: 45,
            name: "洗碗池",
            des: "一个好看的洗碗池，让你爱上洗碗",
            width: 3.2,
            height: 3.4,
            belong: 0,
            type: 0,
            src: '3/16.png',
            src2: '3/16_1.png',
            sort: 3
        },  {
        id: 47,
        name: "淋浴间",
        des: "浴室好声音，非你莫属",
        width: 2.8,
        height: 3.25,
        belong: 0,
        type: 0,
        src: '3/13.png',
        src2: '3/13_1.png',
        sort: 3
    },
    ],
    [{
        id: 69,
        name: "玩偶兔",
        des: "成长路上的倾听者，少时梦想的保护伞",
        width: 91,
        height: 118,
        gridx: 1,
        gridy: 1,
        belong: 1,
        type: 0,
        src: '4/43.png',
        src2: '4/43_1.png',
        sort: 4
    },{
        id: 53,
        name: "小黄鸭",
        des: "你的泡澡伴侣",
        width: 57,
        height: 73,
        gridx: 1,
        gridy: 1,
        belong: 1,
        type: 0,
        src: '4/53.png',
        src2: '4/53_1.png',
        sort: 4
    },
        {
            id: 59,
            name: "老式电视",
            des: "时光是记忆的橡皮擦",
            width: 102,
            height:136,
            belong: 0,
            gridx: 1,
            gridy: 1,
            belong: 1,
            type: 1,
            src: '4/69.png',
            src2: '4/69_1.png',
            sort: 4
        },
        {
            id: 49,
            name: "跑步机",
            des: "打个赌吧，你一年能跑几次",
            width: 2.8,
            height: 2.8,
            belong: 0,
            type: 0,
            src: '4/40.png',
            src2: '4/40_1.png',
            sort: 4
        }, {
        id: 50,
        name: "深色帐篷",
        des: "心中有沙滩，哪里都能露营",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/19.png',
        src2: '4/19_1.png',
        sort: 4
    }, {
        id: 51,
        name: "彩色气球",
        des: "人生就要飘一点",
        width: 2.8,
        height: 3.8,
        belong: 0,
        type: 0,
        src: '4/51.png',
        src2: '4/51_1.png',
        sort: 4
    }, {
        id: 52,
        name: "宠物猫",
        des: "家里真正的主人",
        width: 2.6,
        height: 2.6,
        belong: 0,
        type: 0,
        src: '4/52.png',
        src2: '4/52_1.png',
        sort: 4
    },  {
        id: 54,
        name: "猫窝",
        des: "你的泡澡伴侣",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/55.png',
        src2: '4/55_1.png',
        sort: 4
    }, {
        id: 55,
        name: "武士刀架",
        des: "别惹我，当心我削你",
        width: 2.8,
        height: 2.6,
        belong: 0,
        type: 0,
        src: '4/64.png',
        src2: '4/64_1.png',
        sort: 4
    }, {
        id: 56,
        name: "挂扇",
        des: "天生擅长煽风点火",
        width: 2.6,
        height: 2.6,
        belong: 0,
        type: 1,
        src: '4/65.png',
        src2: '4/65_1.png',
        sort: 4
    }, {
        id: 57,
        name: "唯美花瓶",
        des: "每天来点新“花”样",
        width: 2.6,
        height: 2.6,
        belong: 0,
        type: 1,
        src: '4/67.png',
        src2: '4/67_1.png',
        sort: 4
    }, {
        id: 58,
        name: "唯美花瓶",
        des: "每天来点新“花”样",
        width: 2.6,
        height: 2.6,
        belong: 0,
        type: 1,
        src: '4/68.png',
        src2: '4/68_1.png',
        sort: 4
    },  {
        id: 60,
        name: "小坐垫",
        des: "坐下那一刻，生活才刚刚开始",
        width: 2.8,
        height: 2.6,
        belong: 0,
        type: 0,
        src: '4/80.png',
        src2: '4/80_1.png',
        sort: 4
    }, {
        id: 61,
        name: "碧空游戏机",
        des: "上上下下，左右左右",
        width: 2.6,
        height: 3.8,
        belong: 0,
        type: 0,
        src: '4/20.png',
        src2: '4/20_1.png',
        sort: 4
    }, {
        id: 62,
        name: "不规律几何地毯",
        des: "我的人生就像，这张地毯一样不规律",
        width: 2.8,
        height: 2.6,
        belong: 0,
        type: 0,
        src: '4/4.png',
        src2: '4/4_1.png',
        sort: 4
    }, {
        id: 63,
        name: "跳舞毯",
        des: "谈恋爱不如跳舞",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/42.png',
        src2: '4/42_1.png',
        sort: 4
    }, {
        id: 64,
        name: "海德钢琴",
        des: "坐下来，和灵魂“弹一弹”",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/22.png',
        src2: '4/22_1.png',
        sort: 4
    }, {
        id: 65,
        name: "黄色弹力球",
        des: "从弹珠到弹力球是，生活的尺度",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/44.png',
        src2: '4/44_1.png',
        sort: 4
    }, {
        id: 66,
        name: "立式拳击沙袋",
        des: "假想男友，怎么都打不够",
        width: 2.8,
        height: 3.7,
        belong: 0,
        type: 0,
        src: '4/27.png',
        src2: '4/27_1.png',
        sort: 4
    }, {
        id: 67,
        name: "猫爬架",
        des: "主子不无聊，我也就开心了",
        width: 2.8,
        height: 3.0,
        belong: 0,
        type: 0,
        src: '4/54.png',
        src2: '4/54_1.png',
        sort: 4
    }, {
        id: 68,
        name: "球形木椅",
        des: "主子不无聊，我也就开心了",
        width: 2.8,
        height: 3.7,
        belong: 0,
        type: 0,
        src: '4/26.png',
        src2: '4/26_1.png',
        sort: 4
    }, {
        id: 70,
        name: "玩偶兔",
        des: "成长路上的倾听者，少时梦想的保护伞",
        width: 2.8,
        height: 2.8,
        belong: 0,
        type: 0,
        src: '4/58.png',
        src2: '4/58_1.png',
        sort: 4
    },
    ]
];