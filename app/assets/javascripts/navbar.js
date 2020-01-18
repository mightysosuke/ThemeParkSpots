$(window).ready(function(){
    //windowの幅をxに代入
    const default_size = $(window).width();
    //windowの分岐幅をyに代入
    const breakpoint_size = 768;
    if (default_size < breakpoint_size) {
        $('#new-btn').addClass('my-2');
        $('#login-btn').addClass('my-2');
        console.log("aaaa");
    }else{
        $('#new-btn').addClass('px-3 min-vw-30 rounded-pill');
        $('#login-btn').addClass('min-vw-20 rounded-pill ml-4');
        console.log("bbbb");
    }
});
