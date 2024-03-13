Drupal.behaviors.searchState = 
{
    attach: function readSearchState()
    {
        
            if(document.body.classList.contains("path-szukaj")) {
                let formItems = document.getElementsByClassName("form-item");
                let itemsNb = formItems.length;
                let tempState = localStorage.searchState;
                let searchSwitch = document.getElementById("search-selector");
                console.log("initial searchState:");
                console.log(tempState);
                if(typeof tempState === 'undefined') 
                {
                    localStorage.searchState = 'basic';
                }
                if(localStorage.searchState === 'basic') {
                    //Display basic search field
                    formItems[0].style.display = "block";
                    for(let i = 1; i < itemsNb; i++) {
                        formItems[i].style.display = "";
                    }
                    
                } else {
                    //Display advanced search fields
                    for(let i = 1; i < itemsNb; i++) {
                        formItems[i].style.display = "block";
                    }
                    formItems[0].style.display = "";
                    searchSwitch.innerHTML = "Proste wyszukiwanie <span class=\"icon-circle-up\"></span>";
                }

            }
            
        }
}