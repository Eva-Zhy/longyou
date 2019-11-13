window.alert = function (name) {
    var iframe = document.createElement("IFRAME");
    iframe.style.display = "none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
};

var w_width = document.body.clientWidth;
var now_pos = 16;
var jump_v = 28;
var bili = 375 / document.body.clientWidth;
var can = true;
console.log(w_width)
console.log(bili)
jq(document).ready(function () {
    jq(".qipan").css("height", w_width / 1.62 + 'px');
    jq("#qz").css({width: 70 / bili + "px", height: 70 / bili + "px"});
    jq("#qz").css({"top": (gezhi[now_pos].top - 18) / bili + "px", "left": (gezhi[now_pos].left - 10) / bili + "px"});

    // 签到
    signIn();

    jq("#day_1").click(function () {
        $(".tishi1").html(" 第一天签到");
        $(".tishi1").css("left","0.5rem");
        tishiani()
    });
    jq("#day_4").click(function () {
        $(".tishi1").html(" 第三天签到");
        $(".tishi1").css("left","21.2rem");
        tishiani()
    });

    jq("#day_2").click(function () {
        if (signIn_data[1].type == 1) {
            $(".tishi1").html(" 累计签到必得装饰礼品");
            $(".tishi1").css("left","6.5rem");
            tishiani()
        } else {
            if (signIn_data[1].state == 0){
                // $(".lihe-bg").css("backgroundImage", 'url("./img/bg3.jpg")');
                // $(".qipan-v").css('display', 'none');
                // $(".lihe-v").css('display', 'block');
                // $("#lihe-v1-1").css('display', 'block');
                $(".xuanzhe-v").css('display', 'block');
                addGoods2()
                setTimeout(function () {
                    var swiper = new Swiper('.swiper-container');
                },500)
            } else {
                $(".tishi1").html(" 以领取");
                $(".tishi1").css("left","6.2rem");
                tishiani()
            }
        }
    });

    jq("#day_3").click(function () {
        if (signIn_data[2].type == 1) {
            $(".tishi1").html("累计签到必得游戏礼包");
            $(".tishi1").css("left","13.5rem");

            tishiani()
        } else {
            if (signIn_data[2].state == 0){
                getGameInfo();

                jq('.qipan-v').css('display', 'none');
                jq('.userInfo').css('display', 'block');
            } else {
                $(".tishi1").html(" 以领取");
                $(".tishi1").css("left","13.2rem");
                tishiani()
            }
        }
    });

    jq("#day_5").click(function () {
        if (signIn_data[4].type == 0) {
            $(".tishi1").html("累计签到必得游戏礼包");
            $(".tishi1").css("left","28.2rem");
            tishiani()
        } else {
            if (signIn_data[4].state == 0){
                getGameInfo();

                jq('.qipan-v').css('display', 'none');
                jq('.userInfo').css('display', 'block');
            } else {
                $(".tishi1").html("以领取");
                $(".tishi1").css("left","28.2rem");
                tishiani()
            }
        }
    });

    jq("#saizi").click(function () {
        if (can) {
            can = false;

            var i = 0;
            var saiziAni = setInterval(function () {
                i++
                if (i < 7) {
                    var ranNum_ani = randomNum(1, 6)
                    jq("#saizi").attr('src', './img/dice_rolling_' + ranNum_ani + '.png')
                } else {
                    clearInterval(saiziAni);
                    var ranNum = randomNum(1, 6);
                    jq("#saizi").attr('src', './img/num' + ranNum + '.png')
                    setTimeout(function () {
                        moveQz(ranNum);
                    }, 200);
                }
            }, 100);
        }
    })
});
var signIn_day = 1;
var signIn_data = [];
function tishiani() {
    jq(".tishi1").stop()
    jq(".tishi1").css("opacity",0);
    jq(".tishi1").animate({opacity:1},1000,function () {
        setTimeout(function () {
            jq(".tishi1").animate({opacity:0},1000,function () {
            });
        },1000)
    });
}
function tishiani2() {
    jq(".tishi2").stop()
    jq(".tishi2").css("opacity",0);
    jq(".tishi2").animate({opacity:1},1000,function () {
        setTimeout(function () {
            jq(".tishi2").animate({opacity:0},1000,function () {
            });
        },1000)
    });
}
function signIn() {
    jq.ajax({
        type: "get", //提交方式
        url: get_url + "signIn.php",//路径
        data: {
            opendid:''
        },//数据，这里使用的是Json格式进行传输
        dataType: 'json',
        success: function (res) {//返回数据根据结果进行相应的处理
            console.log("signIn", res);
            if (res.code == 0) {
                signIn_day = res.data.day;
                signIn_data = res.data.days;
                for (var i = 1; i <= res.data.day; i++) {
                    $("#day_" + i).removeClass('qiandao-item2');
                    $("#day_" + i).addClass('qiandao-item');
                    $("#day_" + i + "_1").css('display', "none");
                    $("#day_" + i + "_0").css('display', "block");
                }
            }
        }
    });
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

var opendGift = {};

function moveQz(num) {
    num--;
    var min_top = 0;
    var min_left = 0;
    var end_top = 0;
    var end_left = 0;
    if (now_pos === 23) {
        // min_top = ((gezhi[now_pos].top + gezhi[0].top - 18) / 2 - jump_v) / bili;
        // min_left = ((gezhi[now_pos].left + gezhi[0].left - 10) / 2) / bili;
        end_top = (gezhi[0].top - 18) / bili;
        end_left = (gezhi[0].left - 10) / bili;
    } else {
        // min_top = ((gezhi[now_pos].top + gezhi[now_pos + 1].top - 18) / 2 - jump_v) / bili;
        // min_left = ((gezhi[now_pos].left + gezhi[now_pos + 1].left - 10) / 2) / bili;
        end_top = (gezhi[now_pos + 1].top - 18) / bili;
        end_left = (gezhi[now_pos + 1].left - 10) / bili;
    }

    // var next = gezhi[now_pos].next;
    // next 0 上 1 右 2 下 3左

    // jq("#qz").animate({top: min_top + "px", left: min_left + "px"}, 300, function () {
    jq("#qz").animate({top: end_top + "px", left: end_left + "px"}, 300, function () {
        if (now_pos === 23) {
            now_pos = 0;
        } else {
            now_pos++;
        }

        if (num > 0) {
            moveQz(num);
        } else {
            can = true;
            console.log("type", gezhi[now_pos].type);
            // if (gezhi[now_pos].type === 1) {
            //     $(".qipan-v").css('display', 'none');
            //     $(".lihe-v").css('display', 'block');
            //     $("#lihe-v1-1").css('display', 'block');
            // }

            jq.ajax({
                type: "get", //提交方式
                url: get_url + "getGift.php",//路径
                data: {},//数据，这里使用的是Json格式进行传输
                dataType: 'json',
                success: function (res) {//返回数据根据结果进行相应的处理
                    console.log("openGift", res);
                    if (res.code == 0) {
                        opendGift = res.data.goods;

                        // 0 普通道具 1稀有道具 2游戏道具 3民俗95优惠卷
                        if (res.data.type == 0) {
                            $(".lihe-bg").css("backgroundImage", 'url("./img/bg3.jpg")');
                            $(".qipan-v").css('display', 'none');
                            $(".lihe-v").css('display', 'block');
                            $("#lihe-v1-1").css('display', 'block');
                        } else if (res.data.type == 1) {
                            $(".lihe-bg").css("backgroundImage", 'url("./img/bgg.jpg")');
                            $(".qipan-v").css('display', 'none');
                            $(".lihe-v").css('display', 'block');
                            $("#lihe-v1-2").css('display', 'block');
                        }
                    }
                }
            });
        }
    });
    // });
}

$(".lihe-x").unbind("click").click(function () {
    console.log(1);
    $(".qipan-v").css('display', 'block');
    $(".lihe-v").css('display', 'none');
    closelihe()
    $(".lihe-v-btn").css('display', 'none');
});

$(".lkzb").unbind("click").click(function () {
    console.log(1);
    $(".bianfang-v").css('display', 'block');
    $(".lihe-v").css('display', 'none');
    $(".lihe-v-btn").css('display', 'none');
    // startGame();
    closelihe()
});

$("#btn2").unbind("click").click(function () {
    openGift(0)

});

$("#btn3").unbind("click").click(function () {
    openGift(1)
});
var goods_data={};
function openGift(type) {
    jq.ajax({
        type: "get", //提交方式
        url: get_url + "openGift.php",//路径
        data: {
            opendid:'',
            type:type
        },//数据，这里使用的是Json格式进行传输
        dataType: 'json',
        success: function (res) {//返回数据根据结果进行相应的处理
            console.log("openGift", res);
            if (res.code == 0) {
                goods_data = res.data.goods;
                jq(".lihe-img").addClass("cake")
                setTimeout(function () {
                    jq(".lihe-img").removeClass("cake");
                    jq(".lihe-v1").css('display', 'none');
                    $("#daoju-img").attr('src','./baifang/png/tu/'+ res.data.goods.src);
                    console.log("openGift", res.data.goods.src);
                    console.log("openGift", './baifang/png/tu/'+ res.data.goods.src);
                    jq(".title2").html( res.data.goods.name);
                    jq(".title3").html( res.data.goods.name);
                    jq(".title3").html( res.data.goods.name);
                    var des_arr = res.data.goods.des.split("，");
                    if (des_arr.length == 2) {
                        jq(".title4").html( des_arr[0]);
                        jq(".title5").html( des_arr[1]);
                    } else {
                        jq(".title5").html( des_arr[0]);
                    }

                    jq(".lihe-v2").css('display', 'block');
                    jq(".lihe-v-btn").css('display', 'block');
                },3000);

            }
        }
    });
}

$(".xyyx").unbind("click").click(function () {
    console.log(1);
    $(".erweima2").css('display', 'block');
    $(".lkzb").css('display', 'none');
    $(".xyyx").css('display', 'none');
    $(".btn6").css('display', 'block');

    setTimeout(function () {
        html2canvas(document.querySelector("#lihe-v"),{ backgroundColor: "transparent",}).then(function (canvas) {
//            document.querySelector(".share-img").appendChild(canvas);
            var save_base2 = canvas.toDataURL('image/png');
            console.log(save_base2)
            $(".share_img2").css('display', 'block');
            $(".share_img2").attr('src', save_base2);
        });
    }, 500)
});

function closelihe() {
    $(".lihe-v1").css('display', 'none');
    $(".lihe-v2").css('display', 'none');
    $(".share_img2").css('display', 'none');
    $(".lihe-v-btn").css('display', 'none');
}