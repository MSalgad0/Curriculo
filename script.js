function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    
    const img = document.querySelector(".foto img")

    
    if (html.classList.contains("light")) {
        
        img.setAttribute("src", "./img/WhatsApp Image 2023-10-10 at 22.56.10.jpeg")
    } else {
        
        img.setAttribute("src", "./img/WhatsApp Image 2023-10-10 at 22.56.10.jpeg")
    }
}
