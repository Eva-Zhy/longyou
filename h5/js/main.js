var imgs = 0;
var allimgs = 4;
var save_base = '';
var hetu_base = '';
var address = "";
var taici_num = 0;
jq('.loading-img').imagesLoaded().always(function () {
    console.log("ok")
    jq("#bfb").text("100%");
    jq(".bar-v").css("width", "100%");

    setTimeout(function () {
        jq('.loading-bar').animate({opacity: 0}, 1000, function () {
            jq('.loading-bar').css("display", "none");
        })
        jq('#bfb').animate({opacity: 0}, 1000, function () {
            jq('#bfb').css("display", "none");

            jq('#z2').animate({opacity: 1}, 1000, function () {
            })
            jq("#logo").css("display", "block");
            jq("#start_btn").css("display", "block");
            jq('#logo').animate({opacity: 1}, 1000, function () {
            })
            jq('#start_btn').animate({opacity: 1}, 1000, function () {
                jq('#start_btn').click(function () {
                    console.log(1)
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
}).progress(function (instance, image) {
    imgs++;
    var bfb = GetPercent(imgs, allimgs);
    console.log(bfb)
    jq("#bfb").text(bfb);
    jq(".bar-v").css("width", bfb);
});

function GetPercent(num, total) {
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
        return "-";
    }
    return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00 + "%");
}


addSelectClick();


function addSelectClick() {
    jq('.select-item').click(function () {
        var id = jq(this).attr('data-id');
        console.log(id);
        if (id === 1) {
            address = '东京';
        } else if (id === 2) {
            address = '千鹤町';
        } else if (id === 3) {
            address = '西伯利亚';
        } else if (id === 4) {
            address = '爱媛县';
        } else {
            address = '东京';
        }

        jq('.select-v').css('display', 'none');
        jq('.bianfang-v').css('display', 'block');
        startGame()
    });
    jq('.g_btn3').click(function () {
        jq('.bianfang-v').css('display', 'none');
        jq('.qipan-v').css('display', 'block');
    });
    jq('.g_btn1').click(function () {
        console.log(html2canvas)
        jq(".thing").removeClass("thing-touch");
        // showbag.take();
        setTimeout(function () {
            html2canvas(document.querySelector("#mythings")).then(function (canvas) {
//            document.querySelector(".share-img").appendChild(canvas);
                save_base = canvas.toDataURL('image/jpeg');

                jq('.bianfang-v').css('display', 'none');
                jq('.fangcz-v').css('display', 'block');
                jq('.hetu').attr('src', save_base);

                jq('#address').html("地址：" + address);
                jq("#up").click(function () {
                    jq('#xuanyan' + taici_num).css('display', 'none');
                    if (taici_num === 0) {
                        taici_num = 5
                    } else {
                        taici_num--;
                    }
                    jq('#xuanyan' + taici_num).css('display', 'block');
                });
                jq("#down").click(function () {
                    jq('#xuanyan' + taici_num).css('display', 'none');
                    if (taici_num === 5) {
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
                                $("#share_img").css('display','block');
                                $("#share_img").attr('src',hetu_base);
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


