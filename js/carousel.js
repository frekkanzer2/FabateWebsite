

$('.carousel').carousel({
    interval: false,
})

$('#vgCarousel').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index(); //Getting carousel current index
    gameTitle = "";
    gameSubtitle = "";
    gameDescription = "";
    gameAuthors = "";
    gamePublisher = "";
    gameDetails = "";
    switch(currentIndex) {
        case 0:
            gameTitle = "DUNGATE: ZOMBIE SURVIVAL";
            gameSubtitle = "Sviluppo in corso (60%)&nbsp;&nbsp;-&nbsp;&nbsp;Windows · Android · Fire TV";
            gameDescription = "Resisti e sconfiggi i non morti in Dungate.<br/>Quanto riuscirai a sopravvivere in un mondo invaso da zombie?<br/><br/><b>DUNGATE: ZOMBIE SURVIVAL</b><br/>Una piccola colonia di sopravvissuti mantiene resistenza ai mostri riparandosi in una caverna misteriosa, caratterizzata da un portale infernale capace di teletrasportare gli esseri umani in diverse zone della terra.<br/>Attraversa il portale e stermina le orde di nemici che invaderanno la zona in cui ti trovi con un vasto e potente arsenale a tua disposizione!<br/><br/><b>INVASIONE DI ZOMBIE</b><br/>Arriveranno orde di nemici, sempre più numerosi e potenti, resuscitati da cerchi infernali.<br/>Resisti all'avanzata dei non morti, raccogli potenti armi e rifornisciti di munizioni: sei pronto per scatenare l'inferno. Corridori, infetti, demoni e stregoni ti daranno la caccia, ma li abbatterai tutti con colpi di fucile.<br/><br/><b>COOPERAZIONE</b><br/>Sterminare orde di mutanti e demoni è difficile e rischioso: meglio portare con sé altri soldati! Resisti all'invasione con i tuoi amici, cooperando e resistendo insieme. Proteggi i tuoi alleati e aiutali a sconfiggere la mandria di mutanti che resusciterà dalla terra.<br/><br/><b>COSA TI ASPETTA</b><br/><ul style='padding: 0px!important; padding-left: 20px!important;'><li>Un fantastico gioco pieno di azione, zombie, mutanti, demoni, sangue, esplosioni e chi più ne ha, più ne metta</li><li>Tantissimi mostri ti attendono nelle zone del portale, inferociti e pronti a divorarti</li><li>Un vasto arsenale di armi, con il quale massacrerai le orde che cercheranno di assalirti</li><li>Cooperazione con i tuoi alleati, in modo da resistere a quante più orde possibili</li><li>Potenziamenti e abbigliamenti per il tuo personaggio</li><li>Cross Platform tra Android e Windows</li></ul>";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Francesco Abate</li><li>Carmine Ferrara</li></ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Overriders Group (Android)</li><li>IMTech (Windows · Fire TV)</li></ul>"
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-users'></div> <div style='padding-left:3px'>Multigiocatore (1-4)</div> </li> <li> <div class='fa-li fas fa-network-wired'></div> <div style='padding-left:3px'>Multipiattaforma</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller necessario</div> </li> <li> <div class='fa-li fas fa-cloud'></div> <div style='padding-left:3px'>Salvataggio in cloud</div> </li> <li> <div class='fa-li fas fa-wifi'></div> <div style='padding-left:3px'>Internet richiesto</div> </li> </ul>";
            break;
        case 1:
            gameTitle = "FACTION WARS";
            gameSubtitle = "Sviluppo in corso (85%)&nbsp;&nbsp;-&nbsp;&nbsp;Windows";
            gameDescription = "INSERIRE DESCRIZIONE";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> IMTech </li> </ul>";
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-desktop'></div> <div style='padding-left:3px'>Schermo condiviso (2-4)</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller necessario</div> </li> <li> <div class='fa-li fas fa-database'></div> <div style='padding-left:3px'>Salvataggio locale</div> </li> <li> <div class='fa-li fas fa-medal'></div> <div style='padding-left:3px'>Classifica</div> </li> </ul>";
            break;
        case 2:
            gameTitle = "HOUSE RUNNER";
            gameSubtitle = "Windows · Android";
            gameDescription = "INSERIRE DESCRIZIONE";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Overriders Group (Android)</li><li>IMTech (Windows)</li></ul>"
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-user'></div> <div style='padding-left:3px'>Giocatore singolo</div> </li> <li> <div class='fa-li fas fa-keyboard'></div> <div style='padding-left:3px'>Tastiera necessaria</div> </li> <li> <div class='fa-li fas fa-database'></div> <div style='padding-left:3px'>Salvataggio locale</div> </li> <li> <div class='fa-li fas fa-medal'></div> <div style='padding-left:3px'>Classifica</div> </li> <li> <div class='fa-li fas fa-star'></div> <div style='padding-left:3px'>Obiettivi</div> </li>";
            break;
        case 3:
            gameTitle = "BRAWL ARENA";
            gameSubtitle = "Windows 7";
            gameDescription = "INSERIRE DESCRIZIONE";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> IMTech </li> </ul>";
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-desktop'></div> <div style='padding-left:3px'>Schermo condiviso (2)</div> </li> <li> <div class='fa-li fas fa-keyboard'></div> <div style='padding-left:3px'>Tastiera necessaria</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller opzionale</div> </li> <li> <div class='fa-li fas fa-star'></div> <div style='padding-left:3px'>Obiettivi</div> </li> </ul>";
            break;
    }
    document.getElementById("project_title").innerHTML = gameTitle;
    document.getElementById("project_subtitle").innerHTML = gameSubtitle;
    document.getElementById("project_description").innerHTML = gameDescription;
    document.getElementById("project_authors").innerHTML = gameAuthors;
    document.getElementById("project_publisher").innerHTML = gamePublisher;
    document.getElementById("project_details").innerHTML = gameDetails;

});