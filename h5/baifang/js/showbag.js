var showbag = {};
var $things = $('.things');
var thingsWidth = 0;
var thingsHeight = 0;
var drawing = document.getElementById('drawing');
var $choose = $('.choose');
var chooseHeight;
var chooseListScroll;
var $result = $('.result');
var $welcome = $('.welcome');
var $percent = $('.percent');
var $take = $('.choose-take');
var inTaking = false;
var rem = 100;
var ratio = window.devicePixelRatio ? window.devicePixelRatio : 1;
// var cdnUrl = $('input[name="requestUrl"]').val();
var cdnUrl = "./baifang";
// var imgUrl = '../img/activity_showbag_h5_';/*跨域，相对路径*/
var imgUrl = './baifang/png/tu/';/*跨域，相对路径*/
var wf_width = document.body.clientWidth;
var things_bili = 0.78;
var things_wh = 0.88;
/*预加载图片分组*/
var imgList = {
    0: [
        '1/1.png'
    ],
    1: [],
    2: [],
    3: [],
    4: []
};
/*预加载图片分组 end*/

$(function () {
    document.addEventListener('touchmove', function (event) {
        event.preventDefault();/*禁止页面拖动*/
    }, {passive: false});
    showbag.loadImage(imgList[0], 0);/*加载图片*/
});

$(window).resize(function () {
    showbag.drawing();/*画布大小调整*/
});

/*预先加载第一分组图片*/
showbag.loadImage = function (imgListItem, imgIndex) {
    if (!imgListItem.length) return;
    var img = new Image();
    imgIndex = imgIndex ? imgIndex : 0;
    img.src = imgUrl + imgListItem[imgIndex];
    var percent = parseInt(imgIndex / imgListItem.length * 100);
    img.onload = function () {
        imgIndex++;
        if (imgIndex < imgListItem.length) {
            $percent.html(percent + '%');
            showbag.loadImage(imgListItem, imgIndex);
        } else {
            $percent.html('100%');
            imgListItem.length = 0;
            setTimeout(function () {
                $percent.remove();
                $welcome.find('.btn').addClass('btn-in');
            }, 400);
            showbag.init();
        }
    }
    img.onerror = function (e) {
        console.log(imgUrl + imgListItem[imgIndex] + ' 图片丢失或路径错误');
        $percent.remove();
        $welcome.find('.btn').addClass('btn-in');
        showbag.init();
    }
};

/*按用户点击分组预先加载图片*/
showbag.loadImageOther = function (imgListItem, imgIndex) {
    if (!imgListItem.length) return;
    var img = new Image();
    imgIndex = imgIndex ? imgIndex : 0;
    img.src = imgUrl + imgListItem[imgIndex];
    img.onload = function () {
        imgIndex++;
        if (imgIndex < imgListItem.length) {
            showbag.loadImageOther(imgListItem, imgIndex);
        } else {
            imgListItem.length = 0;
        }
    }
};

