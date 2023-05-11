function calculate(){
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var math =  +(document.getElementById("maths").value);
  var english =  +(document.getElementById("english").value);
  var computer =  +(document.getElementById("computer").value);
  var pst = +(document.getElementById("pst").value);
  var total = math + english + computer + pst;
  var percentage = (total / 400) * 100;
  
  document.getElementById("fullname").innerHTML = fname + " " + lname;
  document.getElementById("mathscore").innerHTML = math;
  document.getElementById("englishscore").innerHTML = english;
  document.getElementById("csscore").innerHTML = computer;
  document.getElementById("pstscore").innerHTML = pst;
  document.getElementById("totalmarks").innerHTML = total;
  document.getElementById("percentage").innerHTML = percentage.toFixed(2) + "%";
  document.getElementById("result").style.display = "block";
  document.getElementsByTagName("form")[0].style.display = "none";


  document.getElementById("result").style.border = "1px solid black";
document.getElementById("result").style.padding = "20px";
document.getElementById("result").style.marginTop = "70px";
document.getElementById("result").style.borderRadius = "4px";
document.getElementById("result").style.marginLeft = "450px";
document.getElementById("result").style.width = "450px";
document.getElementById("result").style.fontFamily = "Arial, sans-serif";
document.getElementById("result").style.fontSize = "16px";
document.getElementById("result").style.boxShadow ="9px 6px 10px 9px rgb(72, 69, 69)";
document.getElementById("text").style.fontSize = "48px";
document.getElementById("text").style.fontFamily = "sans";
document.getElementById("chn").style.fontSize = "22px";
document.getElementById("chn").style.fontFamily = "sans";
document.getElementById("chne").style.fontSize = "22px";
document.getElementById("chne").style.fontFamily = "sans";
document.getElementById("chnn").style.fontSize = "22px";
document.getElementById("chnn").style.fontFamily = "sans";
document.getElementById("chnnn").style.fontSize = "22px";
document.getElementById("chnnn").style.fontFamily = "sans";
document.getElementById("chnnnn").style.fontSize = "22px";
document.getElementById("chnnnn").style.fontFamily = "sans";
document.getElementById("chnge").style.fontSize = "22px";
document.getElementById("chnge").style.fontFamily = "sans";
document.getElementById("chnfd").style.fontSize = "22px";
document.getElementById("chnfd").style.fontFamily = "sans";
}
