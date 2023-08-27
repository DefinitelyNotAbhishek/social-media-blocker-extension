const generateHTML = (pageName) => {

    return `

<div class = 'c'>

    
    

    <div class = '_1'> GO BACK TO STUDY!! </div>
    <br>
    <br>
    <div class = '_2'>STUDYING > ${pageName}</div>

</div>`;
    
    
};

const generateSTYLING =  () => {

    return `
    <style>



    ._1 {
        text-align: center;
        color: #FFFFFF;
        display: block;
        position: relative;
        letter-spacing: 12px;
        font-size: 8em;
        line-height: 80%;
        text-shadow: 2px 2px #000000;
      }

    ._2 {
        text-align: center;
        color: #FFFFFF;
        display: block;
        position: relative;
        font-size: 50px;
        text-shadow: 2px 2px #000000;
      }

    body {
         background-color: coral;
         background-image: url(https://gifdb.com/images/high/comic-character-batman-no-trih70c8ft9w3ble.gif);
         background-repeat: no-repeat;
         background-size: 120% 360%;
         }
    


    
    
    </style>`
};




switch (window.location.hostname) 
{

    case "www.youtube.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;

    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;

    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;

    case "www.cricbuzz.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("CRICBUZZ");
        break;


    case "discord.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("DISCORD");
        break;

    case "twitter.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER");
        break;




}