/*初始化*/
showbag.init = function () {

    $choose.removeClass('hide');
    $things.parent().removeClass('hide');
    showbag.drawing();/*画布初始化*/

    /*关闭欢迎页*/

    // $welcome.on('click','.btn a',function(){
    //     $welcome.addClass('welcome-out');
    //     setTimeout(function(){
    //         $welcome.remove();
    //     },500);
    //
    //     /*生成当前地址二维码*/
    //     showbag.onloadJS(cdnUrl+'/js/qrcode.min.js', function(){
    //         var showbagQrcode = new QRCode('linkQrcode',{
    //             text: window.location.href,
    //             width: 400,
    //             height: 400,
    //             correctLevel: QRCode.CorrectLevel.L
    //         });
    //     });
    //
    //     /*物品列表滚动条初始化*/
    //     showbag.onloadJS(cdnUrl+'/js/iscroll.min.js', function(){
    //         chooseListScroll = new IScroll('#chooseListScroll', {
    //             tap: true
    //         });
    //     });
    // });

    rem = showbag.rem();
    /*添加物品*/
    $choose.on('tap', '.goods', function (e) {
        chooseHeight = $choose.height();
        console.log("belong",$(this).attr('data-belong'));
        var belong = $(this).attr('data-belong');
        if (belong == 0) {
            alert("尚未获取该装饰");
           return 0;
        }

        thingsWidth = $things.width();
        thingsHeight = $things.height();
        var timeStamp = parseInt(e.timeStamp),
            klassRadio = '';
            width = $(this).attr('data-width'),
            height = $(this).attr('data-height'),
            thingImg = $(this).attr('data-img'),
            thingImg2 = $(this).attr('data-img2'),

            gridx = $(this).attr('data-gridx'),
            gridy = $(this).attr('data-gridy'),
            type = $(this).attr('data-type'),

            // scale = $(this).attr('data-scale'),

            // thingWidth = width * rem,
            // thingHeight = height * rem,
            thingWidth = thingsWidth / (game_width / width),
            thingHeight = thingsHeight / (game_height / height),
            // thingHeight = thingWidth / scale;
            console.log("typetype", type);
        console.log("thingsWidth", thingsWidth);
        console.log("thingsHeight", thingsHeight);
        console.log("thingLeft", thingWidth);
        console.log("thingTop", thingHeight);
        thingLeft = (wf_width * things_wh - thingWidth) / 2,
            // thingTop = ((wf_width*things_wh) / things_bili - thingHeight - chooseHeight)/2;
            thingTop = ((wf_width * things_wh) / things_bili - thingHeight) / 2;
        thingLeft = 117;
        thingTop = 261;
        console.log("thingLeft", thingLeft);
        console.log("thingTop", thingTop);
        if ($(this).hasClass('goods-radio')) {/*单选物品*/
            klassRadio = 'thing-radio';
            $('.' + klassRadio).remove();
        }
        $things.append('<div  data-type="' + type + '"  data-gridx="' + gridx + '" data-gridy="' + gridy + '" class="thing ' + klassRadio + '" id="thing-' + timeStamp + '" style="width:' + thingWidth + 'px;height:' + thingHeight + 'px;left:' + thingLeft + 'px;top:' + thingTop + 'px;"><img id="thingimg-' + timeStamp + '" src="' + imgUrl + thingImg + '"><div id="del" class="del"></div><div id="big" data-img="' + thingImg + '" data-img2="' + thingImg2 + '" data-id="' + timeStamp + '" class="big"></div></div>');
        showbag.touchScale('#thing-' + timeStamp);
    }).on('click', '.choose-toggle', function () {
        $choose.toggleClass('choose-down');
        setTimeout(function () {
            chooseListScroll.refresh();/*等待展开->物品列表滚动重置*/
        }, 310);
    }).on('click', '.choose-cate li', function () {
        var index = $(this).index();
        console.log("index", index);
        if (index === 0) {
            $(".jiantou2").css("left", "5.4rem");
            $(".jiantou").css("display", "block");
            $(".choose-list-wrap").css("width", $("#goods1 li").length * 6.5 + "rem")
            $("#icon-a").css("backgroundImage", "url('./img/jiaju1_1.png')");
            $("#icon-b").css("backgroundImage", "url('./img/jiaju2_2.png')");
            $("#icon-c").css("backgroundImage", "url('./img/jiaju3_2.png')");
            $("#icon-d").css("backgroundImage", "url('./img/jiaju4_2.png')");
            $("#icon-e").css("backgroundImage", "url('./img//jiaju5_2.png')");
        } else if (index === 1) {
            $(".jiantou2").css("left", "12.2rem");
            $(".jiantou").css("display", "block");
            $(".choose-list-wrap").css("width", $("#goods2 li").length * 6.5 + "rem")
            $("#icon-a").css("backgroundImage", "url('./img/jiaju1_2.png')");
            $("#icon-b").css("backgroundImage", "url('./img/jiaju2_1.png')");
            $("#icon-c").css("backgroundImage", "url('./img/jiaju3_2.png')");
            $("#icon-d").css("backgroundImage", "url('./img/jiaju4_2.png')");
            $("#icon-e").css("backgroundImage", "url('./img/jiaju5_2.png')");
        } else if (index === 2) {
            $(".jiantou2").css("left", "18.9rem");
            $(".jiantou").css("display", "block");
            $(".choose-list-wrap").css("width", $("#goods3 li").length * 6.5 + "rem")
            $("#icon-a").css("backgroundImage", "url('./img/jiaju1_2.png')");
            $("#icon-b").css("backgroundImage", "url('./img/jiaju2_2.png')");
            $("#icon-c").css("backgroundImage", "url('./img/jiaju3_1.png')");
            $("#icon-d").css("backgroundImage", "url('./img/jiaju4_2.png')");
            $("#icon-e").css("backgroundImage", "url('./img/jiaju5_2.png')");
        } else if (index === 3) {
            $(".jiantou2").css("left", "25.6rem");
            $(".jiantou").css("display", "block");
            $(".choose-list-wrap").css("width", $("#goods4 li").length * 6.5 + "rem")
            $("#icon-a").css("backgroundImage", "url('./img/jiaju1_2.png')");
            $("#icon-b").css("backgroundImage", "url('./img/jiaju2_2.png')");
            $("#icon-c").css("backgroundImage", "url('./img/jiaju3_2.png')");
            $("#icon-d").css("backgroundImage", "url('./img/jiaju4_1.png')");
            $("#icon-e").css("backgroundImage", "url('./img/jiaju5_2.png')");
        } else if (index === 4) {
            $(".jiantou2").css("left", "32.5rem");
            $(".jiantou").css("display", "none");

            $(".choose-list-wrap").css("width", $("#goods5 li").length * 6.5 + "rem")
            $("#icon-a").css("backgroundImage", "url('./img/jiaju1_2.png')");
            $("#icon-b").css("backgroundImage", "url('./img/jiaju2_2.png')");
            $("#icon-c").css("backgroundImage", "url('./img/jiaju3_2.png')");
            $("#icon-d").css("backgroundImage", "url('./img/jiaju4_2.png')");
            $("#icon-e").css("backgroundImage", "url('./img/jiaju5_1.png')");
        }

        showbag.loadImageOther(imgList[index]);
        $(this).addClass('current').siblings('li').removeClass('current');
        $choose.removeClass('choose-down');
        $choose.find('.choose-list ul').eq(index).removeClass('hide').siblings('ul').addClass('hide');
        chooseListScroll.scrollTo(0, 0);/*物品列表滚动至顶部*/
        setTimeout(function () {
            chooseListScroll.refresh();/*等待展开->物品列表滚动重置*/
        }, 310);

    });
    /*移除、放大物品*/
    $things.on('click', '.del', function () {
        $(this).parents('.thing').remove();
    }).on('touchstart', function (e) {
        if (e.target == this) {
            $('.thing', $(this)).removeClass('thing-touch');
        }
        $('.thing', $(this)).on('touchstart', function (e) {
            e.stopPropagation();
        });
    }).on('click', '.big', function () {
        // showbag.clickScale($(this), 1.1);
        var id = $(this).attr('data-id')
        console.log()
        if (jq('#thingimg-' + id).attr('src').indexOf("_") != -1) {
            jq('#thingimg-' + id).attr('src', imgUrl + $(this).attr('data-img'));
        } else {
            jq('#thingimg-' + id).attr('src', imgUrl + $(this).attr('data-img2'));
        }
    });

    /*阻止微信点击图片预览-解决Android下base64太长无法识别问题*/
    $result.on('click', '.image', function (event) {
        event.preventDefault();
    });
};

