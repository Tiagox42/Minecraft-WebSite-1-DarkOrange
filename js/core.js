window.onload = function(){


    // GENERAL CONFIGS

    //Site title
    let title = 'BattleCraft';

    //Server Ip (counter)
    var serverIp = 'mc.hypixel.net';

    //Banner image (url) 
    var bannerTop = 'https://i.imgur.com/k0MtSCb.png';

    //Home Gallery
    //Firs text / image (url)
    var text_Gfirst = 'Special Items'
    var image_Gfirst = 'https://i.imgur.com/OkfQb7q.png'
    //Second
    var text_Gsecond = 'Economy'
    var image_Gsecond = 'https://i.imgur.com/OkfQb7q.png'
    //Third
    var text_Gtrird = 'Great Community' 
    var image_Gtrird = 'https://i.imgur.com/OkfQb7q.png'

    document.getElementById('title').innerHTML = title;
    document.getElementById('statusOnline').setAttribute('data-playercounter-ip', serverIp);
    document.getElementById('statusOnline2').setAttribute('data-playercounter-ip', serverIp);
    document.getElementById('bannerTop').style.backgroundImage = "url("+bannerTop+")";
    document.getElementById('image_Gfirst').style.backgroundImage = "url("+image_Gfirst+")";
    document.getElementById('text_Gfirst').innerHTML = text_Gfirst;
    document.getElementById('image_Gsecond').style.backgroundImage = "url("+image_Gsecond+")";
    document.getElementById('text_Gsecond').innerHTML = text_Gsecond;
    document.getElementById('image_Gtrird').style.backgroundImage = "url("+image_Gtrird+")";
    document.getElementById('text_Gtrird').innerHTML = text_Gtrird;

}