/*
*Created by 2018-3-13 wangshanshan
*
 */
// 跳转页面
$(document).ready(function(){
    $("#header_login").click(function(){
        $('#text').css('background','none')
        $('.header span').removeClass('header_active')
        $('#text').load('html/control.html');
    });
    $("#a_witness").click(function(){
        $('#text').css('background','none')
        $(this).addClass('header_active').siblings().removeClass('header_active')
        $('#text').load('html/witness.html');
    });
    $('#acco').click(function () {
        $('#text').css('background','none')
        $(this).addClass('header_active').siblings().removeClass('header_active')
        $('#text').load('html/accountQuery.html');
    });
    $('.j_left').click(function () {
        $('#text').css('background','none')
        $(this).addClass('header_active').siblings().removeClass('header_active')
        $('#text').load('html/message.html');
    });
    $('#center').click(function () {
        $('.header span').removeClass('header_active')
        $('#text').load('html/login.html');
    });
    $('#money').click(function () {
        $(this).addClass('header_active').siblings().removeClass('header_active')
        $('#text').load('html/transform.html');
        $('#text').css('background','url(img/bg.png)')

    });
    $('#create').click(function () {
        $('#text').load('html/login.html');
        $('.header span').removeClass('header_active');
        $('#text').css('background','url(img/bg.png)')
    });

})

//





