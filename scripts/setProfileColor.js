Drupal.behaviors.thmpflo = {
    attach: function setProfileColor() {
        if(document.body.classList.contains("path-portfolio")) {

            var profileColor = document.getElementsByClassName("color-id")[0].childNodes[0].textContent;
            switch(profileColor) {
                case "blue":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--blue)");
                    break;
                case "green":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--green)");
                    break;
                case "orange":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--orange)");
                    break;
                case "red":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--red)");
                    break;
                case "purple":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--purple)");
                    break;
                case "gray":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--gray)");
                    break;
                case "uwblue":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--uwblue)");
                    break;
                default:
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--salmon)");
                    break;
            }
        }
        if(document.body.classList.contains("path-user")) {
            
            var profileColor = document.getElementsByClassName("field--name-field-usr-profile-color")[0].textContent;
            switch(profileColor) {
                case "blue":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--blue)");
                    break;
                case "green":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--green)");
                    break;
                case "orange":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--orange)");
                    break;
                case "red":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--red)");
                    break;
                case "purple":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--purple)");
                    break;
                case "gray":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--gray)");
                    break;
                case "uwblue":
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--uwblue)");
                    break;
                default:
                    document.documentElement.style.setProperty("--color--accent", "var(--color--pflo--salmon)");
                    break;
            }
        }
    }
}

