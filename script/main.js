$(document).ready(function(){

let gnb = $('#h_bottom .gnb');

gnb.hover(function(){
$('#h_bottom').stop().animate({'height':'320px'},500);
$('.sub').fadeIn();
},function(){
    $('#h_bottom').stop().animate({'height':'46px'},500);
$('.sub').fadeOut();
});

//메인 슬라이드 구현
let mslide = $('.m_slide ul');
let s_img = $('m_slide img').width();// 이미지 크기를 변수에 저장한다.

//마지막 슬라이드를 맨처음 슬라이드 앞으로 자리를 옮긴다.
$('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child')

mslide.css('margin-left',-s_img)


$(window).resize(function(){ //브라우저 크기가 변하면
    s_img = $('.m_slide img').width();//이미지크기를 다시 설정한다.
    console.log(s_img)
})


//함수 -  왼쪽방향으로 움직이는 슬라이드 함수
function moveLeft(){
mslide.animate({'margin-left':-(s_img*2)},500,function(){
    $('.m_slide ul>li:first-child').insertAfter('.m_slide ul>li:last-child')
    mslide.css('margin-left',-s_img)//원래 위치로 오도록
})

}

//자바스크립트 시간객체를 사용하여 매 3초마다 함수 호출하여 실행하기
let Timer = setInterval(moveLeft, 3000);
//함수 - 오른쪽방향으로 움직이는 슬라이드 함수
function moveRight(){
    mslide.animate({'margin-left':'0px'},500,function(){
        $('.m_slide ul>li:last-child').insertBefore('.m_slide ul>li:first-child')
        mslide.css('margin-left','-s_img')//원래 위치로 오도록
    })

}


// 좌, 우 벝느 클릭시 해당 방향으로 움직이게 하기(함수 호출)
l_btn = $('.m_slide i.fa-angle-left');
r_btn = $('.m_slide i.fa-angle-right');

l_btn.click(function(){
    moveRight();
});

r_btn.click(function(){
    moveLeft();
});

//좌우버튼에 마우스 오버시 시간을 제거하고 다시 아웃하면 시간을 생성하여 자동으로 움직이게 한다.

$('.m_slide i.fas').hover(function(){
clearInterval(Timer)
},function(){
Timer=setInterval(moveLeft,3000)
}
)

// 1.내비게이션 마우스 오버시 슬라이드 이미지와 겹치게하기
// 2. 가로폭을 줄이면 이미지 가로크기 다시 새로 맞추기
// 3. '정지','플레이'아이콘 추가하여 클릭시 슬라이드 멈추기, 다시재생하기
$('.m_slide i.fa-pause').click(function(){
    clearInterval(Timer)
})

$('.m_slide i.fa-play').click(function(){
    Timer=setInterval(moveLeft,3000)
})
})