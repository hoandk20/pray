function pray (){
    document.getElementsByClassName("insence")[0].style.display = 'inline';
    setTimeout(function() {
        document.getElementById('smoke').style.display='inline';
        document.getElementById('leaves').style.display='block';
      }, 6000);
    document.getElementById("txt-pray").value  ="";
}

