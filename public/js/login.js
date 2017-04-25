(function($){
  $(function(){
    $('#login-tag').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.login-input').show().siblings('.sign-input').hide();
        });
        $('#sign-tag').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.sign-input').show().siblings('.login-input').hide();
        });
        $('.body input').focus(function(){
          $(this).prev('label').fadeOut();
        });

        var checkr = getCheck();
        $('.check-show').eq(0).text(checkr).click(function(){
            checkr = getCheck();
            $(this).text(checkr);
        });
        $('.check-show').eq(1).text(checkr).click(function(){
            checkr = getCheck();
            $(this).text(checkr);
        });
        //验证
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        $('#login-form').submit(function(){
          $('#login-btn').attr('disabled',true);
          var phone = $('.login-input').find('input[name="phone"]');
          var pwd   = $('.login-input').find('input[name="password"]');
          var check = $('.login-input').find('input[name="check"]');
          if($.trim(phone.val())==""){
            phone.prev().text('登录账号不能为空').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }else if(!myreg.test($.trim(phone.val()))){
            phone.prev().text('请输入有效的手机号').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }
          if($.trim(pwd.val())==""){
            pwd.prev().text('密码不能为空').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }else if($.trim(pwd.val()).length<6){
            pwd.prev().text('密码不能少于6位').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }
          if($.trim(check.val())==""){
            check.prev().text('验证码不能为空').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }else if($.trim(check.val()).length<4||$.trim(check.val())!=checkr){
            check.prev().text('验证码错误').fadeIn();
            $('#login-btn').attr('disabled',false);
            return false;
          }
          return true;
        });
        $('#sign-form').submit(function(){
          $('#sign-btn').attr('disabled',true);
          var user  = $('.sign-input').find('input[name="user"]');
          var phone = $('.sign-input').find('input[name="phone"]');
          var pwd   = $('.sign-input').find('input[name="password"]');
          var check = $('.sign-input').find('input[name="check"]');
          if($.trim(user.val())==""){
            user.prev().text('名称不能为空').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }
          if($.trim(phone.val())==""){
            phone.prev().text('手机号不能为空').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }else if(!myreg.test($.trim(phone.val()))){
            phone.prev().text('请输入有效的手机号').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }
          if($.trim(pwd.val())==""){
            pwd.prev().text('密码不能为空').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }else if($.trim(pwd.val()).length<6){
            pwd.prev().text('密码不能少于6位').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }
          if($.trim(check.val())==""){
            check.prev().text('验证码不能为空').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }else if($.trim(check.val()).length<4||$.trim(check.val())!=checkr){
            check.prev().text('验证码错误').fadeIn();
            $('#sign-btn').attr('disabled',false);
            return false;
          }
          return true;
        });
        //生成验证码
        function getCheck(){
          var str=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j',
                    'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
                    'T','R','S','T','U','V','W','X','Y','Z'];
          var s='';
          for(var i=0;i<4;i++){
              s+=str[Math.floor(Math.random()*str.length)];
          }
          return s;
        }
  });
})(jQuery);
