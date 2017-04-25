$(function() {
  $(".portrait").hover(function() {
    $(".file_hid").css({"display":"block"});
  },function() {
    $(".file_hid").css({"display":"none"})
  });
  $(".bianjixinxi").click(function() {
    $(".info_edit").css({"display":"inline-block"})
  });
  $(".jianjie a").click(function () {
    $(".jianjie_form").css({"display":"inline-block"})
  })
})
