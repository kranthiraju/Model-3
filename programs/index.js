window.addEventListener("scroll",function(){
    var nw=document.getElementById("nwt");
    nw.classList.toggle("sticky",window.scrollY >0);
})