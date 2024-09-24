
    window.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {  // When scrolled more than 50px
            header.classList.add("backdrop-blur-md", "bg-opacity-80");  // Add blur and opacity change
        } else {
            header.classList.remove("backdrop-blur-md", "bg-opacity-80");  // Remove blur if scrolled back to the top
        }
    });



