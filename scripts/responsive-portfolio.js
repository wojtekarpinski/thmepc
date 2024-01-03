




Drupal.behaviors.thmpflo = 
{
    attach: function (context, settings)
    {
        console.log("switchToMobile init");
        if(document.body.classList.contains("path-portfolio")){
            console.log("path-portfolio in body detected");
            if(window.screen.width <= 600) {
                console.log("width lower than 600");
                var sideMenu = document.getElementById("block-cci-ep-sections");
                var subGroup = document.getElementsByClassName("ep-sub-group");
                sideMenu.classList.add("hide");
                var ev //event variable

                for(let key in subGroup) {
                    //add class .ep-sg-mobile to each h2 in ep-sub-group
                    console.log("Looping inside subGroup, key: ", key);
                    subGroup[key].classList.add("cci-expanded");
                    subGroup[key].childNodes[0].classList.add("ep-sg-mobile") //displays h2 with .ep-sg-mobile styling
                    subGroup[key].childNodes[0].addEventListener("click", function() {
                        expand(ev,subGroup)}
                        ,false);
                }
                //adds .cci-expanded to clicked h2 parent
                function expand(clickedObj, subGroup) {
                    console.log("expand init");
                    console.log("ev: ", clickedObj);
                    // Checks if .cci-expanded is present
                    if(clickedObj.target.ParentNode.classList.contains("cci-expanded") == false) {
                       /* 
                        // Removes .cci-expanded (accordion style)
                        for(let key in subGroup) {
                            if(subGroup[key].classList.contains("cci-expanded") == true ) {
                                subGroup[key].classList.remove("cci-expanded");
                            }
                        }
                        */
                        clickedObj.target.ParentNode.classList.add("cci-expanded"); 
                    } else { // collapses the sub-group
                        clickedObj.target.ParentNode.classList.remove("cci-expanded");
                    }
                }


            }
        }
    }
}