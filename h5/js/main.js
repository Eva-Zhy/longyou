var imgs = 0;
var allimgs = 4;
var save_base = '';
var hetu_base = '';
var address = "";
var name = "我是xxxx";
var taici_num = 0;
window.get_url = "https://jwnice.com/jyserver/longyou/";
var game_width = 644;
var game_height = 826;

addGoods();
allimgs = jq('.loading-img').length;
setTimeout(function () {
    jq('#z1').animate({opacity: 1}, 1500, function () {
    })
},500)

setTimeout(function () {
    jq('#z1_1').animate({opacity: 1}, 1500, function () {
    })
},2000)
setTimeout(function () {
    jq('#z2').animate({opacity: 1}, 1500, function () {
    })
},3500)
setTimeout(function () {
    jq('#z2_1').animate({opacity: 1}, 1500, function () {
    })
},4500)
var times_num = 0;
var timeAni = setInterval(function () {
    times_num++
    console.log(times_num);
    jq("#bfb").text(times_num + '%');
    jq(".bar-v").css("width", times_num + '%');
    if (times_num == 99) {
        clearInterval(timeAni)
        jq("#bfb").text("100%");
        jq(".bar-v").css("width", "100%");

        setTimeout(function () {
            jq('.loading-bar').animate({opacity: 0}, 1000, function () {
                jq('.loading-bar').css("display", "none");
            })
            jq('#bfb').animate({opacity: 0}, 1000, function () {
                jq('#bfb').css("display", "none");

                jq("#logo").css("display", "block");
                jq("#start_btn").css("display", "block");
                jq('#logo').animate({opacity: 1}, 1000, function () {
                })
                jq('#start_btn').animate({opacity: 1}, 1000, function () {
                    jq('#start_btn').click(function () {
                        jq(".loading-v").css("display", "none");
                        jq(".select-v").css("display", "block");

                        // jq('.select-v').css('display','none');
                        // jq('.bianfang-v').css('display','block');
                        // startGame()
                        // 选择地址
                        // addSelectClick();

                    });
                })
            })

        }, 1000);
    }

},80)

jq('.loading-img').imagesLoaded().always(function () {


}).progress(function (instance, image) {
    imgs++;

});



function GetPercent(num, total) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0" : (Math.round(num / total * 10000) / 100.00);
}

var one_width, one_height;
var ding_x = 0;
var ding_y = 0;
var left_x = 0;
var left_y = 0;

var right_x = 0;
var right_y = 0;
var dian_arr = [];

addSelectClick();


