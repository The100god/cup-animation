const paint = document.getElementById("paint");
const img = document.getElementById("img");
const cup = document.getElementById("cup");
const fillcup = document.getElementById("fillcup");
const pipe = document.getElementById("pipe");

let isClick = false

paint.addEventListener("click", ()=>{
    if(!isClick){
        img.style.transform="rotateZ(0deg)";
        img.style.transition="transform 1s";
        pipe.style.display="flex";

        setTimeout(()=>{
            pipe.style.transform="scaleY(1)";
            pipe.style.transition="transform 1s";
        },600)
        setTimeout(()=>{
            fillcup.style.transform="scaleY(1)";
            img.style.transition="transform 3s";
        },1500)
        setTimeout(()=>{
            pipe.style.display="none";
        },4500)
        isClick = true
    }
    else{
        pipe.style.display="flex";
        fillcup.style.transform="scaleY(0)";
        img.style.transition="transform 3s";

        setTimeout(()=>{
            pipe.style.transform="scaleY(0)";
            pipe.style.transition="transform 1s";
        },2500)
        setTimeout(()=>{
            pipe.style.display="none";
            img.style.transform="rotateZ(45deg)";
            img.style.transition="transform 1s";
        },3500)
        isClick=false;
    }
})