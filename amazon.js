function toogleColor(){
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;


    if(currentColor === "rgb(255,255,255)" || currentColor ==="white" ){
        body.style.backgroundColor = "black";

    }else{
        body.style.backgroundColor = "white";
    }
}