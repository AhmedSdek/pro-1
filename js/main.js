/*global $, alert, console */
$(document).ready(function(){
    var myHeader = $('.header'),
        mySlider = $('.slider');
    
    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height());
    // make the item center
        mySlider.each(function(){
            $(this).css('paddingTop',($(window).height() - $('.slider li').height()) / 2)
        });
    });

    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass("active")
    });

    // make the item center
    mySlider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.slider li').height()) / 2)
    });

    // triger bx slider
    mySlider.bxSlider({
        pager: false
    });
    
    // smooth scroll to div 
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        },1000);
    });
    //our auto slider
    (function autoSlider(){
        $('.slide .active').each(function(){
            if (!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(3000, function(){
                    $(this).removeClass('active').next().addClass("active").fadeIn(3000);
                    autoSlider()
                });
            }else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slide div').eq(0).addClass('active').fadeIn(3000);
                    autoSlider();
                });
            };
        });
    }());
    //triger mixitup
    $("#container").mixItUp();
    // shuffle links
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

});
$(function() {  
    $("body").niceScroll({
        cursorcolor: "#1abc9c",
        cursorwidth: "10px",
        zindex: "auto" | [6]
    });
});