

$(document).ready(function(){
 $("#sub").bind("click" , dima)
function dima() {


var a,b,c;
a=$("#material").val();
switch (a) {
  case 'linol':
    a=165;
    break;
  case 'kovr' :
    a=178;
    break;
  default:
    a=1200;
    break;
};
b=$("#size").val();


if (!$('#size').val()) {
  $('#error').show();
  $('#answer').hide();
  $('#size').css("border-color","#f44e4e");
}
else {
  $('#size').css("border-color","white");
  $('#answer').show();
  $('#error').hide();
  $("#answer").html("<div class='answer'><p> Итого: "+(a*b)+" руб</p><div>")
  }
}
});