/*画布初始化*/
showbag.drawing = function () {
    if (!$things.length) return;
    thingsWidth = $things.width();
    thingsHeight = $things.height();
    rem = showbag.rem();
    if (!$(drawing).length) return;
    drawing.width = showbag.take.ratio(thingsWidth);
    drawing.height = showbag.take.ratio(thingsHeight);
};

function addGoods() {
    // 加载goods
    jq(".choose-list-wrap").html("");
    var goods_html = "";
    for (let i = 0; i < goods_arr.length; i++) {
        var goods_id = i + 1;
        goods_html += '<ul id="goods' + goods_id + '">';
        for (let o = 0; o < goods_arr[i].length; o++) {
            if (goods_arr[i][o].belong == 1) {
                goods_html += '<li class="goods goodsli" data-type="' + goods_arr[i][o].type + '" data-belong="' + goods_arr[i][o].belong + '"  data-gridx="' + goods_arr[i][o].gridx + '" data-gridy="' + goods_arr[i][o].gridy + '" data-gridy="' + goods_arr[i][o].scale + '" data-width="' + goods_arr[i][o].width + '" data-height="' + goods_arr[i][o].height + '" data-img="' + goods_arr[i][o].src + '" data-img2="' + goods_arr[i][o].src2 + '">'
                    + '<img class="goods-img loading-img" src="' + imgUrl + goods_arr[i][o].src + '">'
                    + '</li>'
            } else {
                goods_html += '<li class="goods goodsli" data-type="' + goods_arr[i][o].type + '" data-belong="' + goods_arr[i][o].belong + '"  data-gridx="' + goods_arr[i][o].gridx + '" data-gridy="' + goods_arr[i][o].gridy + '" data-gridy="' + goods_arr[i][o].scale + '" data-width="' + goods_arr[i][o].width + '" data-height="' + goods_arr[i][o].height + '" data-img="' + goods_arr[i][o].src + '" data-img2="' + goods_arr[i][o].src2 + '">'
                    + '<img class="goods-img gray loading-img" src="' + imgUrl + goods_arr[i][o].src + '">'
                    + '</li>'
            }
        }
        goods_html += '</ul>';
    }

    goods_html += '<ul id="goods5" style="width: 35rem;">';
    goods_html += '<li class="goodsli2" id="zx1">'
        + '<img class="goods5-img  loading-img" src="./img/zx1.png">'
        +'</li>'
    +'<li class="goodsli2" id="zx2">'
    + '<img class="goods5-img  loading-img" src="./img/zx2.png">'
    +'</li>'
    +'<li class="goodsli2" id="zx3">'
    + '<img class="goods5-img  loading-img" src="./img/zx3.png">'
    +'</li>'
    +'<li class="goodsli2" id="zx4">'
    + '<img class="goods5-img  loading-img" src="./img/zx4.png">'
    +'</li>';

    goods_html += '</ul>';

    jq(".choose-list-wrap").html(goods_html);

    jq("#zx1").click(function () {
        $(".things").css("backgroundImage", "url('./img/w_bg2.png')");
    })
    jq("#zx2").click(function () {
        $(".things").css("backgroundImage", "url('./img/w_bg3.png')");
    })
    jq("#zx3").click(function () {
        $(".things").css("backgroundImage", "url('./img/w_bg1.png')");
    })
    jq("#zx4").click(function () {
        $(".things").css("backgroundImage", "url('./img/w_bg4.png')");
    })
}

