
$("li.app-category").click(function(){
    var text = jQuery(this).text(); //getting text from clicked element
    if (text.localeCompare("Videogiochi") == 0) {
        // Show videogames section
        console.log("Selected " + text + " section");
        $("#app-videogames").slideToggle(1000);
    } else if (text.localeCompare("Applicativi") == 0) {
        // Show videogames section
        console.log("Selected " + text + " section");
        $("#app-videogames").slideUp(400);
    } else if (text.localeCompare("Web App") == 0) {
        // Show videogames section
        console.log("Selected " + text + " section");
        $("#app-videogames").slideUp(400);
    } else if (text.localeCompare("Prototipi") == 0) {
        // Show videogames section
        console.log("Selected " + text + " section");
        $("#app-videogames").slideUp(400);
    } else if (text.localeCompare("Prossimamente") == 0) {
        // Show videogames section
        $("#app-videogames").slideUp(400);
    }
});

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
    gameLinks = "";
    switch(currentIndex) {
        case 0:
            gameTitle = "DUNGATE: ZOMBIE SURVIVAL";
            gameSubtitle = "Data di rilascio prevista: 2021/2022 · Sviluppo in corso (60%)&nbsp;&nbsp;-&nbsp;&nbsp;Windows · Android";
            gameDescription = "Resisti e sconfiggi i non morti in Dungate.<br/>Quanto riuscirai a sopravvivere in un mondo invaso da zombie?<br/><br/><b>DUNGATE: ZOMBIE SURVIVAL</b><br/>Una piccola colonia di sopravvissuti mantiene resistenza ai mostri riparandosi in una caverna misteriosa, caratterizzata da un portale infernale capace di teletrasportare gli esseri umani in diverse zone della terra.<br/>Attraversa il portale e stermina le orde di nemici che invaderanno la zona in cui ti trovi con un vasto e potente arsenale a tua disposizione!<br/><br/><b>INVASIONE DI ZOMBIE</b><br/>Arriveranno orde di nemici, sempre più numerosi e potenti, resuscitati da cerchi infernali.<br/>Resisti all'avanzata dei non morti, raccogli potenti armi e rifornisciti di munizioni: sei pronto per scatenare l'inferno. Corridori, infetti, demoni e stregoni ti daranno la caccia, ma li abbatterai tutti con colpi di fucile.<br/><br/><b>COOPERAZIONE</b><br/>Sterminare orde di mutanti e demoni è difficile e rischioso: meglio portare con sé altri soldati! Resisti all'invasione con i tuoi amici, cooperando e resistendo insieme. Proteggi i tuoi alleati e aiutali a sconfiggere la mandria di mutanti che resusciterà dalla terra.<br/><br/><b>COSA TI ASPETTA</b><br/><ul style='padding: 0px!important; padding-left: 20px!important;'><li>Un fantastico gioco pieno di azione, zombie, mutanti, demoni, sangue, esplosioni e chi più ne ha, più ne metta</li><li>Tantissimi mostri ti attendono nelle zone del portale, inferociti e pronti a divorarti</li><li>Un vasto arsenale di armi, con il quale massacrerai le orde che cercheranno di assalirti</li><li>Cooperazione con i tuoi alleati, in modo da resistere a quante più orde possibili</li><li>Potenziamenti e abbigliamenti per il tuo personaggio</li><li>Cross Platform tra Android e Windows</li></ul>";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Francesco Abate</li><li>Carmine Ferrara</li></ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Overriders Group (Android)</li><li>IMTech (Windows)</li></ul>"
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-users'></div> <div style='padding-left:3px'>Multigiocatore (1-4)</div> </li> <li> <div class='fa-li fas fa-network-wired'></div> <div style='padding-left:3px'>Multipiattaforma</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller necessario</div> </li> <li> <div class='fa-li fas fa-cloud'></div> <div style='padding-left:3px'>Salvataggio in cloud</div> </li> <li> <div class='fa-li fas fa-wifi'></div> <div style='padding-left:3px'>Internet richiesto</div> </li> </ul>";
            gameLinks = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> <a href='https://youtu.be/1fJmCYvvsHk' target='_blank'>Announcement trailer</a> </li> </ul>";
            break;
        case 1:
            gameTitle = "FACTION WARS";
            gameSubtitle = "Data di rilascio prevista: 2021 · Sviluppo in corso (87%)&nbsp;&nbsp;-&nbsp;&nbsp;Windows";
            gameDescription = "Faction Wars è un gioco strategico e competitivo in cui il giocatore deve proteggere il proprio letto nel mentre prova ad eliminare quello degli altri.<br/> Si continuerà a respawnare finchè il letto sarà in vita: una volta distrutto, il giocatore dovrà sopravvivere ad ogni costo per non perdere la partita. <br/><br/><b>FACTION WARS</b><br/> Ispirato alla modalità Bed Wars di Minecraft, Faction Wars tende a rendere quanto più competitiva possibile tale modalità aggiungendo nuovi items da usare in partita e nuovi potenziamenti con cui rafforzare il personaggio e la propria base. Diversi vasti campi da gioco ti attendono: chi ne uscirà vincitore? <br/><br/><b>MINECRAFT STYLE!</b><br/> Siccome il gioco è ispirato alla modalità Bed Wars di Minecraft, si è cercato di riprodurre nella maniera quanto più fedele possibile molte dinamiche e molti equipaggiamenti a disposizione: sono presenti le spade, gli archi, i picconi e le armature con i rispettivi materiali del gioco originale.<br/> Sono presenti anche diversi items iconici come la mela d'oro e la enderpearl, i quali sono affiancati da oggetti inediti come la fetta di carne, le torrette e le barricate. I potenziamenti, invece, sono per la gran parte inediti e puntano a migliorare la resistenza del letto e la potenza del giocatore stesso in cambio di diamanti.<br/>Sono presenti, infine, molteplici generatori potenziabili manualmente, in modo da poter ottenere quanti più diamanti e smeraldi possibili. <br/><br/><b>PUNTI STELLARI</b><br/> Faction Wars introduce un sistema di classifica totalmente inedito alla modalità Bed Wars, basato su stelle guadagnabili vincendo partite.<br/> Le stelle permettono di raggiungere leghe sempre più alte, sbloccando nuove mappe fino ad arrivare alle arene dei campioni, nelle quali il giocatore otterrà speciali effetti sul proprio personaggio durante la partita.<br/> Ovviamente, la sconfitta implica una perdita di punti sempre più alta in base alla lega in cui il giocatore è situato. <br/><br/><b>FURBIZIA E STRATEGIA</b><br/> Faction Wars cerca di offrire una esperienza quanto più strategica possibile al giocatore: la presenza di molteplici mappe tra loro differenti implica il dover adottare stili di gioco sempre diversi, adeguabili alla mappa da giocare. Prezioso compagno di squadra sarà la enderpearl, la quale permetterà di teletrasportarsi in punti strategici e di dominio della mappa in cui si gioca; alle volte sarà più che utile per scappare da un assalto nemico, teletrasportandosi in aree irraggiungibili senza tale perla. La presenza delle barricate, invece, offre un ottimo spunto difensivo per proteggere il letto e sè stessi da un assalto nemico: ottima tattica consiste nel difendersi con un arco riparandosi dietro la barricata. Infine, la presenza delle torrette permette di adottare nuove tattiche di assalto utili a distruggere il letto nel caso la fortezza del nemico sia impenetrabile: si monta la torretta e via, si occuperà lei del resto. <br/><br/><b>COSA TI ASPETTA</b><br/> <ul style='padding: 0px!important; padding-left: 20px!important;'> <li>Un fantastico gioco strategico e competitivo da giocare con gli amici in splitscreen</li> <li>Le classiche armi di Minecraft, modernizzate e bilanciate per una migliore esperienza di gioco</li> <li>Inedite armi ed equipaggiamenti, i quali introdurranno nuove tattiche e nuovi stili di gioco</li> <li>Potenziamenti per il personaggio e per il proprio letto</li> <li>Un sistema di classifica e di leghe a punti ottenibili vincendo i match</li> </ul>";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> IMTech </li> </ul>";
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-desktop'></div> <div style='padding-left:3px'>Schermo condiviso (2-4)</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller necessario</div> </li> <li> <div class='fa-li fas fa-database'></div> <div style='padding-left:3px'>Salvataggio locale</div> </li> <li> <div class='fa-li fas fa-medal'></div> <div style='padding-left:3px'>Classifica</div> </li> </ul>";
            gameLinks = "<p>Coming soon...</p>";
            break;
        case 2:
            gameTitle = "HOUSE RUNNER";
            gameSubtitle = "Data di rilascio: 2020&nbsp;&nbsp;-&nbsp;&nbsp;Windows · Android";
            gameDescription = "Stare a casa è noioso? Perchè non correre tra i mobili di casa?<br/><br/> <b>House Runner</b> è il gioco che ti permette di saltare tra i mobili di casa senza fare danni: puoi addirittura saltare da un divano all'altro! Incredibile, vero?<br/><br/> Corri in casa e schiva i mobili, i quali cercheranno di farti male il mignolo del piede.<br/> Corri il più veloce possibile e raggiungi il punteggio più alto.<br/><br/> Competi e mostra ai tuoi amici chi è il runner più veloce tramite una classifica dedicata e sblocca tutti gli obiettivi correndo per la casa!<br/><br/> <b>Come nasce House Runner?</b><br/> House Runner è stato il mio primo serio approccio a Unity, nel tentativo di voler sviluppare qualcosa di minimamente completo da tale engine. Comprese le potenzialità di Unity e C#, svilupperò un progetto universitario di nome \"AI Car Kineton\" in collaborazione con l'azienda Kineton e, successivamente, Dungate: Zombie Survival, in collaborazione con il mio amico e collega universitario Carmine Ferrara.<br/> Mi serviva realizzare velocemente un piccolo gioco con Unity al fine di poterne comprendere le potenzialità, l'interazione tramite Android e come funzionasse la fase di release. Da qui è nato l'amore verso Unity ed il linguaggio C#.";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'><li>Overriders Group (Android)</li><li>IMTech (Windows)</li></ul>"
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-user'></div> <div style='padding-left:3px'>Giocatore singolo</div> </li> <li> <div class='fa-li fas fa-keyboard'></div> <div style='padding-left:3px'>Tastiera necessaria</div> </li> <li> <div class='fa-li fas fa-database'></div> <div style='padding-left:3px'>Salvataggio locale</div> </li> <li> <div class='fa-li fas fa-medal'></div> <div style='padding-left:3px'>Classifica</div> </li> <li> <div class='fa-li fas fa-star'></div> <div style='padding-left:3px'>Obiettivi</div> </li>";
            gameLinks = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> <a href='https://gamejolt.com/games/houserunner/489400' target='_blank'>Download Windows</a> </li> <li> <a href='https://play.google.com/store/apps/details?id=com.overridersgroup.houserunner' target='_blank'>Download Android</a> </li> </ul>";
            break;
        case 3:
            gameTitle = "BRAWL ARENA";
            gameSubtitle = "Data di rilascio: 2016&nbsp;&nbsp;-&nbsp;&nbsp;Windows 7";
            gameDescription = "Un nuovo sistema di gioco approda su computer: un colpo per uccidere l'avversario.<br/><br/> <b>Brawl Arena</b> è un indie competitivo in cui due leggende si sfidano a suon di incantesimi su un campo di lotta. Ogni leggenda ha i propri incantesimi e le proprie tecniche per schivare, dando al giocatore una vasta scelta di stili di gioco.<br/><br/> Gioca sempre con varietà e competizione: 23 leggende disponibili tutte diverse tra loro, 8 campi di lotta disponibili e 4 effetti KO.<br/><br/> <b>L'abbandono di Brawl Arena</b><br/> Il gioco, in origine, prevedeva ben 40 personaggi, 8 campi di lotta e 5 effetti KO. Brawl Arena utilizzava un engine molto datato, Game Maker 8, facendo uso solo di drag and drop: studiando programmazione, mi sono reso conto di quanti limiti mi abbia imposto l'utilizzo di quest'ultimo, quindi ho deciso di chiudere il progetto e di non perderci altro tempo. Successivamente, la scoperta del poco supporto al multiplayer da parte di Yoyo Games non ha fatto altro che confermare i miei dubbi circa le potenzialità dell'engine stesso.<br/> Nonostante i limiti imposti da Game Maker, <b>Brawl Arena ha raggiunto la terza posizione tra i 10 migliori giochi di Gamejolt nel 2017</b>.<br/> Inoltre, tali limiti non hanno fermato l'utilizzo di Game Maker da parte mia: nel 2021 sarà disponibile Faction Wars, creato con Game Maker Studio 1.4 offrendo un gameplay interamente offline, pensato per le serate tra amici piene di competizione e divertimento.<br/><br/> <b>Problemi</b><br/> Essendo stato sviluppato su Game Maker 8, engine fortemente legato al sistema operativo dei suoi tempi, Brawl Arena è strettamente compatibile con Windows 7.<br/> L'esperienza di gioco su sistemi operativi differenti potrebbe cambiare. Alcuni problemi riscontrati trattano la mancanza di soundtracks, di suoni, di sprites e di immagini. Siccome Brawl Arena non verrà mai più aggiornato, verranno ignorate tutte le segnalazioni inerenti ai problemi su Windows 10.";
            gameAuthors = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> Francesco Abate </li> </ul>";
            gamePublisher = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> IMTech </li> </ul>";
            gameDetails = "<ul class='fa-ul mb-0' style='padding: 0px!important; margin-left: 24px!important;'> <li> <div class='fa-li fas fa-desktop'></div> <div style='padding-left:3px'>Schermo condiviso (2)</div> </li> <li> <div class='fa-li fas fa-keyboard'></div> <div style='padding-left:3px'>Tastiera necessaria</div> </li> <li> <div class='fa-li fas fa-gamepad'></div> <div style='padding-left:3px'>Controller opzionale</div> </li> <li> <div class='fa-li fas fa-star'></div> <div style='padding-left:3px'>Obiettivi</div> </li> </ul>";
            gameLinks = "<ul style='padding: 0px!important; padding-left: 20px!important;'> <li> <a href='https://gamejolt.com/games/brawl-arena/148784' target='_blank'>Download</a> </li> <li> <a href='https://youtu.be/jDkjtr7tQd8' target='_blank'>Daven/Oren trailer</a> </li> <li> <a href='https://youtu.be/DrhU6hWgw3c' target='_blank'>Aterlux/Hozor trailer</a> </li> <li> <a href='https://youtu.be/WYJC_THCWbg' target='_blank'>Game trailer</a> </li> </ul>";
            break;
    }
    document.getElementById("project_title").innerHTML = gameTitle;
    document.getElementById("project_subtitle").innerHTML = gameSubtitle;
    document.getElementById("project_description").innerHTML = gameDescription;
    document.getElementById("project_authors").innerHTML = gameAuthors;
    document.getElementById("project_publisher").innerHTML = gamePublisher;
    document.getElementById("project_details").innerHTML = gameDetails;
    document.getElementById("project_links").innerHTML = gameLinks;

});