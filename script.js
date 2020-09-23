var id=document.getElementById("toggle");
var text=document.querySelector("#text");
var count=0;
id.addEventListener('click',function(){
    count++;
    if(count%2){
        document.body.style.backgroundColor = "black";
        text.style.color="white";
    }else{
        document.body.style.backgroundColor = "white";
        text.style.color="black";
    }
    
});
