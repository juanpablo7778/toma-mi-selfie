var SpeechRecognition=window.webkitSpeechRecognition;    
var recognition=new SpeechRecognition();
function iniciar(){
document.getElementById("textbox").innerHTML="";
recognition.iniciar();
}
recognition.onresult=function(event)  {
    console.log(event);
    var Content= event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log (Content); 
    if (Content == "toma mi selfie")
    {
        console.log("tomando selfie");
        speak();
        
    }
}