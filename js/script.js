const hamburgerBtn = document.querySelector(".hamburger")
const links = document.querySelector(".nav-links")


hamburgerBtn.addEventListener('click', (e)=>{
    links.classList.toggle("toggle_links");
    
    if(links.classList.contains("toggle_links")){
        document.querySelector('body').style.overflow = "hidden";
    }else{
        document.querySelector('body').style.overflow = "scroll";
    }
    
    // Prevent the body click event from firing when clicking the hamburger button
    e.stopPropagation()

})

document.querySelector("body").addEventListener('click', ()=>{
    if(links.classList.contains("toggle_links")){
        links.classList.remove("toggle_links")
        document.querySelector('body').style.overflow = 'scroll'
    }
})



