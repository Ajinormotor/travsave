const nav_link= document.getElementById("nav_link")

function showMenu() {
    nav_link.style.left="0px"
}

function hideMenu(){
    nav_link.style.left="-1000px"
}


const header = document.getElementById('header')

 window.addEventListener("scroll",()=>{
    header.classList.toggle('active_header',window.scrollY > 200);
    console.log("Yes")
 })

