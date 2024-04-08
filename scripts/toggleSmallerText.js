Drupal.behaviors.toggleSmallerText = {
    attach: function toggleSmallerText() {
        if(localStorage.getItem("smallerText") == null) {
            //console.log("creating smallerText in localStorage");
            localStorage.setItem("smallerText", JSON.stringify(false));
        }
        //console.log(localStorage.smallerText);

        function switcher() {
            //console.log("switcher init");
            if(JSON.parse(localStorage.getItem("smallerText")) === true) {
                //console.log("Adding class to body");
                document.body.classList.add("smaller-text");
            } else {
                //console.log("Removing class from body");
                document.body.classList.remove("smaller-text");
    
            }
        }
        switcher();

        document.getElementById("toggle-smaller-text").addEventListener("click",function() {
            //console.log("Setting smallerText to true: ", localStorage.smallerText);
            localStorage.setItem("smallerText", JSON.stringify(true));
            //console.log("Done: ", localStorage.smallerText);
            switcher();
        });
        document.getElementById("toggle-regular-text").addEventListener("click",function() {
            //console.log("Setting smallerText to false: ", localStorage.smallerText);
            localStorage.setItem("smallerText", JSON.stringify(false));
            //console.log("Done: ", localStorage.smallerText);
            switcher();
            });
        document.getElementById("toggle-larger-text").addEventListener("click",function() {
            //console.log("Setting smallerText to false: ", localStorage.smallerText);
            localStorage.setItem("smallerText", JSON.stringify(false));
            //console.log("Done: ", localStorage.smallerText);
            switcher();
            });
        
        
        
    }
}