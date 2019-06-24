const material=document.getElementById("material"),//price of materials
answer=document.getElementById("answer"),
number=document.getElementById("size");//number of materials
number.onkeypress=event=>{
  let number=Number(event.key);
  if (isNaN(number)){
  return false ;
}
else {
   return true ;
}
}
sub.onclick= ()=>{
  (!number.value)? (
     answer.style.display="none",
    error.style.display="block"
  )
  :(
    error.style.display="none",
    answer.style.display="block",
    answer.innerHTML = "Total: " + number.value*material.value+" Rub "
  );
}