function addGoods2() {
    // 加载goods
    // jq(".swiper-wrapper").html("");
    // var goods_html2 = "";
    // var result = [];
    // for (let i = 0; i < goods_arr.length; i++) {
    //     for (let o = 0; o < goods_arr[i].length; o++) {
    //         if (goods_arr[i][o].belong == 1) {
    //             result.push(goods_arr[i][o]);
    //         }
    //     }
    // }
    //
    // var result2 = [];
    // for (let i = 0; i < result.length; i += 9) {
    //     result2.push(result.slice(i, i + 9));
    // }
    // for (let i = 0; i < result2.length; i++) {
    //     goods_html2 += '<div class="swiper-slide">';
    //     console.log(result2[i]);
    //     for (let o = 0; o < result2[i].length; o++) {
    //         goods_html2 += ' <div data-id="' + result2[i][o].id + '" class="xuanzhe-item">' +
    //             '<img src="' + imgUrl + result2[i][o].src + '">' +
    //             '</div>'
    //     }
    //     goods_html2 += '</div>';
    // }
    // jq(".swiper-wrapper").html(goods_html2);


    jq(".xuanzhe-item").unbind("click").click(function () {

        jq(".xuanzhe-item").removeClass('xuanzhe-item-sle');
        jq(this).addClass('xuanzhe-item-sle');
        console.log(jq(this).attr('data-id'))
    });
}

function startGame() {
    $welcome.addClass('welcome-out');
    setTimeout(function () {
        $welcome.remove();
    }, 500);
    if (address == "都市高层") {
        $(".things").css("backgroundImage", "url('./img/w_bg2.png')");
    }else if (address == "日式庭院"){
        $(".things").css("backgroundImage", "url('./img/w_bg3.png')");
    }else if (address == "滨海别墅"){
        $(".things").css("backgroundImage", "url('./img/w_bg1.png')");
    }else if (address == "欧式花园"){
        $(".things").css("backgroundImage", "url('./img/w_bg4.png')");
    }

    $(".choose-list-wrap").css("width", $("#goods1 li").length * 6.5 + "rem");

    $(".things").css("width", wf_width * things_wh + "px");
    $(".things").css("height", (wf_width * things_wh) / things_bili + "px");
    $(".things").css("left", (wf_width - wf_width * things_wh) / 2 + "px");
    $(".things").css("top", "4.5rem");

    $(".things2").css("width", wf_width * things_wh + 5 + "px");
    $(".things2").css("height", (wf_width * things_wh) / things_bili + 10 + "px");
    $(".things2").css("left", (wf_width - wf_width * things_wh) / 2 + 5 + "px");
    $(".things2").css("top", "4rem");

    var choose_top = parseInt($(".things2").css("top")) +parseInt($(".things2").css("height")) +50
    console.log("choose_top",choose_top);
    jq("#choose").css("top", choose_top + "px");
    /*生成当前地址二维码*/
    showbag.onloadJS(cdnUrl + '/js/qrcode.min.js', function () {
        var showbagQrcode = new QRCode('linkQrcode', {
            text: window.location.href,
            width: 400,
            height: 400,
            correctLevel: QRCode.CorrectLevel.L
        });
    });

    /*物品列表滚动条初始化*/
    showbag.onloadJS(cdnUrl + '/js/iscroll.min.js', function () {
        // var myScroll = new IScroll('#chooseListScroll', { scrollX: true, scrollY: false, mouseWheel: true });
        chooseListScroll = new IScroll('#chooseListScroll', {
            tap: true,
            scrollX: true,
            scrollY: false,
            hScrollbar: false,
            vScrollbar: false,
            vScroll: false
        });

    });
}

