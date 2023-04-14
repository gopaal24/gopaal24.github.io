//Contact
const contact_btn = document.querySelector(".contact-btn")
const close_btn = document.querySelector(".close-btn")
const popup = document.querySelector(".popup")
const main_popup = document.querySelector(".main-popup")

const contact_btn1 = document.querySelector(".contact-btn1")
const close_btn1 = document.querySelector(".close-btn1")
const popup1 = document.querySelector(".popup1")
const main_popup1 = document.querySelector(".main-popup1")

contact_btn.addEventListener("click", ()=>{
    popup.style.display = "flex"
    main_popup.style.cssText = "animation: slide-in .5s ease;animation-fill-mode: forwards;"
})

close_btn.addEventListener("click", ()=>{
    main_popup.style.cssText = "animation: slide-out .5s ease;animation-fill-mode: forwards;"
    setTimeout(()=>{
        popup.style.display = 'none'
    }, 600)
})

window.addEventListener('click', (e)=>{
    if(e.target == document.querySelector(".popup-overlay")){
        main_popup.style.cssText = "animation: slide-out .5s ease;animation-fill-mode: forwards;"
    setTimeout(()=>{
        popup.style.display = 'none'
    }, 600)
    }
})


contact_btn1.addEventListener("click", ()=>{
    popup1.style.display = "flex"
    main_popup1.style.cssText = "animation: slide-in .5s ease;animation-fill-mode: forwards;"
})

close_btn1.addEventListener("click", ()=>{
    main_popup1.style.cssText = "animation: slide-out .5s ease;animation-fill-mode: forwards;"
    setTimeout(()=>{
        popup1.style.display = 'none'
    }, 600)
})

window.addEventListener('click', (e)=>{
    if(e.target == main_popup1){
        main_popup1.style.cssText = "animation: slide-out .5s ease;animation-fill-mode: forwards;"
    setTimeout(()=>{
        popup1.style.display = 'none'
    }, 600)
    }
})


//Navbar Scroll
const about_us = document.getElementById("about_us");
about_us.addEventListener('click', ()=>{
    document.scrollTop(100);
})