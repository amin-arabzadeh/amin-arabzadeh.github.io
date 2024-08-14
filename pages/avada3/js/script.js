$(document).ready(function(){

    let key;

    $('.box1').addClass('none')
    $($('li')[1]).mouseenter(function(){
        $('.box1').removeClass('none')
        setTimeout(function(){
            $('.box1').addClass('show-mene')
        },1)
        

    })

    $($('li')[1]).mouseleave(function(){
        $('.box1').removeClass('show-mene')
        key=setTimeout(function(){
            $('.box1').addClass('none')

        },400)

    })

    $('.box1').mouseenter(function(){
        clearTimeout(key)

        $('.box1').removeClass('none')
        setTimeout(function(){
            $('.box1').addClass('show-mene')
        },1)
    })

    $('.box1').mouseleave(function(){

        $('.box1').removeClass('show-mene')
        key=setTimeout(function(){
            $('.box1').addClass('none')

        },400)
    })




    $('.box2').addClass('none')
    $($('li')[3]).mouseenter(function(){
        $('.box2').removeClass('none')
        setTimeout(function(){
            $('.box2').addClass('show-mene')
        },1)
        

    })

    $($('li')[3]).mouseleave(function(){
        $('.box2').removeClass('show-mene')
        key=setTimeout(function(){
            $('.box2').addClass('none')

        },400)

    })

    $('.box2').mouseenter(function(){
        clearTimeout(key)

        $('.box2').removeClass('none')
        setTimeout(function(){
            $('.box2').addClass('show-mene')
        },1)
    })

    $('.box2').mouseleave(function(){

        $('.box2').removeClass('show-mene')
        key=setTimeout(function(){
            $('.box2').addClass('none')

        },400)
    })

    $('.toggle').click(function(){

        $('.menu').slideToggle(150)


    })

    $($('.down')[0]).click(function(){
        $($('.down')[0]).toggleClass('rotate')
        $($('.sub')[0]).slideToggle(150)

        $($('.down')[1]).removeClass('rotate')
        $($('.sub')[1]).slideUp(150)

    })

    $($('.down')[1]).click(function(){
        $($('.down')[1]).toggleClass('rotate')
        $($('.sub')[1]).slideToggle(150)

        $($('.down')[0]).removeClass('rotate')
        $($('.sub')[0]).slideUp(150)

    })



})