/*拍照*/
showbag.take = function () {
    if (inTaking || !$(drawing).length) return;
    inTaking = true;
    showbag.waiting('图片生成中');
    $take.addClass('choose-taking');
    var ctx = drawing.getContext('2d');
    var thingsWidthRatio = showbag.take.ratio(thingsWidth);
    var thingsHeightRatio = showbag.take.ratio(thingsHeight);
    var remRatio = showbag.take.ratio(rem);
    var textLeft = .5 * remRatio;
    var thingLen = $('.thing', $things).length;
    /*1.画底色 start*/
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, thingsWidthRatio, thingsHeightRatio);
    /*1.画底色 end*/
    /*2.画背景 start*/
    var bg = new Image();
    bg.src = imgUrl + 'bg.jpg';
    bg.onload = function () {
        ctx.drawImage(bg, 0, (thingsHeightRatio - (thingsWidthRatio * 2.2)) / 2, thingsWidthRatio, thingsWidthRatio * 2.2);/*2.2为背景高宽比*/
        thingContentDraw();/*画物品*/
    }
    /*2.画背景 end*/

    var countDraw = 0;/*计数*/

    var thingContentDraw = function () {
        if ($('.thing', $things).length) {
            /*3.画多个物品 start*/
            thingImageDraw($('.thing', $things).eq(countDraw));
            /*3.画多个物品 end*/
        } else {
            thingFooterDraw();/*画底部*/
        }
    };

    var thingImageDraw = function (obj) {
        var img = new Image(), width = showbag.take.pixel($(obj).css('width')),
            height = showbag.take.pixel($(obj).css('height')), left = showbag.take.pixel($(obj).css('left')),
            top = showbag.take.pixel($(obj).css('top'));
        // img.crossOrigin = 'Anonymous';
        img.onload = function () {
            ctx.drawImage(img, left, top, width, height);
            if (countDraw >= thingLen - 1) {/*当画完最后一个物品*/
                thingFooterDraw();/*画底部*/
            } else {
                countDraw++;
                thingImageDraw($('.thing', $things).eq(countDraw));
            }
        };
        img.onerror = function () {
            thingFooterDraw();/*画底部*/
        };
        img.src = $(obj).find('img').attr('src');
    };

    var thingFooterDraw = function () {
        var slogan = showbag.createSlogan();
        /*4.画底部底色 start*/
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, thingsHeightRatio - (2.2 * remRatio), thingsWidthRatio, 2.2 * remRatio);
        /*4.画底部底色 end*/
        /*5.画底部文案 start*/
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#333';
        ctx.font = 'bold ' + (.24 * remRatio) + 'px Microsoft YaHei';
        ctx.fillText('#今天翻我的包#', textLeft, thingsHeightRatio - 1.54 * remRatio);
        ctx.fillStyle = '#444';
        ctx.font = .23 * remRatio + 'px Microsoft YaHei';
        ctx.fillText(slogan, textLeft, thingsHeightRatio - 1.1 * remRatio);
        ctx.fillStyle = '#aaa';
        ctx.font = .21 * remRatio + 'px Microsoft YaHei';
        ctx.fillText('扫码翻出你的包', textLeft, thingsHeightRatio - .6 * remRatio);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#bcbcbc';
        ctx.moveTo(textLeft, thingsHeightRatio - (1.1 + .2) * remRatio);
        ctx.lineTo(textLeft + (.23 * slogan.length * remRatio), thingsHeightRatio - (1.1 + .2) * remRatio);/*每个字23，共11个字*/
        ctx.stroke();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#bcbcbc';
        ctx.moveTo(textLeft, thingsHeightRatio - (1.1 - .2) * remRatio);
        ctx.lineTo(textLeft + (.23 * slogan.length * remRatio), thingsHeightRatio - (1.1 - .2) * remRatio);/*每个字23，共11个字*/
        ctx.stroke();
        /*5.画底部文案 end*/
        /*6.画底部二维码 start*/
        var qrcode = new Image();
        qrcode.src = $('#linkQrcode img').attr('src');
        if (qrcode.complete) {
            thingQrcodeDraw(qrcode);
            return
        }
        qrcode.onload = function () {
            thingQrcodeDraw(qrcode);
        };
        /*6.画底部二维码 end*/
    };

    var thingQrcodeDraw = function (qrcode) {
        ctx.drawImage(qrcode, thingsWidthRatio - 1.7 * remRatio, thingsHeightRatio - 1.7 * remRatio, 1.26 * remRatio, 1.26 * remRatio);
        /*6.当画完底部二维码，生成图片 start*/
        var image = drawing.toDataURL('image/png');/*浏览器出于安全性考虑，本地会报错*/
        $result.removeClass('hide').find('.image').attr('src', image);
        inTaking = false;
        $take.removeClass('choose-taking');
        showbag.waiting.remove();
        /*6.当画完底部二维码，生成图片 end*/

    };

};

