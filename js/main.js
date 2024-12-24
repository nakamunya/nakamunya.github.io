$(function () {
    // 背景画像のスライドショー設定
    $('#maximage').maximage({
        cycleOptions: {
            timeout: 5000
        }
    });

    // 初期状態で一部セクションを非表示
    $('#c_works').hide();
    $('#c_ourinfo').fadeIn(500);
    $('#bg_mosaic').css('background', 'url("./img/bg_mosaic2_b.png"), url("./img/bg_mosaic3_b.png")');

    // HOMEボタンの動作追加
    $('#b_home').on('click', function () {
        $('#c_ourinfo').hide();
        $('#bg_mosaic').css('background', 'url("./img/bg_mosaic1_b.png")');
    });

    // MY INFOボタンの動作追加
    $('#b_ourinfo').on('click', function () {
        $('#c_ourinfo').fadeIn(500);
        $('#bg_mosaic').css('background', 'url("./img/bg_mosaic2_b.png"), url("./img/bg_mosaic3_b.png")');
    });

    // スムーズスクロールの追加
    $('#b_ourinfo').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#c_ourinfo').offset().top
        }, 800);
    });
});
