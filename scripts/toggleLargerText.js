Drupal.behaviors.toggleLargerText = {
    attach: function toggleLargerText() {
        if(localStorage.getItem("largerText") == null) {
            console.log("creating largerText in localStorage");
            localStorage.setItem("largerText", JSON.stringify(false));
        }
        console.log(localStorage.largerText);

        function switcher() {
            console.log("switcher init");
            if(JSON.parse(localStorage.getItem("largerText")) === true) {
                console.log("Adding class to body");
                document.body.classList.add("larger-text");
            } else {
                console.log("Removing class from body");
                document.body.classList.remove("larger-text");
    
            }
        }
        switcher();

        document.getElementById("toggle-larger-text").addEventListener("click",function() {
            console.log("Setting largerText to true: ", localStorage.largerText);
            localStorage.setItem("largerText", JSON.stringify(true));
            console.log("Done: ", localStorage.largerText);
            switcher();
        });
        document.getElementById("toggle-regular-text").addEventListener("click",function() {
            console.log("Setting largerText to false: ", localStorage.largerText);
            localStorage.setItem("largerText", JSON.stringify(false));
            console.log("Done: ", localStorage.largerText);
            switcher();
            });
        document.getElementById("toggle-smaller-text").addEventListener("click",function() {
            console.log("Setting largerText to false: ", localStorage.largerText);
            localStorage.setItem("largerText", JSON.stringify(false));
            console.log("Done: ", localStorage.largerText);
            switcher();
            });
        
        
    }
}