/*拍照-返回修改*/
showbag.take.back = function () {
    $result.addClass('hide');
};

/*获取相应像素密度的值，解决canvas存在模糊问题*/
showbag.take.ratio = function (val) {
    return val * ratio;
};

/*获取像素值*/
showbag.take.pixel = function (str) {
    return showbag.take.ratio(str.substr(0, str.length - 2));
};

/*获取页面rem*/
showbag.rem = function () {
    var boundWidth = document.documentElement.getBoundingClientRect().width;
    var rem = boundWidth / 6.4 > 100 ? 100 : (boundWidth / 6.4 < 50 ? 50 : boundWidth / 6.4);
    return rem;
};

/*显示当前拖动*/
showbag.touch = function (obj) {
    $(obj).addClass('thing-touch').siblings('.thing').removeClass('thing-touch');
};

/*单指拖动图片，双指缩放图片*/
showbag.touchScale = function (thing) {
    var startX, startY, startY, endX, endY, scale, x1, x2, y1, y2, imgLeft, imgTop, imgWidth, imgHeight,
        one = false, /*区分屏幕上现在是一根手指还是两根手指，因为在滑动的时候两根手指先离开一根会触发一根手指移动图片位置这个方法*/
        $touch = $(thing),
        originalWidth = $touch.width(),
        originalHeight = $touch.height(),
        baseScale = parseFloat(originalWidth / originalHeight);
    showbag.touch(thing);/*thing-touch自动回到当前*/
    function siteData(name) {
        imgLeft = parseInt(name.css('left'));
        imgTop = parseInt(name.css('top'));
    }

    var dian1_x = 0;
    var dian1_y = 0;
    var dian2_x = 0;
    var dian2_y = 0;
    var dian1_x_jl = 0;
    var dian1_y_jl = 0;
    var end_x2 = 0;
    var end_y2 = 0;
    var dian2_x_jl = 0;
    var dian2_y_jl = 0;
    var val1_d = 0;
    var val2_d = 0;

    $(thing).on('touchstart touchmove touchend', function (event) {

        var $self = $(this),
            touch1 = event.targetTouches[0],  /* 第一根手指touch事件*/
            touch2 = event.targetTouches[1],  /* 第二根手指touch事件*/
            fingers = event.touches.length;   /* 屏幕上手指数量*/
        /*手指放到屏幕上的时候，还没有进行其他操作*/

        if (event.type == 'touchstart') {
            originalWidth = $touch.width();
            originalHeight = $touch.height();
            baseScale = parseFloat(originalWidth / originalHeight);
            if (fingers == 2) {
                /* 缩放图片的时候X,Y坐标起始值*/
                startX = Math.abs(touch1.pageX - touch2.pageX);
                startY = Math.abs(touch1.pageY - touch2.pageY);
                one = false;
            } else if (fingers == 1) {
                x1 = touch1.pageX;
                y1 = touch1.pageY;
                one = true;
            }
            siteData($self);
            showbag.touch($self);
        }
        /*手指在屏幕上滑动*/
        else if (event.type == 'touchmove') {
            if (fingers == 2) {
                /* 缩放图片的时候X,Y坐标滑动变化值*/
                endX = Math.abs(touch1.pageX - touch2.pageX) - startX;
                endY = Math.abs(touch1.pageY - touch2.pageY) - startY;
                scale = Math.abs(endX) > Math.abs(endY) ? endX : endY;
                $self.css({
                    // 'width' : originalWidth + scale,
                    // 'height' : (originalWidth + scale)/baseScale,
                    'left': imgLeft - scale / 2,
                    'top': imgTop - (scale / 2 / baseScale)
                });


            } else if (fingers == 1) {
                x2 = touch1.pageX;
                y2 = touch1.pageY;
                if (one) {
                    var gridy = $(thing).attr('data-gridy');
                    var gridx = $(thing).attr('data-gridx');
                    var type = $(thing).attr('data-type');
                    var img_src = jq($(thing).selector+' img').attr('src');
                    console.log("img_src",img_src);
                    // 反向



                    var gridy_chengji = 0;
                    var gridx_chengji = 0;
                    if (gridy == 1) {
                        gridy_chengji = 1
                    } else if (gridy == 2) {
                        gridy_chengji = 1.5
                    } else if (gridy == 3) {
                        gridy_chengji = 2
                    } else if (gridy == 4) {
                        gridy_chengji = 2.5
                    } else if (gridy == 5) {
                        gridy_chengji = 3
                    } else if (gridy == 6) {
                        gridy_chengji = 3.5
                    }
                    var allgrid = 0;
                    var allgridx = 0;
                    if (gridy > gridx) {
                        allgrid = gridy
                         allgridx = one_width * (allgrid - (gridy-gridx)*0.5)
                    } else if (gridy < gridx) {
                        allgrid = gridx
                        allgridx = one_width * (allgrid - (gridx-gridy)*0.5)
                    } else {
                        allgrid = gridx
                        allgridx = one_width * allgrid
                    }
                    console.log(allgridx)

                   console.log("allgridx",allgridx);

                    if (img_src.indexOf("_") != -1) {
                        // 反向
                        // 左点
                        dian1_x = imgLeft + (x2 - x1)
                        // dian1_x =  parseFloat($(thing).css("left"));
                        dian1_y = imgTop + (y2 - y1) + parseInt($(thing).css('height'))  - gridy * one_height /2;
                        // 右点
                        dian2_x = imgLeft + (x2 - x1) + allgridx;
                        // dian2_x = parseFloat($(thing).css("left")) + gridy_chengji * one_width
                        dian2_y =  imgTop + (y2 - y1) + parseInt($(thing).css('height'))  - gridx * one_height /2;
                        // dian2_y = parseFloat($(thing).css("top")) + parseInt($(thing).css('height')) - one_height * 1.5
                    } else {
                        // 正向
                        // 左点
                        dian1_x = imgLeft + (x2 - x1)
                        // dian1_x =  parseFloat($(thing).css("left"));
                        dian1_y = imgTop + (y2 - y1) + parseInt($(thing).css('height')) - gridx * one_height / 2;
                        // 右点
                        dian2_x = imgLeft + (x2 - x1) + allgridx;
                        // dian2_x = parseFloat($(thing).css("left")) + gridy_chengji * one_width
                        dian2_y = imgTop + (y2 - y1) + parseInt($(thing).css('height')) - gridy * one_height /2;
                        // dian2_y = parseFloat($(thing).css("top")) + parseInt($(thing).css('height')) - one_height * 1.5
                        console.log("dian2_x",dian2_x);
                        console.log("dian2_y",dian2_y);
                    }

                    var val_1 = (ding_y - left_y) * dian1_x + (left_x - ding_x) * dian1_y - (ding_y - left_y) * left_x + (ding_x - left_x) * left_y
                    var val_2 = Math.sqrt(((ding_y - left_y) * (ding_y - left_y) + (left_x - ding_x) * (left_x - ding_x)))

                    var val_3 = (right_y - ding_y) * dian2_x + (ding_x - right_x) * dian2_y - (right_y - ding_y) * ding_x + (right_x - ding_x) * ding_y
                    var val_4 = Math.sqrt(((right_y - ding_y) * (right_y - ding_y) + (ding_x - right_x) * (ding_x - right_x)))

                    val1_d = val_1 / val_2;
                    val2_d = val_3 / val_4;

                    if (val1_d < 0 && val2_d<0 ) {
                        dian1_x_jl = dian1_x;
                        dian1_y_jl = dian1_y;
                    }
                    if (type == 0) {
                        if (val1_d < 0 && val2_d < 0  ) {
                            $self.css({
                                'left': imgLeft + (x2 - x1),
                                'top': imgTop + (y2 - y1)
                            });
                        }
                    }else if (type == 1) {
                        $self.css({
                            'left': imgLeft + (x2 - x1),
                            'top': imgTop + (y2 - y1)
                        });
                    }
                }
            }
        }
        /*手指移开屏幕*/
        else if (event.type == 'touchend') {
            /* 手指移开后保存图片的宽*/
            originalWidth = $touch.width();
            originalHeight = $touch.width();

            // 归位
            // 判断距离哪个点最近
            var sort_arr = [];
            for (var i = 0; i < dian_arr.length; i++) {
                var sort_obj = {};
                sort_obj.x = dian_arr[i].x;
                sort_obj.y = dian_arr[i].y;

                sort_obj.d = Math.abs(Math.sqrt((dian1_x_jl - dian_arr[i].x) * (dian1_x_jl - dian_arr[i].x) + (dian1_y_jl - dian_arr[i].y) * (dian1_y_jl - dian_arr[i].y)));
                sort_arr.push(sort_obj)
            }
            sort_arr.sort(function (a, b) {
                return a.d - b.d
            });

            var x_d = sort_arr[0].x;
            var y_d = sort_arr[0].y - dian1_y_jl;
            var thing_x = parseFloat($(thing).css("left"));
            var thing_y = parseFloat($(thing).css("top"));
            console.log("x_d", x_d);
            console.log("sort_arr[0].y ", sort_arr[0].y );
            console.log("y_d", y_d);
            console.log("sort_arr", sort_arr);

            console.log("val2_d",val2_d);
            // if (end_y2!=thing_y + y_d && x_d != end_x2) {
            //     jq(thing).animate({left: x_d + 'px', top: thing_y + y_d + 'px'}, 400, function () {
            //         end_x2 = parseFloat($(thing).css("left"))
            //         end_y2 = parseFloat($(thing).css("top"))
            //
            //         console.log("end_x2", end_x2);
            //         console.log("end_y2", end_y2);
            //     });
            // } else {
            //     jq(thing).animate({left: end_x2 + 'px', top: end_y2+ 'px'}, 400, function () {
            //     });
            //
            //     end_x2 = parseFloat($(thing).css("left"))
            //     end_y2 = parseFloat($(thing).css("top"))
            //     console.log("end_x2", end_x2);
            //     console.log("end_y2", end_y2);
            // }


            // console.log("sort_arr", sort_arr);
            siteData($self);
            showbag.touchSort($self);/*拖动完成后排序*/
        }
    });
};

