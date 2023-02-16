$(".text").css("display","none");

$(".show-text").on("click",function () {
  $(this).next().slideDown();
})