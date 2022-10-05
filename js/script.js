// ハンバーガーメニュー実装

$('.drawer-icon').click(function() {
  $('body').toggleClass('is-open');
});

$('.drawer-background').click(function() {
  $('body').removeClass('is-open');
});

$('a[href^="#"]').click(function() {
  $('body').removeClass('is-open');
});

// #から始まるURLがクリックされた時

$('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    const header = $(".header").innerHeight();

    // 移動速度を指定（ミリ秒）
    const speed = 300;

    // hrefで指定されたidを取得
    const id = $(this).attr("href");

    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    const target = $("#" == id ? "html" : id);

    // ページのトップを基準にターゲットの位置を取得からトップからの距離からヘッダー分の高さを引く
    const position = $(target).offset().top - header;

    // ターゲットの位置までspeedの速度で移動

    $("html, body").animate(
      {
        scrollTop: position
     },
      speed
    );
    return false;

  });

//   wow.js
new WOW().init();

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 20,

  breakpoints: {
    // when window width is >= 640px
    728: {
      spaceBetween: 40
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

//　アコーディオン実装
$('.accordion-head').click(function() {
  $(this).next().slideToggle();
  $(this).children('.accordion-icon').toggleClass( 'is-open' );
});

// googleform
let $form = $('#js-form');
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $form.slideUp();
        $('#js-success').slideDown();
      }, 
      200: function() { 
        //送信に失敗したときの処理 
        $('#js-error').slideDown();
      }
    } 
  });
  return false; 
}); 

// formの入力確認
let $submit = $('#js-submit');
$('#js-form input, #js-form textarea').on( 'change', function() {
  if(
    $( '#js-form input[name="entry.587979459"]').val() !== "" &&
    $( '#js-form input[name="entry.2142186651"]').val() !== "" &&
    // $( '#js-form input[name="emailAddress"]').val() !== "" &&
    $( '#js-form input[name="entry.2142728492"]').prop( 'checked') === true
  ) {
    //全て入力された時
    $submit.prop('disabled', false);
    $submit.removeClass( '-disabled');
  } else {
    //入力されていない時
    $submit.prop('disabled', true);
    $submit.addClass( '-disabled');
  }
});

// Topへ戻る

$(function() {
  var pagetop = $('#page-top');
  pagetop.hide();
  $(window).scroll(function() {
      if($(this).scrollTop() > 70) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function() {
      $('body, html').animate({scrollTop: 0}, 500);
      return false;
  });
});