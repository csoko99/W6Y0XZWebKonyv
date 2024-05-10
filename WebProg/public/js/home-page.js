$(document).ready(function () {
    let csapatok = [
      "<img src='/kepek/logos/real-madrid.png' class='logo'>",
      "<img src='/kepek/logos/golden-state.png' class='logo'>",
      "<img src='/kepek/logos/mercedes.png' class='logo'>"
    ];
  
    let fokep = [
      "<img src='/kepek/logos/real-fokep.jpg' class='fokep'>",
      "<img src='/kepek/logos/golden-fokep.webp' class='fokep'>",
      "<img src='/kepek/logos/mercedes-fokep.jpg' class='fokep'>"
    ];
  
    let index = 0;
  
    setInterval(function () {
      $("#fokepek").fadeOut(2000, function () {
        $(this).html(fokep[index]).fadeIn(2000);
      });
      index = (index + 1) % fokep.length;
    }, 6000);
  
    let sportsData = [{
        sport: "football",
        title: "Labdarúgás",
        image: "/kepek/intros/soccer-sec.png",
        sport_description: "A labdarúgás (angol eredetű szóval football, az Amerikai Egyesült Államokban soccer, magyaros átírásban futball, a köznyelvben gyakran foci) labdajáték, amelyet a pályán két, egyenként 11 labdarúgóból álló csapat játszik egymás ellen. A játék célja, hogy a rendelkezésre álló idő alatt a labdát az ellenfél kapujába juttassák, lehetőleg minél többször, és így minél több gólt szerezzenek. A Nemzetközi Futballszövetségi Testület (International Football Association Board IFAB), a játék szabályalkotó szervezete. 1886-ban ez a szervezet fektette le a futball szabályait. A futball lábsport, de a játékos bármely testrészét használhatja a labda irányítására, csak a karjait nem. Kivétel a kapus, akinek a tizenhatos vonalon belül nincs „tiltott” testrésze, a büntetőterületen kívül viszont ő is mezőnyjátékosnak számít. Amikor a labda az oldalvonalnál hagyja el a játékteret, akkor kézzel (bedobással) kell játékba hozni, viszont ebben az esetben lábbal nem szabad érinteni.",
        sport_description_link: "https://hu.wikipedia.org/wiki/Labdarúgás",
        favourite_team: "Real Madrid CF",
        favteam_desc: "A Real Madrid Club de Fútbol, rövidítve Real Madrid CF (a sajtóban legtöbbször egyszerűen Real Madrid vagy a Galaktikusok) spanyol labdarúgóklub. 1902-es megalapítása óta a spanyol élvonal tagja, még sosem esett ki.35 bajnoki címével és 20 kupagyőzelmével a legeredményesebb spanyol csapat, emellett 14 alkalommal nyerték meg a Bajnokok Ligáját (BEK-et is beleszámítva), ami szintén rekord. A csapat kétszer az UEFA-kupát is elhódította, így az összes európai kupagyőzelmek tekintetében is az első helyen áll (14 BL, 2 UEFA-kupa).",
        favteam_desc_link: "https://hu.wikipedia.org/wiki/Real_Madrid_CF",
        fav_player: "Kaká",
        fav_player_desc: "Ricardo Izecson dos Santos Leite, ismertebb nevén Kaká (Brazíliaváros, 1982. április 22. –) brazil labdarúgó, középpályás, válogatott játékos. A futballszakértők és újságírók a világ egyik legjobb középpályásának tartják. A Kaká név onnan ered, hogy az öccse még nem tudta kimondani a keresztnevét, így lerövidítette azt (Ricardo, Kardo, Kaká). 2007. december 2-án Kaká kapta a 2007-es aranylabdát, vagyis az év európai focistájának választották. A 8. Milan-játékos lett, aki a címet a magáénak mondhatja. 444 szavazatot kapott, messze megelőzve ezzel a második Cristiano Ronaldót. Párizsban a díjátadón többek között ezt mondta: „Kivételes év volt ez számomra, és az aranylabda megkoronázza ezt a különleges 2007-es évet a számomra… Szeretnék hálát adni Istennek, aki megengedte, hogy itt legyek ma. Köszönöm a feleségemnek, a szüleimnek és a Milan csapatának is.” 2009-ben a Real Madridba szerződött.",
        fav_player_desc_link: "https://hu.wikipedia.org/wiki/Kaká",
        fav_player_img: "/kepek/intros/kaka.png",
        video: "videos/real-madrid-vid.mp4"
      },
      {
        sport: "basketball",
        title: "Kosárlabda",
        image: "/kepek/intros/basketball-sec.png",
        sport_description: "A kosárlabda egy olyan labdajáték, amelyet két ötfős csapat játszik. Mindkét csapatnak az a célja, hogy a labdát az ellenfél kosarába dobja, valamint megakadályozza a másik csapatot a labda megszerzésében, illetve kosár elérésében. Egy-egy kosár elérése után pontokat kapnak a csapatok. Egy kosár alapvetően két pontot ér. Ha távolról, a hárompontos vonalon túlról érik el, akkor három pontot, ha büntetődobásból szerzik, akkor csak egy pontot jegyeznek fel érte. A mérkőzést az a csapat nyeri meg, amelyik a mérkőzés végére több pontot ér el. Döntetlen eredmény nincs a kosárlabdában. Ha a mérkőzés végén egyenlő az állás, akkor hosszabbítás következik ahányszor csak szükséges a győztes eldöntéséhez. Ez alól egy kivétel van, ha a csapatok oda-visszavágó mérkőzést játszanak. Ebben az esetben az első találkozón lehet döntetlen az eredmény, mert a teljes végeredményt a két mérkőzésen elért pontok összegzésével kell megállapítani. Ugyanekkor előfordulhat, hogy a második mérkőzésen annak ellenére hosszabbítást kell játszani, hogy az eredmény nem egyenlő, de az összesített állás viszont igen.",
        sport_description_link: "https://hu.wikipedia.org/wiki/Kosárlabda",
        favourite_team: "Golden State Warriors",
        favteam_desc: "A Golden State Warriors amerikai profi kosárlabdacsapat, amely az National Basketball Association-ben játszik. Székhelyük a kaliforniai San Francisco. A Warriors a nyugati főcsoportban szerepel, a csendes-óceáni csoportban. 1946-ban alapították Philadelphiában, a Warriors 1962-ben a San Francisco Bay Area-ba költözött és felvették a város nevét, mielőtt 1971-ben a Golden State névre változtatták volna. Hazai mérkőzéseiket a Chase Centerben játsszák.",
        favteam_desc_link: "https://hu.wikipedia.org/wiki/Golden_State_Warriors",
        fav_player: "Wardell Stephen Curry",
        fav_player_desc: "Wardell Stephen Curry (Akron, 1988. március 14. –) amerikai válogatott kosárlabda-játékos, az NBA Golden State Warriors csapatában. Sok megfigyelő véleménye szerint ő a legjobb tempódobó az NBA történetében. A 2014–2015-ös NBA-évadban Curry megnyerte az NBA Most Valuable Player díjat, és hozzásegítette a Warriors csapatát első bajnoki győzelméhez 1975 óta. Ő szerezte a legtöbb hárompontost az NBA történetében ezzel megelőzve a korábbi rekordtartó Ray Allent. 2022-ben megnyerte az NBA legújabb díját, kiejtve a Dallas Maverickset a nyugati főcsoportdöntőben. Ezzel ő lett az első, Magic Johnson nyugati főcsoportdöntő MVP díjas játékos a liga történelmében.",
        fav_player_desc_link: "https://hu.wikipedia.org/wiki/Stephen_Curry",
        fav_player_img: "/kepek/intros/curry.png",
        video: "videos/golden-state-vid.mp4"
      },
      {
        sport: "formula1",
        title: "Formula-1",
        image: "/kepek/intros/f1-sec.png",
        sport_description: "A Formula–1 (rövidítve: F1, magyarul korábban rendszerint Forma–1, angolul: Formula One) a legrangosabb nemzetközi autóverseny-sorozat, melynek szabályait a Nemzetközi Automobil Szövetség (FIA) határozza meg. A Formula–1-es világbajnokságban nyitott karosszériájú, együléses versenyautók vehetnek részt. A versenysorozat több állomásból, Grand Prix-ből (nagydíjból) áll, amelyeket szilárd burkolatú, erre a célra kialakított zárt, vagy városi pályákon rendeznek. Az eredmények alapján évente két világbajnokot avatnak, egy egyénit és egy konstruktőrit (csapat-világbajnokság). A versenyeket több százmillióan nézik televízión, a világ több mint kétszáz országában.",
        sport_description_link: "https://hu.wikipedia.org/wiki/Formula–1",
        favourite_team: "Mercedes-AMG PETRONAS",
        favteam_desc: "A Mercedes egy német Formula-1es csapat, ami 2010 óta a Brawn GP utódjaként vesz részt a Formula-1-es világbajnokságban. A Mercedes korábban 1954-55-ben szerepelt saját csapattal a versenysorozatban, akkor Juan Manuel Fangio mindkét évben világbajnok lett. A visszatérést követően a 2012-es kínai nagydíjon nyertek először futamot Nico Rosberg révén. 2014-ben a csapat nagy fölénnyel megszerezte első konstruktőr-világbajnoki címét (az 1954-55ös szereplés idején ezt még nem értékelték), és az egyéni világbajnokság iskét versenyzője, Rosberg és Lewis Hamilton között dőlt el, kettejük vetélkedéséből év végén Hamilton került ki győztesen. 2015-ben Hamilton és a csapat is megvédte a címét. 2016-ban ismét a Mercedes nyerte mindkétvilágbajnoki címet, de a két pilóta közül ezúttal Rosberg kerekedett felül.",
        favteam_desc_link: "https://hu.wikipedia.org/wiki/Mercedes_AMG_F1",
        fav_player: "Lewis Hamilton",
        fav_player_desc: "Sir Lewis Carl Davidson Hamilton MBE (Stevenage, Hertfordshire, 1985. január 7. –) brit autóversenyző, hétszeres Formula–1-es világbajnok. A Mercedes pilótája. 2008-ban megszerezte pályafutása első világbajnoki címét, majd 2014-ben, 2015-ben, 2017-ben, 2018-ban, 2019-ben és 2020-ban is világbajnok tudott lenni. Ő tartja a legtöbb pole-pozíció rekordját, és a futamgyőzelmek tekintetében is a legeredményesebb a Formula–1-ben. A 2020-as török nagydíjon megszerezte 7. világbajnoki címét, és ezzel beérte Michael Schumacher rekordját. a Brit Birodalom Rendjének kitüntetettje (MBE). Ő az első a sportág történetében aki elérte a 100-as álomhatárt a pole pozíciók és a futamgyőzelmek tekintetében. ",
        fav_player_desc_link: "https://hu.wikipedia.org/wiki/Lewis_Hamilton",
        fav_player_img: "/kepek/intros/hamilton.png",
        video: "/videos/hamilton-vid.mp4"
      }
    ];
  
    $(".sport-img").click(function () {
      let sport = $(this).attr("alt");
      for (let i = 0; i < sportsData.length; i++) {
        if (sportsData[i].sport === sport) {
          let data = sportsData[i];
          console.log(data.title);
          $("#sports").animate({
              height: "toggle"
            }, 500,
            function () {
              $("#main").append("<div class='current_sport kanit-regular' ></div>");
              $(".current_sport").append("<h2>" + data.title + "</h2>");
              $(".current_sport").append("<img src='" + data.image + "' alt='" + data.title + "' class='sec-img'> <br>");
              $(".current_sport").append("<p class='description'>" + data.sport_description + "</p>  <a href='" + data.sport_description_link + "' target='_blank'>" + data.sport_description_link + "</a> <br>");
              $(".current_sport").append("<h3>Kedvenc csapatom: " + data.favourite_team + "</h3> <br>");
              $(".current_sport").append("<p class='description'>" + data.favteam_desc + "</p> <a href='" + data.favteam_desc_link + "' target='blank'>" + data.favteam_desc_link + "</a> <br>");
              $(".current_sport").append("<div class='player-section'></div>")
              $(".player-section").append("<div class='fav-player-desc'><h3>Kedvenc játékos: " + data.fav_player + "</h3> <br> <p>" + data.fav_player_desc + "</p> <a href='" + data.fav_player_desc_link + "' target='_blank'>" + data.fav_player_desc_link + "</a></div>");
              $(".player-section").append("<img src='" + data.fav_player_img + "' alt='" + data.fav_player + "' class='fav-player-img'>");
              $(".current_sport").append("<video width='100%'  controls> <source src='" + data.video + "' type='video/mp4'> </video>");
              $(".current_sport").append("<div class='media-btn-group'> <button class='mute-unmute media-btn kanit-regular'> <b>Némítás/Hangadás</b> </button> <button class='start-stop media-btn kanit-regular'> <b>Indítás/Megállítás</b> </button> <button class='speedup-slowdown media-btn kanit-regular'> <b>Gyorsítás/Visszaállítás</b> </button></div>");
              $(".current_sport").append("<button class='back'><b> Vissza </b></button>");
            }
          );
          break;
        }
      }
    });
  
    // Vissza gomb
    $("#main").on("click", ".back", function () {
      $(".current_sport").animate({
          height: "toggle"
        }, 500,
        function () {
          $(".player-section").remove();
          $(".current_sport").remove();
          $("#sports").show(500);
        }
      );
    });
  
    // Némítás/Hangadás gomb
    $("#main").on("click", ".mute-unmute", function () {
      let video = $(".current_sport video")[0];
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
    });
  
    // Indítás/Megállítás gomb 
    $("#main").on("click", ".start-stop", function () {
      let video = $(".current_sport video")[0];
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  
    // Gyorsítás/Visszaállítás gomb 
    $("#main").on("click", ".speedup-slowdown", function () {
      let video = $(".current_sport video")[0];
      if (video.playbackRate == 1) {
        video.playbackRate = 2;
      } else {
        video.playbackRate = 1;
      }
    });
});