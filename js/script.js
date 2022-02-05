let bar=document.getElementById("bar")
let menu=document.querySelector(".navbar")
bar.addEventListener("click",()=>{
    menu.classList.toggle("active")
    bar.classList.toggle("fa-times")
})
window.onscroll = ()=>{
    menu.classList.remove("active")
    bar.classList.remove("fa-times")
}