/*点击放大*/
showbag.clickScale = function (thing, multiple) {
    var $thing = $(thing).parent('.thing');
    if ($thing.hasClass('transition')) return;
    $thing.css({
        'width': $thing.width() * multiple,
        'height': $thing.height() * multiple,
        'left': $thing.position().left - ($thing.width() * multiple - $thing.width()) / 2,
        'top': $thing.position().top - ($thing.height() * multiple - $thing.height()) / 2
    }).addClass('transition');
    setTimeout(function () {
        $thing.removeClass('transition');
    }, 300);
};

/*拖动完成后排序*/
showbag.touchSort = function (obj) {
    var thing = $(obj).attr('id');
    /*调整到最后面*/
    if ($(obj).next().length) {
        $things.append($(obj).clone());
        $(obj).remove();
        showbag.touchScale($('#' + thing));
    }
    /*调整到最后面 end*/
};

/*添加js文件*/
showbag.onloadJS = function (url, callback) {
    var script = document.createElement('script')
    script.src = url
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = callback
};

/*随机文案*/
var sloganIndex = 0;
var slogans = [
    {title: '你包里有药，我包里有刀'},
    {title: '壕包里的一万种可能'},
    {title: '那些年的旧物与新欢'},
    {title: '装满自己给的安全感'},
    {title: '把全世界装好带走，唯独带不走你'},
    {title: '大包套小包 小包套What？'},
    {title: '社会我佩奇，我妈都觉得时髦'},
    {title: '论一只好脾气包包的自我修养'},
    {title: '朋克养生佛系青年，跟爷走起'},
    {title: '哆啦A梦口袋的前世今生'}
];

showbag.indexSlogan = function () {
    var arr = [];
    for (var i = 0; i < slogans.length; i++) {
        arr.push(i);
    }
    arr.sort(
        function () {
            return 0.5 - Math.random();
        }
    );
    return arr;
};
var sloganIndexArray = showbag.indexSlogan();/*生成随机序号，前11道题不重复*/

showbag.createSlogan = function () {
    if (sloganIndex >= sloganIndexArray.length) {
        sloganIndexArray = showbag.indexSlogan();/*重新生成序号*/
        sloganIndex = 0;
    }
    var slogan = slogans[sloganIndexArray[sloganIndex]];
    sloganIndex++;
    return slogan.title;
};

/*生成中提示*/
showbag.waiting = function (txt) {
    var txt = txt ? txt : '';
    if ($('.loading-wait').length) {
        $('.loading-wait').attr('data-txt', txt);
    } else {
        $('body').append('<div class="loading-wait" data-txt="' + txt + '"></div>');
    }
};

showbag.waiting.remove = function () {
    $('.loading-wait').remove();
};