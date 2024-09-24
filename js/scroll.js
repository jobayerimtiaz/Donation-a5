
    window.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {  
            header.classList.add("backdrop-blur-md", "bg-opacity-80"); 
             
        } else {
            header.classList.remove("backdrop-blur-md", "bg-opacity-80"); 
        }
    });



