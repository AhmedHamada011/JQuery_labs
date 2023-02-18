var index=0;
var images = $(".image-container");
function animate(params) {
    if(index == 0){

      images.not(this).css("display","none")

      images.eq(0).css({
        "opacity":"0",
        "display":"block",
      }).show().animate({opacity:1},2000);

      console.log(0);

    }else if(index == 1)
    {
      images.not(this).css("display","none")

      images.eq(1).css({
        "opacity":"0",
        "display":"block",
      }).show().animate({opacity:1},2000);

      console.log(1);


    }else if(index == 2)
    {
      images.not(this).css("display","none")
      images.eq(2).css({
        "opacity":"0",
        "display":"block",
      }).show().animate({opacity:1},2000);

      console.log(2);


    }else if(index == 3)
    {
      images.not(this).css("display","none")

      images.eq(3).css({
        "opacity":"0",
        "display":"block",
      }).show().animate({opacity:1},2000);

      console.log(3);
    }

    if(index == 3) index = 0;
    else index++;  
}

var imageInterval = setInterval(animate,2000)

$(".stop").on("click",function () {
  clearInterval(imageInterval);
})
