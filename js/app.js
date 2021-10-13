var check = document.querySelector(".check");
check.addEventListener('click', language);

function language(){
    let id=check.checked;
    if (id==true){
        location.href="C:/Users/saulg/Documents/DECIMO/Portfolio/es/index.html";
    } else {
        location.href="C:/Users/saulg/Documents/DECIMO/Portfolio/index.html";
    }
}