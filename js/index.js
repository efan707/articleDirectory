$(function() {
/*****get the title*****/
  var allTittle=$("h2,h3");
  var directoryTex="<ul>";
  for (var i=0; i<allTittle.length; i++) {
    if(allTittle[i].tagName=="H2"){
       directoryTex+="<li value="+i+">"+allTittle.eq(i).text()+"</li>";
     }else{
       directoryTex+="<li class='lowLevel' value="+i+">"+allTittle.eq(i).text()+"</li>";
     }
   }
  directoryTex+="</ul>";
  $("#directory").html(directoryTex);
  /*****set the control********/
  var posArry=new Array(allTittle.length);
  for (var j=0; j<allTittle.length; j++) {
    posArry[j]=allTittle.eq(j).offset().top;
  }
  $("#directory li").click(function(event) {
        var pos=$(this).val();
        $("html,body").scrollTop(posArry[pos]);
  });
  var nowPos;
  $(document).scroll(function(event) {
   for (var k=0; k<posArry.length; k++) {
      if($(document).scrollTop()<=posArry[k]){
        nowPos=k-1;
        if (nowPos<0) {nowPos=0;}
        $("#directory li").eq(nowPos).addClass('active').siblings().removeClass('active');
        break;
     }
    }
  }); 
});