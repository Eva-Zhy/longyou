window.alert = function(name){
    var iframe = document.createElement("IFRAME");
    iframe.style.display="none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
};

var w_width = document.body.clientWidth;
var now_pos = 0;
var jump_v = 28;
var bili = 375 / document.body.clientWidth;
var can = true;
console.log(w_width)
console.log(bili)
jq(document).ready(function () {
    jq(".qipan").css("height", w_width / 1.62 + 'px');
    jq("#qz").css({width: 70 / bili + "px", height: 70 / bili + "px"});
    jq("#qz").css({"top": (gezhi[now_pos].top- 18)  / bili + "px", "left": (gezhi[now_pos].left -10) / bili + "px"});

    jq("#saizi").click(function () {
        if (can) {
            can = false;

            var i = 0;
            var saiziAni = setInterval(function () {
                i++
                if (i<7) {
                    var ranNum_ani = randomNum(1, 6)
                    jq("#saizi").attr('src','./img/num'+ranNum_ani+'.png')
                } else {
                    clearInterval(saiziAni);
                    var ranNum = randomNum(1, 6);
                    jq("#saizi").attr('src','./img/num'+ranNum+'.png')
                    setTimeout(function () {
                        moveQz(ranNum);
                    },200);
                }
            },100);
        }
    })
});

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

function moveQz(num) {
    num--;
    var min_top = 0;
    var min_left = 0;
    var end_top = 0;
    var end_left = 0;
    if (now_pos === 23) {
        min_top = ((gezhi[now_pos].top + gezhi[0].top - 18) / 2 - jump_v) / bili;
        min_left = ((gezhi[now_pos].left + gezhi[0].left - 10) / 2) / bili;
        end_top = (gezhi[0].top - 18) / bili;
        end_left = (gezhi[0].left - 10) / bili;
    } else {
        min_top = ((gezhi[now_pos].top + gezhi[now_pos + 1].top - 18) / 2 - jump_v) / bili;
        min_left = ((gezhi[now_pos].left + gezhi[now_pos + 1].left - 10) / 2) / bili;
        end_top = (gezhi[now_pos + 1].top - 18) / bili;
        end_left = (gezhi[now_pos + 1].left - 10) / bili;
    }

    // var next = gezhi[now_pos].next;
    // next 0 上 1 右 2 下 3左

    jq("#qz").animate({top: min_top + "px", left: min_left + "px"}, 300, function () {
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
                console.log("type",gezhi[now_pos].type);
                // if (gezhi[now_pos].type === 1) {
                    $(".qipan-v").css('display','none');
                    $(".lihe-v").css('display','block');
                // }
            }
        });
    });
}