Drupal.behaviors.toggleHighContrast = {
    attach: function toggleHighContrast() {
        // console.log("highContrast value: ", localStorage.getItem("highContrast"))
        if(localStorage.getItem("highContrast") == null) {
            // console.log("creating highContrast in localStorage");
            localStorage.setItem("highContrast", JSON.stringify(false));
        }
        
        function switcher() {
            if(JSON.parse(localStorage.getItem("highContrast")) === true) {
                // console.log("Adding class to body");
                document.body.classList.add("high-contrast");
            } else {
                // console.log("Removing class from body");
                document.body.classList.remove("high-contrast");
    
            }
        }
        switcher();

        document.getElementById("toggle-high-contrast").addEventListener("click",function() {
            // console.log("event detected, actual localStorage value is: ", localStorage.getItem("highContrast"));
            if(JSON.parse(localStorage.getItem("highContrast")) === false) {
                // console.log("highContrast was false ->", localStorage.getItem("highContrast"));
                localStorage.setItem("highContrast", JSON.stringify(true));
                // console.log("highContrast set to true ->", localStorage.getItem("highContrast"));
            } else {
                // console.log("highContrast was true ->", localStorage.getItem("highContrast"));
                localStorage.setItem("highContrast", JSON.stringify(false));
                // console.log("highContrast set to false ->", localStorage.getItem("highContrast"));
            }
            switcher();

            
        });
    }
}