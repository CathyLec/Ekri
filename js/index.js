function start(){
    var itemMore= document.getElementById(itemMore);

    itemMore.addEventListener("click",function(){
        moveTextArea();
    });
}

function moveTextArea(){
    var textzone= document.getElementById(textzone);
    textzone.style.marginLeft=20;
    textzone.style.height=70;

}


