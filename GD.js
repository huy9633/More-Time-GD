var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')
var alertTrigger1 = document.getElementById('liveAlertBtn1')
var alertTrigger2 = document.getElementById('liveAlertBtn2')
var alertTrigger3 = document.getElementById('liveAlertBtn3')
var alertTrigger4 = document.getElementById('liveAlertBtn4')
var alertTrigger5 = document.getElementById('liveAlertBtn5')
var alertTrigger6 = document.getElementById('liveAlertBtn6')
var alertTrigger7 = document.getElementById('liveAlertBtn7')
var alertTrigger8 = document.getElementById('liveAlertBtn8')
var alertTrigger9 = document.getElementById('liveAlertBtn9')
var alertTrigger10 = document.getElementById('liveAlertBtn10')
var alertTrigger11 = document.getElementById('liveAlertBtn11')
function alert1(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper)
}
if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger1) {
    alertTrigger1.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger2) {
    alertTrigger2.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger3) {
    alertTrigger3.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger4) {
    alertTrigger4.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger5) {
    alertTrigger5.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger6) {
    alertTrigger6.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger7) {
    alertTrigger7.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger8) {
    alertTrigger8.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger9) {
    alertTrigger9.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger10) {
    alertTrigger10.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}
if (alertTrigger11) {
    alertTrigger11.addEventListener('click', function () {
      alert1('Hệ thống đang cập nhật !', 'success')
    })
}

//slideshow


var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3){
        counter = 1;
      }
      
    }, 5000);

//list Thành Viên
$(document).ready(function(){
  $('.bdet-s2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

//thongbaodukien 
var thongbao1 = document.getElementById('main-c1')
var thongbao2 = document.getElementById('main-c2')
var thongbao3 = document.getElementById('main-c3')
var thongbao4 = document.getElementById('main-c4')
var thongbao5 = document.getElementById('main-c5')
var thongbao6 = document.getElementById('main-c6')
var thongbao7 = document.getElementById('main-c7')
var thongbao8 = document.getElementById('main-c8')
var thongbao9 = document.getElementById('main-c9')

if (thongbao1) {
  thongbao1.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao2) {
  thongbao2.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao3) {
  thongbao3.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao4) {
  thongbao4.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao5) {
  thongbao5.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao6) {
  thongbao6.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao7) {
  thongbao7.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao8) {
  thongbao8.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
if (thongbao9) {
  thongbao9.addEventListener('click', function () {
    alert("Đây chỉ là dự kiến, mời bạn quay lại sau ^_^!");
  })
}
//xemthem
var cmt= document.getElementsByClassName("main-c-slide");
$(document).ready(function(){
    var stt=9;
    $("#click-button").click(function(){
        next=stt;
        if (cmt.length-stt < 6)
        {
            for (var i=1;i<=cmt.length-stt;i++)
                $(cmt).eq(next+i).show();
             $(".text-center").hide();
            
        }
        else{
            for (var i=1;i<=3;i++)
                $(cmt).eq(next+i).show();
            stt+=3;
        }
        
        

        console.log(stt);
    });
});
//baotri 
var baotri1 = document.getElementById('footer1-t-bt1')
var baotri2 = document.getElementById('footer1-t-bt2')
var baotri3 = document.getElementById('footer1-t-bt3')

if (baotri1) {
  baotri1.addEventListener('click', function () {
    alert("Đang bảo trì, mời bạn quay lại sau ^_^!");
  })
}
if (baotri2) {
  baotri2.addEventListener('click', function () {
    alert("Đang bảo trì, mời bạn quay lại sau ^_^!");
  })
}
if (baotri3) {
  baotri3.addEventListener('click', function () {
    alert("Đang bảo trì, mời bạn quay lại sau ^_^!");
  })
}