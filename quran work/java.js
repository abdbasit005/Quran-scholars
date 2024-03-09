
var audioplayer = new Audio();
function playAudio(fileLocation){
    if(!audioplayer.paused){
        audioplayer.pause();
    }

    audioplayer.src = fileLocation;
    audioplayer.play();
}



var btn = document.querySelectorAll(".drum");
for(let i = 0 ; i<btn.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var bottonContent = this.textContent;
       switch (bottonContent) {
        case "Al-Afasy":
            playAudio("sounds/alafasy.mp3");
            break;

       case "Al-juhani":
        playAudio("sounds/al-juhani.mp3");
        break;

        case "As-Sudais":
            playAudio("sounds/al-sudais.mp3");
            break;

        case "Al-Huzaifi":
            playAudio("sounds/al-huzaifi.mp3");
            break;

        case "Al-Ghamdi":
            playAudio("sounds/al-ghamdi.mp3");
            break;

        case "Abdul basit":
            playAudio("sounds/abdul-basit-64-surah-085.mp3");
            break;
        case "playaudio":
            if(!audioplayer.paused){
                 audioplayer.pause();
            } 
            else{
                audioplayer.play();
            }   
        default:
            console.log(bottonContent)
            break;
       }
     } )};

