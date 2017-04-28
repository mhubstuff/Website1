$(document).ready(function(){
    if($( window ).width() < 580){
        document.getElementById("footer-id").innerHTML = "&copy Maxim Inc";
    }else{
        document.getElementById("footer-id").innerHTML = "Copyright &copy 2017 Maxim Incorporated";
    }
});
$( window ).resize(function() {
	if($( window ).width() < 580){
        document.getElementById("footer-id").innerHTML = "&copy Maxim Inc";
    }else{
        document.getElementById("footer-id").innerHTML = "Copyright &copy 2017 Maxim Incorporated";
    }
});