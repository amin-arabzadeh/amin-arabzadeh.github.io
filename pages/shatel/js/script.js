$(document).ready(function(){

    let key;
    const search_box=document.querySelector('.search-box')


    $('.li1').click(function(){
        $('.sub-title1').slideToggle(150)
        $('.sub-title7').slideUp(150)
        $('.sub-title6').slideUp(150)
    })



    $('.li2').click(function(){
        $('.sub-title2').slideToggle(150)
        
        $('.sub-title5').slideUp(150)
        $('.sub-title4').slideUp(150)
        $('.sub-title3').slideUp(150)
    })

    $('.li3').click(function(){
        $('.sub-title3').slideToggle(150)
        $('.sub-title2').slideUp(150)
        $('.sub-title5').slideUp(150)
        $('.sub-title4').slideUp(150)
    })

    $('.li4').click(function(){
        $('.sub-title4').slideToggle(150)
        $('.sub-title3').slideUp(150)
        $('.sub-title2').slideUp(150)
        $('.sub-title5').slideUp(150)
    })

    $('.li5').click(function(){
        $('.sub-title5').slideToggle(150)
        $('.sub-title4').slideUp(150)
        $('.sub-title2').slideUp(150)
        $('.sub-title3').slideUp(150)
    })





    $('.li6').click(function(){
        $('.sub-title6').slideToggle(150)
        $('.sub-title1').slideUp(150)
        $('.sub-title7').slideUp(150)
    })

    $('.li7').click(function(){
        $('.sub-title7').slideToggle(150)
        $('.sub-title6').slideUp(150)
        $('.sub-title1').slideUp(150)
    })



    $('.icon1').click(function(){
        $('.box-menu').slideToggle(150)
    })



    $('.li8').mouseenter(function(){
        $('.box1').addClass('show')
    })
    $('.li8').mouseleave(function(){
        key=setTimeout(function(){
            $('.box1').removeClass('show')
        },100)
        
    })
    $('.box1').mouseenter(function(){
        clearInterval(key)
        $('.box1').addClass('show')
    })
    $('.box1').mouseleave(function(){
        $('.box1').removeClass('show')
    })


    $('.li9').mouseenter(function(){
        $('.box2').addClass('show')
    })
    $('.li9').mouseleave(function(){
        key=setTimeout(function(){
            $('.box2').removeClass('show')
        },100)
        
    })
    $('.box2').mouseenter(function(){
        clearInterval(key)
        $('.box2').addClass('show')
    })
    $('.box2').mouseleave(function(){
        $('.box2').removeClass('show')
    })


    $('.search').click(function(){
        $('.search-all').addClass('show')
    })

    $('.exite').click(function(){
        $('.search-all').removeClass('show')
    })
    window.addEventListener('click',function(x){
        if(x.target==search_box){
            $('.search-all').removeClass('show')
        }
    })

    const img =document.querySelectorAll('.img2')
    let index=0;

    $('.right').click(function(){
        img[index].style.animation='next1 0.5s ease-in forwards';
        if(index>=img.length-1){
            index=0
        }
        else{
            index++
        }
        img[index].style.animation='next2 0.5s ease-in forwards';
    })

    $('.left').click(function(){
        img[index].style.animation='next3 0.5s ease-in forwards';
        if(index==0){
            index=img.length-1;
        }
        else{
            index--;
        }
        img[index].style.animation='next4 0.5s ease-in forwards';
    })

    setInterval(function(){
        img[index].style.animation='next1 0.5s ease-in forwards';
        if(index>=img.length-1){
            index=0
        }
        else{
            index++;
        }
        img[index].style.animation='next2 0.5s ease-in forwards';
    },5000)

    const bg=document.querySelectorAll('.bg')
    let index2=0

    $('.right2').click(function(){
        bg[index2].style.animation='next1 0.5s ease-in forwards';
        if(index2>=bg.length-1){
            index2=0
        }
        else{
            index2++
        }
        bg[index2].style.animation='next2 0.5s ease-in forwards';
    })

    $('.left2').click(function(){
        bg[index2].style.animation='next3 0.5s ease-in forwards';
        if(index2==0){
            index2=bg.length-1
        }
        else{
            index2--
        }
        bg[index2].style.animation='next4 0.5s ease-in forwards';
    })


    $($('.dot')[2]).click(function(){
        $($('.box4-item')[0]).css('transform','translateX(-100%)')
        $($('.box4-item')[1]).css('transform','translateX(-100%)')
        $($('.box4-item')[2]).css('transform','translateX(-100%)')
        $($('.box4-item')[3]).css('transform','translateX(-100%)')
        $($('.dot')[2]).addClass('activ-dot')
        $($('.dot')[3]).removeClass('activ-dot')
        $($('.dot')[1]).removeClass('activ-dot')
        $($('.dot')[0]).removeClass('activ-dot')
        console.log('am')
    })
    $($('.dot')[1]).click(function(){
        $($('.box4-item')[0]).css('transform','translateX(-200%)')
        $($('.box4-item')[1]).css('transform','translateX(-200%)')
        $($('.box4-item')[2]).css('transform','translateX(-200%)')
        $($('.box4-item')[3]).css('transform','translateX(-200%)')
        $($('.dot')[1]).addClass('activ-dot')
        $($('.dot')[2]).removeClass('activ-dot')
        $($('.dot')[0]).removeClass('activ-dot')
        $($('.dot')[3]).removeClass('activ-dot')
        console.log('am')
    })
    $($('.dot')[0]).click(function(){
        $($('.box4-item')[0]).css('transform','translateX(-300%)')
        $($('.box4-item')[1]).css('transform','translateX(-300%)')
        $($('.box4-item')[2]).css('transform','translateX(-300%)')
        $($('.box4-item')[3]).css('transform','translateX(-300%)')
        $($('.dot')[0]).addClass('activ-dot')
        $($('.dot')[1]).removeClass('activ-dot')
        $($('.dot')[3]).removeClass('activ-dot')
        $($('.dot')[2]).removeClass('activ-dot')
        console.log('am')
    })
    $($('.dot')[3]).click(function(){
        $($('.box4-item')[0]).css('transform','translateX(0)')
        $($('.box4-item')[1]).css('transform','translateX(0)')
        $($('.box4-item')[2]).css('transform','translateX(0)')
        $($('.box4-item')[3]).css('transform','translateX(0)')
        $($('.dot')[3]).addClass('activ-dot')
        $($('.dot')[2]).removeClass('activ-dot')
        $($('.dot')[0]).removeClass('activ-dot')
        $($('.dot')[1]).removeClass('activ-dot')
        console.log('am')
    })




    console.log($('.dot'))



})