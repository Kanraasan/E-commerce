let i = 0;
let t = "Give Yourself \n a NEW Style This Year";

function typing(){
    if(i<t.length){
        document.getElementById("text").innerHTML+=t.charAt(i);
        i++;
        setTimeout(typing,100);
    }   
}
function openImg(element){
    window.open(element.src);
}
typing();
