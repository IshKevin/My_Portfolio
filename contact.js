function myFunction() {
    let x = document.getElementById("in1").value;
    let text;
    if (x=="") {
      text = "Enter your name Please";
    } 
    document.getElementById("on").innerHTML = text;
    
    let y = document.getElementById("in2").value;
    let text2;
    if (!(y.includes('@'))) {
      text2 = "Enter a valid email";
    } else(y=="")
    {
        text2 = "Enter your email Please";  
    }

    document.getElementById("in2").innerHTML = text2;
  }