function getMap() {
    var map_width = parseInt(jq('#mythings').css("width"));
    var map_height = parseInt(jq('#mythings').css("height"));

    console.log("map_width", map_width);
    console.log("map_height", map_height);

    // 顶角
    var top = keepTwoDecimalFull(map_height * 0.435);
    var left = keepTwoDecimalFull(map_width * 0.491);
    ding_x = left;
    ding_y = top;
    // 左
    var top2 = keepTwoDecimalFull(map_height * 0.476);
    var left2 = keepTwoDecimalFull(map_width * 0.401);
    // 右
    var top3 = keepTwoDecimalFull(map_height * 0.476);
    var left3 = keepTwoDecimalFull(map_width * 0.580);
    // 下
    var top4 = keepTwoDecimalFull(map_height * 0.523);
    var left4 = keepTwoDecimalFull(map_width * 0.498);

    // 下
    left_x = 0;
    left_y = keepTwoDecimalFull(map_height * 0.669);

    // 下
    right_x = keepTwoDecimalFull(map_width);
    right_y = keepTwoDecimalFull(map_height * 0.669);


    one_width = keepTwoDecimalFull(left3 - left2);
    one_height = keepTwoDecimalFull(top4 - top);

    console.log("one_width", one_width);
    console.log("one_height", one_height);

    console.log("top4", top4);
    console.log("one_height", one_height);
    // 计算差值
    var grid_left_cha = keepTwoDecimalFull(left - left2);
    var grid_top_cha = keepTwoDecimalFull(top2 - top);

    var grid_left_cha2 = keepTwoDecimalFull(left3 - left);
    var grid_top_cha2 = keepTwoDecimalFull(top - top3);


    // $("#dian1").css("top",top+'px');
    // $("#dian1").css("left",left+'px');
    // $("#dian1").css("top",top - grid_top_cha2 +'px') ;
    // $("#dian1").css("left",left + grid_left_cha2+'px');
    var dian_html = ''

    var dian_arr1 = [];
    dian_arr1.push({x: left, y: top});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr1[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr1[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr1.push(dian);
    }
    dian_arr1.shift();
    var dian_arr2 = [];
    dian_arr2.push({x: left3, y: top3});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr2[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr2[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr2.push(dian);
    }
    dian_arr2.shift();
    var dian_arr3 = [];
    dian_arr3.push({x: left + grid_left_cha2 * 2, y: top - grid_top_cha2 * 2});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr3[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr3[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr3.push(dian);
    }
    dian_arr3.shift();
    var dian_arr4 = [];
    dian_arr4.push({x: left + grid_left_cha2 * 3, y: top - grid_top_cha2 * 3});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr4[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr4[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr4.push(dian);
    }
    dian_arr4.shift();
    var dian_arr5 = [];
    dian_arr5.push({x: left + grid_left_cha2 * 4, y: top - grid_top_cha2 * 4});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr5[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr5[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr5.push(dian);
    }
    dian_arr5.shift();

    var dian_arr6 = [];
    dian_arr6.push({x: left + grid_left_cha2 * 5, y: top - grid_top_cha2 * 5});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr6[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr6[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr6.push(dian);
    }
    dian_arr6.shift();

    var dian_arr7 = [];
    dian_arr7.push({x: left + grid_left_cha2 * 6, y: top - grid_top_cha2 * 6});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr7[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr7[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr7.push(dian);
    }
    dian_arr7.shift();

    var dian_arr8 = [];
    dian_arr8.push({x: left + grid_left_cha2 * 7, y: top - grid_top_cha2 * 7});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr8[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr8[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'
        dian_arr8.push(dian);
    }
    dian_arr8.shift();

    var dian_arr9 = [];
    dian_arr9.push({x: left + grid_left_cha2 * 8, y: top - grid_top_cha2 * 8});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr9[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr9[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'

        dian_arr9.push(dian);
    }
    dian_arr9.shift();

    var dian_arr10 = [];
    dian_arr10.push({x: left + grid_left_cha2 * 9, y: top - grid_top_cha2 * 9});
    for (var i = 0; i < 10; i++) {
        var dian = {};
        dian.x = keepTwoDecimalFull(dian_arr10[i].x - grid_left_cha);
        dian.y = keepTwoDecimalFull(dian_arr10[i].y + grid_top_cha);
        dian_html += '<div style="position: absolute; width: 3px;height: 3px;background-color: #000;z-index: 999;' +
            'top:' + dian.y + 'px;left:' + dian.x + 'px;">'
            + '</div>'

        dian_arr10.push(dian);
    }
    dian_arr10.shift();
    dian_arr = [...dian_arr1, ...dian_arr2, ...dian_arr3, ...dian_arr4, ...dian_arr5, ...dian_arr6, ...dian_arr7, ...dian_arr8, ...dian_arr9, ...dian_arr10];
    // jq("#mythings").html(dian_html);
    console.log(dian_arr);
}

function keepTwoDecimal(num) {
    var result = parseFloat(num);
    if (isNaN(result)) {
        alert('传递参数错误，请检查！');
        return false;
    }
    result = Math.round(num * 100) / 100;
    return result;
}

//四舍五入保留2位小数（不够位数，则用0替补）
function keepTwoDecimalFull(num) {
    var result = parseFloat(num);
    if (isNaN(result)) {
        alert('传递参数错误，请检查！');
        return false;
    }
    result = Math.round(num * 100) / 100;
    var s_x = result.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return parseFloat(s_x);
}

function addSelectClick() {
    jq('.select-item').click(function () {
        var id = jq(this).attr('data-id');
        console.log(id);
        if (id == 1) {
            address = '都市高层';
            console.log("add");
            jq(".select-item1").addClass("animat");
            jq(".select-item2").removeClass("animat");
            jq(".select-item3").removeClass("animat");
            jq(".select-item4").removeClass("animat");
        } else if (id == 2) {
            address = '日式庭院';
            jq(".select-item1").removeClass("animat");
            jq(".select-item2").addClass("animat");
            jq(".select-item3").removeClass("animat");
            jq(".select-item4").removeClass("animat");
        } else if (id == 3) {
            address = '滨海别墅';
            jq(".select-item1").removeClass("animat");
            jq(".select-item2").removeClass("animat");
            jq(".select-item3").addClass("animat");
            jq(".select-item4").removeClass("animat");
        } else if (id == 4) {
            address = '欧式花园';
            jq(".select-item1").removeClass("animat");
            jq(".select-item2").removeClass("animat");
            jq(".select-item3").removeClass("animat");
            jq(".select-item4").addClass("animat");
        }

        if (address != '') {
            jq('.select-v').css('display', 'none');
            jq('.bianfang-v').css('display', 'block');
            startGame()
            getMap()
            // getMap()
        } else {
            alert("请选择小屋地址")
        }
    });
    // jq('.btn5').click(function () {
    //
    // });
    jq('.btn6').click(function () {
        alert("长按图片即可保存")
    });
    jq('.g_qzz').click(function () {
        jq.ajax({
            type: "get", //提交方式
            url: "https://jwnice.com/jyserver/longyou/share.php",//路径
            data: {
                opendid: ''
            },//数据，这里使用的是Json格式进行传输
            dataType: 'json',
            success: function (res) {//返回数据根据结果进行相应的处理
                console.log(res);
                if (res.code == 0) {
                    $(".tishi2").html("分享成功");
                    tishiani2()
                } else if (res.code == 1) {
                    $(".tishi2").html("分享超过上限了");
                    tishiani2()
                }
            }
        });

    });
    jq('.btn4').click(function () {
        alert("带它成功")
    });
    jq('.g_btn2 ').click(function () {
        // 获取游戏信息
        getGameInfo();

        jq('.bianfang-v').css('display', 'none');
        jq('.userInfo').css('display', 'block');
    });
    jq('.cancl ').click(function () {
        jq('.bianfang-v').css('display', 'block');
        jq('.userInfo').css('display', 'none');
    });
    jq('.suer ').click(function () {
        var channel = jq('#channel-s option:selected').val();
        var system = jq('#system-s option:selected').val();
        var area = jq('#area-s option:selected').val();
        var role = jq('#role-s option:selected').val();

        if (channel == "") {
            alert("请选择渠道");
        } else if (system == "") {
            alert("请选择系统");
        } else if (area == "") {
            alert("请选择大区");
        } else if (role == "") {
            alert("请选择角色");
        } else {
            jq.ajax({
                type: "get", //提交方式
                url: "https://jwnice.com/jyserver/longyou/share.php",//路径
                data: {
                    opendid: '',
                    type: 0,
                    channel: channel,
                    system: system,
                    area: area,
                    role: role
                },//数据，这里使用的是Json格式进行传输
                dataType: 'json',
                success: function (res) {//返回数据根据结果进行相应的处理
                    console.log(res);
                    if (res.code == 0) {
                        alert("提交成功")
                    }
                }
            });
        }


    });
    jq('#back1').click(function () {
        jq('.qipan-v').css('display', 'block');
        jq('.xuanzhe-v').css('display', 'none');
    });
    jq('#back2').click(function () {
        jq('.bianfang-v').css('display', 'block');
        jq('.fangcz-v').css('display', 'none');
        jq('.tishi-v').css('display', 'none');
    });
    jq('#back3').click(function () {
        jq('.bianfang-v').css('display', 'block');
        jq('.qipan-v').css('display', 'none');
    });
    jq('.add').click(function () {
        alert("右上角点击分享")
    });
    jq('.g_btn3').click(function () {
        jq('.bianfang-v').css('display', 'none');
        jq('.qipan-v').css('display', 'block');
    });
    jq('.g_btn1').click(function () {
        console.log(html2canvas)
        jq('.shengc').css('display', 'block');
        jq('.yinzhang').css('display', 'none');
        jq('#share_img').css('display', 'none');
        jq(".thing").removeClass("thing-touch");
        // showbag.take();
        setTimeout(function () {
            html2canvas(document.querySelector("#mythings")).then(function (canvas) {
//            document.querySelector(".share-img").appendChild(canvas);
                save_base = canvas.toDataURL('image/jpeg');

                jq('.bianfang-v').css('display', 'none');
                jq('.fangcz-v').css('display', 'block');
                jq('.hetu').attr('src', save_base);

                jq('#huxing').html("户型：" + address);
                jq('#name').html("户主：@" + name);
                jq("#up").click(function () {
                    jq('#xuanyan' + taici_num).css('display', 'none');
                    if (taici_num == 0) {
                        taici_num = 5
                    } else {
                        taici_num--;
                    }
                    jq('#xuanyan' + taici_num).css('display', 'block');
                });
                jq("#down").click(function () {
                    jq('#xuanyan' + taici_num).css('display', 'none');
                    if (taici_num == 5) {
                        taici_num = 0
                    } else {
                        taici_num++;
                    }
                    jq('#xuanyan' + taici_num).css('display', 'block');
                });

                jq(".hetu_btn").click(function () {
                    if (taici_num !== 0) {
                        jq('.shengc').css('display', 'none');
                        jq('.yinzhang').css('display', 'block');

                        setTimeout(function () {
                            html2canvas(document.querySelector("#fancz-shu")).then(function (canvas) {
//            document.querySelector(".share-img").appendChild(canvas);
                                hetu_base = canvas.toDataURL('image/jpeg');
                                $("#share_img").css('display', 'block');
                                $(".tishi-v").css('display', 'block');
                                $("#share_img").attr('src', hetu_base);
                            })
                        }, 500)
                    } else {
                        alert("请选择你的小屋宣言")
                    }
                });
            });
        }, 500)
    });
    jq('.yxgz').click(function () {
        jq('.game-yxgz').css('display', 'block');
    });
    jq('#yxgz_x').click(function () {
        jq('.game-yxgz').css('display', 'none');
    });

}

function getGameInfo() {
    jq.ajax({
        type: "get", //提交方式
        url: "https://jwnice.com/jyserver/longyou/gameinfo.php",//路径
        data: {
            opendid: ''
        },//数据，这里使用的是Json格式进行传输
        dataType: 'json',
        success: function (res) {//返回数据根据结果进行相应的处理
            console.log(res);
            if (res.code == 0) {
                jq("#channel-s").html("")
                var channels_html = '<option value="" selected>请选择</option>';
                for (let i = 0; i < res.data.channels.length; i++) {
                    channels_html += '<option value="' + res.data.channels[i] + '">' + res.data.channels[i] + '</option>'
                }
                jq("#channel-s").html(channels_html)

                jq("#system-s").html("")
                var system_html = '<option value="" selected>请选择</option>';
                for (let o = 0; o < res.data.systems.length; o++) {
                    system_html += '<option value="' + res.data.systems[o] + '">' + res.data.systems[o] + '</option>'
                }
                jq("#system-s").html(system_html)

                jq("#area-s").html("")
                var areas_html = '<option value="" selected>请选择</option>';
                for (let e = 0; e < res.data.areas.length; e++) {
                    areas_html += '<option value="' + res.data.areas[e] + '">' + res.data.areas[e] + '</option>'
                }
                jq("#area-s").html(areas_html)

                jq("#role-s").html("")
                var roles_html = '<option value="" selected>请选择</option>';
                for (let i = 0; i < res.data.roles.length; i++) {
                    roles_html += '<option value="' + res.data.roles[i] + '">' + res.data.roles[i] + '</option>'
                }
                jq("#role-s").html(roles_html)
            }
        }
    });
}


