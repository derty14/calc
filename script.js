sub.onclick=function () {
  var material=document.getElementById("material").value,//price of materials
  answer=document.getElementById("answer"),
  number=document.getElementById("size").value;//number of materials
  console.log(number);
  if (!number){
    answer.style.display="none"
    error.style.display="block";
  }
  else {
    error.style.display="none"
    console.log(material);
    answer.style.display="block";
    answer.innerHTML = "Total: " + number*material+" Rub ";

  }
}
