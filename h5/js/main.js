var imgs = 0;
var allimgs = 4;
$('.loading-img').imagesLoaded().always(function () {
    console.log("ok")
    $("#bfb").text("100%");
    $(".bar-v").css("width", "100%");

    setTimeout(function () {
        $('.loading-bar').animate({opacity:0},1000,function () {
            $('.loading-bar').css("display","none");
        })
        $('#bfb').animate({opacity:0},1000,function () {
            $('#bfb').css("display","none");

            $('#z2').animate({opacity:1},1000,function () {
            })
            $("#logo").css("display", "block");
            $("#start_btn").css("display", "block");
            $('#logo').animate({opacity:1},1000,function () {
            })
            $('#start_btn').animate({opacity:1},1000,function () {
                $('#start_btn').click(function () {
                    console.log(1)
                    $(".loading-v").css("display","none");
                    $(".select-v").css("display","block");
                });
            })
        })

    },1000);
}).progress(function (instance, image) {
    imgs++;
    var bfb = GetPercent(imgs, allimgs);
    console.log(bfb)
    $("#bfb").text(bfb);
    $(".bar-v").css("width", bfb);
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
    $(".select-item").click(function () {
        console.log(1);
    })
}