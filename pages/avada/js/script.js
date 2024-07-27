$(document).ready(function(){


    const body=document.querySelector('body')
    $('.menu').click(function(){
        $('.ul1').css('transform','translateX(-100%)')
        body.style.overflowY='hidden'
    })

    $('.exit').click(function(){
        $('.ul1').css('transform','translateX(0%)')
        body.style.overflowY='scroll'
    })



})