const login_box=document.querySelector('.login-box');
const btn_menu=document.querySelector('.btn-menu');
const subtitle=document.querySelector('.subtitle');
const subtitle_box=document.querySelector('.subtitle-box')

const line=document.querySelector('.line');
const line2=document.querySelector('.line2');
const nav=document.querySelector('.nav');
const nav2=document.querySelector('.nav2');

const div3=document.querySelector('.div3');
const login2=document.querySelector('.login2');

const btn1=document.querySelectorAll('.btn1');

const search=document.querySelectorAll('.search');
const close1=document.querySelectorAll('.close1');
const close2=document.querySelectorAll('.close2');
const menu=document.querySelectorAll('.menu');

const a_search=document.querySelectorAll('.a-search');
const a_clos=document.querySelectorAll('.a-clos');

const a_menu=document.querySelectorAll('.a-menu');
const a_clos2=document.querySelectorAll('.a-clos2');

const a_header=document.querySelector('.a-header');
const div2=document.querySelector('.div2');


btn1[0].addEventListener('click',function(){
    login_box.classList.toggle('show');
    subtitle.classList.remove('shoe-subtitle');
    search[0].classList.toggle('hide');
    close1[0].classList.toggle('show2');
    a_search[0].classList.toggle('hide');
    a_clos[0].classList.toggle('show2');

    menu[0].classList.remove('hide');
    close2[0].classList.remove('show2');
    a_menu[0].classList.remove('hide');
    a_clos2[0].classList.remove('show2');

    subtitle_box.classList.remove('shoe-subtitle');

});

btn1[1].addEventListener('click',function(){
    div3.classList.toggle('show-div3');
    subtitle.classList.remove('shoe-subtitle');
    search[1].classList.toggle('hide');
    close1[1].classList.toggle('show2');
    a_search[1].classList.toggle('hide');
    a_clos[1].classList.toggle('show2');

    menu[0].classList.remove('hide');
    close2[0].classList.remove('show2');
    a_menu[0].classList.remove('hide');
    a_clos2[0].classList.remove('show2');

    subtitle_box.classList.remove('shoe-subtitle');
});

btn_menu.addEventListener('click',function(){
    subtitle.classList.toggle('shoe-subtitle');
    subtitle_box.classList.toggle('shoe-subtitle');

    div3.classList.remove('show-div3');
    login_box.classList.remove('show');

    menu[0].classList.toggle('hide');
    close2[0].classList.toggle('show2');
    a_menu[0].classList.toggle('hide');
    a_clos2[0].classList.toggle('show2');

    search[1].classList.remove('hide');
    close1[1].classList.remove('show2');
    a_search[1].classList.remove('hide');
    a_clos[1].classList.remove('show2');

    search[0].classList.remove('hide');
    close1[0].classList.remove('show2');
    a_search[0].classList.remove('hide');
    a_clos[0].classList.remove('show2');

});



window.addEventListener('click',function(x){
    if(x.target==login_box){
        login_box.classList.remove('show');
        search[0].classList.toggle('hide');
        close1[0].classList.toggle('show2');
        a_search[0].classList.toggle('hide');
        a_clos[0].classList.toggle('show2');
        

        search[1].classList.remove('hide');
        close1[1].classList.remove('show2');
        a_search[1].classList.remove('hide');
        a_clos[1].classList.remove('show2');

        
    }
})
window.addEventListener('click',function(x){
    if(x.target==subtitle_box){
        subtitle_box.classList.remove('shoe-subtitle');
        subtitle.classList.remove('shoe-subtitle');
        menu[0].classList.toggle('hide');
        close2[0].classList.toggle('show2');
        a_menu[0].classList.toggle('hide');
        a_clos2[0].classList.toggle('show2');


        menu[1].classList.toggle('hide');
        close2[1].classList.toggle('show2');
        a_menu[1].classList.toggle('hide');
        a_clos2[1].classList.toggle('show2');

    }
})
window.addEventListener('scroll',function(){
    if(this.window.scrollY>530){
        line2.classList.add('show-lin2')
        line.classList.add('show-lin')
        div3.style.display='block'
        login_box.classList.add('log')
        
        
    }
    else{






        login_box.classList.remove('log')
        div3.style.display='none'

        
        
        line.classList.remove('show-lin')
        line2.classList.remove('show-lin2')


    }
})






window.addEventListener('scroll',function(){
    // if(this.window.scrollY>530){
    //     btn1.addEventListener('click',function(){
    //         div3.classList.toggle('show-div3')
    //     })
    // }
    // else{
    //     div3.classList.remove('show-div3')
    //     login_box.classList.remove('show');

    // }
    
    // if(window.scrollY>530){
    //     btn1.addEventListener('click',function(){
    //         login_box.classList.remove('show');
    //     })
    // }
    // else{
    //     btn1.addEventListener('click',function(){
    //         login_box.classList.toggle('show');
    //         div3.classList.remove('show-div3');
    //     })

    //     div3.classList.remove('show-div3');
    // }
})


console.log(nav2)
window.addEventListener('scroll',function(){
    if(window.scrollY>520){

        line.classList.add('changline');
        nav.classList.add('change2')
        nav2.classList.add('change')
    }
    else{
        nav.classList.add('change2')
        nav2.classList.remove('change')
        line.classList.remove('changline')


    }
})
const a1=document.querySelector('.a1')
const a2=document.querySelector('.a2')
const a3=document.querySelector('.a3')
const a4=document.querySelector('.a4')
const a5=document.querySelector('.a5')
const a6=document.querySelector('.a6')
const a7=document.querySelector('.a7')
const a8=document.querySelector('.a8')



const con6_col=document.querySelector('.con6-col');
const con10_col=document.querySelector('.con10-col');


window.addEventListener('scroll',function(){
    if(window.scrollY>3110){
        con6_col.classList.add('show-con6')
    }
    else{
        con6_col.classList.remove('show-con6')
    }
    
})
window.addEventListener('scroll',function(){
    if(window.scrollY>6200){
        con10_col.classList.add('show-con10')
    }
    else{
        con10_col.classList.remove('show-con10')
    }
    
})


