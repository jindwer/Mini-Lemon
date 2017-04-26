(function($){
  $(function() {
          if (1) {
              $(".denglu").css({
                  "display": "none",
              });
              $("#denglu").css({
                  "display": "none",
              });
              $("#navbar-form").css({
                  "right": "210px",
              })
          } else {

              $("#navbar-form").css({
                  "right": "150px",
              });
              $("#zhuangtai-kuang").css({
                  "display": "none",
              });
              $(".glyphicon-pencil").css({
                  "display": "none",
              });
          }
          $(".tixing-nav>li").click(function() {
              var index = $(".tixing-nav>li").index(this);
              $('.text-zhanwei').css({
                  "display": "none"
              });
              $('.text-zhanwei').eq(index).css({
                  "display": "block"
              });
              $(this).css({
                  "border-bottom": "2px solid #5FA70F",
              });
              $(this).siblings().css({
                  "border-bottom": "0px solid #5FA70F",
              });
          });
          $(".dropdown-yemian").click(function(){
            $(".dropdown-yemian").show();
          });
          // $('body').click(function(e){
          //   $(".dropdown-yemian").hide();
          // });
          // $(".dropdown1").click(function(e){
          //    e.stopPropagation();
          //   $(".dropdown-yemian").show();
          // });
          $('.dropdown-yemian').mouseleave(function(){
            $(".dropdown-yemian").hide();
          });
          $(".dropdown1").click(function(){
            $(".dropdown-yemian").show();
          });
      })  
})(jQuery);
