const app = {
    init: function(){
        console.log('initialisation du script');
        // Création des écouteurs pour chaque Bouton //
        app.buttons = document.getElementsByTagName('button');
        console.log(app.buttons);
        console.log(typeof app.buttons);
        app.giveAnAnswer();
    },

    giveAnAnswer: function(){
        for (let i = 0; i < app.buttons.length; i++) {
            app.buttons[i].addEventListener("click", function() {
                console.log("Action 01 : J'ajoute ou supprime la class isActive au bouton");
                let jAiCliqueIci = this;
                jAiCliqueIci.classList.toggle("isActive");
                console.log("Action 02 : J'ajoute ou supprimer la class uCanSeeMe a la div suivante");
                let theAnswer = this.nextElementSibling;
                theAnswer.classList.toggle("uCanSeeMe");
            });
        }
    }
}
document.addEventListener("DOMContentLoaded", app.init);