

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
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive : [
      {
        breakpoint: 500,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao2) {
  thongbao2.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao3) {
  thongbao3.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao4) {
  thongbao4.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao5) {
  thongbao5.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao6) {
  thongbao6.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao7) {
  thongbao7.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao8) {
  thongbao8.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (thongbao9) {
  thongbao9.addEventListener('click', function () {
    swal(
      'Đây chỉ là dự kiến!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
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
    swal(
      'Đang bảo trì!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (baotri2) {
  baotri2.addEventListener('click', function () {
    swal(
      'Đang bảo trì!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}
if (baotri3) {
  baotri3.addEventListener('click', function () {
    swal(
      'Đang bảo trì!',
      'Mời bạn quay lại sau ^_^ !',
      'error'
    )
  })
}

/// Fake Sale Notication 
   
        var r_text = new Array ();
r_text[0] = "Javascript";
r_text[1] = "ReacJS";
r_text[2] = "HTML/CSS";



    var r_map = new Array ();
r_map[0] = "https://kt.city/_next/image?url=https%3A%2F%2Fstatic.kt.city%2Fcjxtrhjqs00we098574enz0ng%2Fbanner-khoa-hoc-js-ver2-1622631616496.jpg&w=384&q=100";
r_map[1] = "https://static.kt.city/cjxtrhjqs00we098574enz0ng/reactjs-course-cover-1640655350243.jpg";
r_map[2] = "https://codingui.dev/images/html-css-course.jpg";

var link_qc = new Array ();
link_qc[0] = "https://www.youtube.com/watch?v=JEYHf6Oq_Mo"
link_qc[1] = "https://elfsight.com/popup-widget/recent-sales-template/"
link_qc[2] = "https://kt.city/"
 
var r_product = new Array ();
r_product[0] = "purchased item 1";
r_product[1] = "purchased item 2";
r_product[2] = "purchased item 3 Hosting";

     setInterval(function(){ $(".fake-sale").stop().slideToggle('slow'); }, 6000);
      $(".fs-close").click(function() {
        $(".fake-sale").stop().slideToggle('slow');
      });
      setInterval(function(){    
        var myNumber = Math.floor(3*Math.random());
        $("#map1").attr("src",r_map[myNumber]);
 			  $('#country').text(r_text[myNumber]);
        $('#linkqc').attr("href",link_qc[myNumber])
      $('#product').text(r_product[Math.floor(3*Math.random())]);
 			var timeVal = Math.floor(3*Math.random());
 	
 			$('#time').text(timeVal);
 		
 		 
     //console.log(timeVal); 
 }, 13000);
//doi ava
var doiava = document.getElementById('doianh');
var doi_anh = new Array ();
doi_anh[0] = "https://kt.city/static/avatar/avatar5.jpg"
doi_anh[1] = "https://kt.city/static/avatar/avatar6.jpg"
doi_anh[2] = "https://kt.city/static/avatar/avatar9.jpg"
doi_anh[3] = "https://kt.city/static/avatar/avatar11.jpg"
doi_anh[4] = "https://kt.city/static/avatar/avatar2.jpg"
doi_anh[5] = "https://kt.city/static/avatar/avatar12.jpg"
doi_anh[6] = "https://kt.city/static/avatar/avatar1.jpg"
doi_anh[7] = "https://kt.city/static/avatar/avatar3.jpg"

if (doiava) {
    doiava.addEventListener('click', function () {
      var sttrandom = Math.floor(Math.random() * 8);
      $("#doianh").attr("src",doi_anh[sttrandom]);
    })
}

//showmenudth

const nav = document.querySelector("nav");
const toggle = document.querySelector(".menu");
const outside = document.querySelector("html");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open-nav");
  toggle.classList.toggle("open-nav");
});


if ($('#e1').has("open-nav")){
  $('.body').click(function(event){
    nav.classList.remove("open-nav");
    toggle.classList.remove("open-nav");
    toggle.classList.remove("opened");
  });
}
if ($('#e1').has("open-nav")){
  $('.body-extra').click(function(event){
    nav.classList.remove("open-nav");
    toggle.classList.remove("open-nav");
    toggle.classList.remove("opened");
  });
}
if ($('#e1').has("open-nav")){
  $('.main-content').click(function(event){
    nav.classList.remove("open-nav");
    toggle.classList.remove("open-nav");
    toggle.classList.remove("opened");
  });
}
if ($('#e1').has("open-nav")){
  $('.footermt').click(function(event){
    nav.classList.remove("open-nav");
    toggle.classList.remove("open-nav");
    toggle.classList.remove("opened");
  });
}


  



//doiava dth
var doiava1 = document.getElementById('doianh1');
var doi_anh1 = new Array ();
doi_anh1[0] = "https://kt.city/static/avatar/avatar5.jpg"
doi_anh1[1] = "https://kt.city/static/avatar/avatar6.jpg"
doi_anh1[2] = "https://kt.city/static/avatar/avatar9.jpg"
doi_anh1[3] = "https://kt.city/static/avatar/avatar11.jpg"
doi_anh1[4] = "https://kt.city/static/avatar/avatar2.jpg"
doi_anh1[5] = "https://kt.city/static/avatar/avatar12.jpg"
doi_anh1[6] = "https://kt.city/static/avatar/avatar1.jpg"
doi_anh1[7] = "https://kt.city/static/avatar/avatar3.jpg"

if (doiava1) {
    doiava1.addEventListener('click', function () {
      var sttrandom = Math.floor(Math.random() * 8);
      $("#doianh1").attr("src",doi_anh1[sttrandom]);
    })
}
//////////////////

// điện thoại

var add1 = document.getElementById("bt1")
var add2 = document.getElementById("bt2")
var add3 = document.getElementById("bt3")
var add4 = document.getElementById("bt4")
var add5 = document.getElementById("bt5")
var add6 = document.getElementById("bt6")
// ??????????????????????????????????????????????




///////////////////////////////////
var dangban1 = document.getElementById("bt1")
var dangban2 = document.getElementById("bt2")
var dangban3 = document.getElementById("bt3")
var dangban4 = document.getElementById("bt4")
var dangban5 = document.getElementById("bt5")
var dangban6 = document.getElementById("bt6")



var thongbaodth = window.matchMedia("(min-width: 750px)");
myFunction(thongbaodth) ;
thongbaodth.addEventListener(myFunction);

function myFunction(thongbaodth) {
  if (thongbaodth.matches) { // If media query matches
    // add1.classList.add("bt01");
    // add2.classList.add("bt02");
    // add3.classList.add("bt03");
    // add4.classList.add("bt04");
    // add5.classList.add("bt05");
    // add6.classList.add("bt06");
    if (dangban1) {
      dangban1.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }
    if (dangban2) {
      dangban2.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }
    if (dangban3) {
      dangban3.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }
    if (dangban4) {
      dangban4.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }
    if (dangban5) {
      dangban5.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }
    if (dangban6) {
      dangban6.addEventListener('click', function () {
        swal(
          'Đang bảo trì!',
          'Mời bạn quay lại sau ^_^ !',
          'error'
        )
      })
    }

  } else{
    if (dangban1) {
      dangban1.addEventListener('click', function () {
      $.toast({
      heading: 'Error',
      text: 'Đang bảo trì!',
      icon: 'error',
      loader: true,
      loaderBg: '#fff',
      showHideTransition: 'plain',
      hideAfter: 3000,
      position: {
        left: 10,
        top: 10
      }
    })
    })
    }
    if (dangban2) {
      dangban2.addEventListener('click', function () {
      $.toast({
        heading: 'Error',
        text: 'Đang bảo trì!',
        icon: 'error',
        loader: true,
        loaderBg: '#fff',
        showHideTransition: 'plain',
        hideAfter: 3000,
        position: {
          left: 10,
          top: 10
      }
    })
    })
    }
    if (dangban3) {
      dangban3.addEventListener('click', function () {
      $.toast({
      heading: 'Error',
      text: 'Đang bảo trì!',
      icon: 'error',
      loader: true,
      loaderBg: '#fff',
      showHideTransition: 'plain',
      hideAfter: 3000,
      position: {
        left: 10,
        top: 10
      }
    })
    })
    }
    if (dangban4) {
      dangban4.addEventListener('click', function () {
      $.toast({
      heading: 'Error',
      text: 'Đang bảo trì!',
      icon: 'error',
      loader: true,
      loaderBg: '#fff',
      showHideTransition: 'plain',
      hideAfter: 3000,
      position: {
        left: 10,
        top: 10
      }
    })
    })
    }
    if (dangban5) {
      dangban5.addEventListener('click', function () {
      $.toast({
      heading: 'Error',
      text: 'Đang bảo trì!',
      icon: 'error',
      loader: true,
      loaderBg: '#fff',
      showHideTransition: 'plain',
      hideAfter: 3000,
      position: {
        left: 10,
        top: 10
      }
    })
    })
    }
    if (dangban6) {
      dangban6.addEventListener('click', function () {
      $.toast({
      heading: 'Error',
      text: 'Đang bảo trì!',
      icon: 'error',
      loader: true,
      loaderBg: '#fff',
      showHideTransition: 'plain',
      hideAfter: 3000,
      position: {
        left: 10,
        top: 10
      }
    })
    })
    }
  }
}
