window.onload = function(){
  var aantalStemmen1 = sessionStorage.getItem("stemmen");
  aantalStemmen = parseInt(aantalStemmen1);
  var step = sessionStorage.getItem("step");
  var stemmen = document.getElementById("js--volgers");
  var antwoorden = document.getElementById("antwoorden--js");
  var nextButton = document.getElementById("nextButton--js");
  var vraagCounter = 0;
  let optie1 = document.getElementById("optie1--js");
  let optie2 = document.getElementById("optie2--js");
  let optie3 = document.getElementById("optie3--js");
  var vraag = document.getElementById("vraag--js");
  var campagneVragen = [
    {
      q: "Op welke manier wil je reclame gaan maken?",
      o: [
        "via de tv",
        "via billboards",
        "via de krant"
      ],
      bestA: "via de tv",
      medA: "via billboards",
      badA: "via de krant",
      bestArespond: "Via de tv heb je veel mensen aangesproken",
      medArespond: "Via billboards heb je een paar mensen aangesproken, maar er zijn beter manieren om te adverteren",
      badArespond: "Doordat je via de krant ging andverteren en Trump via de tv heeft hij meer mensen aangesproken dan jij en verlies je stemmers"
    },
    {
      q: "op welke groep mensen ga je je extra focussen?",
      o: [
        "de arbeidsklasse",
        "de hogere klasse",
        "de middenklasse"
      ],
      bestA: "de arbeidsklasse",
      medA: "de middenklasse",
      badA: "de hogere klasse",
      bestArespond: "Deze strategie werd vaker gebruikt door voorgaande democratische presidentskandidaten, wat een key factor was bij het winnen van de drie kritieke midwestern-staten. Hillary zou de suggestie van haar man Bill hebben afgewezen dat ze meer tijd besteedde aan het bereiken van deze mensen.",
      medArespond: "In de middenklassen ging het heel gelijk aan met stemmers. Door te focussen op deze doelgroep heb je een paar stemmers binnengehaald.",
      badArespond: "De rijkere mensen die zijn meer voor de ideeën van Donald Trump. Door je op deze doelgroep te focussen heb je stemmen verloren, doordat de mensen in de andere klassen op Trump zijn gaan stemmen."
    },
    {
      q: "Het is nog een paar dagen voordat mensen mogen stemmen. Welke staat ga je nog een keer langs?",
      o: [
        "California",
        "Wisconsin",
        "Texas"
      ],
      bestA: "Wisconsin",
      medA: "Texas",
      badA: "California",
      bestArespond: "In Wisconsin waren nog veel mensen die niet zeker wisten op wie ze moesten stemmen. Na je bezoek zijn ze op jou gaan stemmen.",
      medArespond: "In Texas waren nog een paar mensen die niet wisten op wie ze moesten stemmen. Door je bezoek zijn ze op jou gaan stemmen.",
      badArespond: "In California wisten de meeste al op wie ze gingen stemmen. Doordat Trump een andere staat heeft bezocht ben je stemmers verloren."
    }
  ];
  var debatVragen = [
    {
      q: "Het debat begint bijna. Waar ga je op focussen?",
      o: [
        "Kijken hoe Trump zich gedraagd en daarop reageren",
        "focussen op de effecten die Trump zijn beleid invloed zou hebben"
      ],
      bestA: "focussen op de effecten die Trump zijn beleid invloed zou hebben",
      badA: "Kijken hoe Trump zich gedraagd en daarop reageren",
      bestArespond: "Hillary Clinton focusde teveel op Trump zelf en niet op de effecten die hij zou hebben op Amerika. Door hier wel op te focussen heb je meer stemmen binnengehaald",
      badArespond: "Hillary Clinton focusde teveel op Trump zelf en niet op de effecten die hij zou hebben op Amerika. Hierdoor zijn er minder mensen op je gaan stemmen."
    },
    {
      q: "Trump begint over je e-mail scandal. Hoe ga je erop reageren?",
      o: [
        "Je vertelt de waarheid en bied je excuses aan",
        "Je ontkent het en gaat verder over een ander onderwerp"
      ],
      bestA: "",
      medA: "Je vertelt de waarheid en bied je excuses aan",
      badA: "Je ontkent het en gaat verder over een ander onderwerp",
      bestArespond: "prima",
      medArespond: "Je beperkt de schade. Hillary stopte dit soort dingen meestal weg. En toen het uiteindelijk een groot ding werd verontschuldigde ze wel, maar was dit vaak al te laat. Trump legde ook vaak dingen opzij, maar als hij een echt probleem had, zorgde hij ervoor dat het Amerikaanse volk wist dat hij een fout had gemaakt.",
      badArespond: "Uiteindelijk komen er toch bewijzen boven tafel waaruit blijkt dat het echt is gebeurd. Je verontschuldig je wel, maar dit is veel te laat. Doordat Hillary vaak zich niet verontschuldigd voor de fouten die ze maakte was het gevolg dat ze veel stemmers verloor"
    },
    {
      q: "Wat zijn je plannen met de healtcare",
      o: [
        "Obamacare gaan voortzetten en verbeteren",
        "Een heel ander systeem gaan opzetten"
      ],
      bestA: "Een heel ander systeem gaan opzetten",
      badA: "Obamacare gaan voortzetten en verbeteren",
      bestArespond: "Veel mensen waren niet blij met obama care. Ze zijn blij dat je het anders gaat doen. Hierdoor win je stemmen.",
      badArespond: "Veel mensen waren niet blij met obama care. Ze hebben veel liever een ander systeem ervoor. Je verliest stemmers door die keuze."
    }
  ];
  var clintonVoteButton = document.getElementById("clintonVoteButton--js");
  var trumpVoteButton = document.getElementById("trumpVoteButton--js");
  var vote = document.getElementById("vote--js");
  var count = 2;
  var stemmenErbij = document.getElementById("votes--js");
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  if(sPage == "campagne.html"){
     sessionStorage.setItem("step", "step2");
     stemmen.innerHTML = sessionStorage.getItem("stemmen");
     addVraag(0, campagneVragen);
     stemmenErbij.style.display = "none";
     next();
  }
  else if(sPage  == "uitleg.html"){
    stemmen.innerHTML = sessionStorage.getItem("stemmen");
    sessionStorage.setItem("step", "step1");
    next();
  }
  else if(sPage  == "debat.html"){
    sessionStorage.setItem("step", "step3");
    stemmenErbij.style.display = "none";
    stemmen.innerHTML = sessionStorage.getItem("stemmen");
     addVraag(0, debatVragen);
     next();
  }
  else if(sPage  == "vote.html"){
    sessionStorage.setItem("step", "step3");
    stemmen.innerHTML = sessionStorage.getItem("stemmen");
    addVoteButtons();
    next();
  }
  else if(sPage == ""){
    sessionStorage.setItem("stemmen", 0);
  }
  else if(sPage == "index.html"){
    sessionStorage.setItem("step", "step1");
    sessionStorage.setItem("stemmen", 0);
  }
  else if(sPage == "result.html"){
    showResult();
    stemmen.innerHTML = sessionStorage.getItem("stemmen");
    next();
  }
  document.getElementById("home--js").addEventListener("click",()=>{
    location.href = "index.html";
  })

  function addVraag(i, array){
    removeEventListeners();
    nextButton.style.display = "none";
    item = array[i];
    vraag.innerHTML = (item["q"]);
    optie1.innerHTML = (item["o"][0]);
    optie2.innerHTML = (item["o"][1]);
    optie3.innerHTML = (item["o"][2]);
    if (optie3.innerHTML == "undefined"){
      optie3.style.display = "none";
    }
    else{
      optie3.style.display = "grid";
    }
    optie1.addEventListener("click",o1);
    optie2.addEventListener("click",o2);
    optie3.addEventListener("click",o3);
  }
  function o1(){
    addEvent(0, item["bestArespond"], item["medArespond"], item["badArespond"]);
  }
  function o2(){
    addEvent(1, item["bestArespond"], item["medArespond"], item["badArespond"]);
  }
  function o3(){
    addEvent(2, item["bestArespond"], item["medArespond"], item["badArespond"]);
  }

  function addEvent(i, bestRespond, medRespond, badRespond){
    if(item["o"][i] == item["bestA"]){
      addStemmen(25);
      showStemmenErbij("25");
      vraag.innerHTML = bestRespond;
    }
    else if(item["o"][i] == item["medA"]){
      showStemmenErbij("5");
      addStemmen(5);
      vraag.innerHTML = medRespond;
    }
    else{
      showStemmenErbij("-10");
      addStemmen(-10);
      vraag.innerHTML = badRespond;
    }
    antwoorden.style.display = "none";
    hideButton();
  }

  function removeEventListeners(){
    optie1.removeEventListener("click",o1);
    optie2.removeEventListener("click",o2);
    optie3.removeEventListener("click",o3);
  }

  function showStemmenErbij(stemmen){
    if (stemmen > 0) {
      stemmenErbij.style.color = "green";
      stemmen = "+" + stemmen;
    }
    else{
      stemmenErbij.style.color = "red";
    }
    stemmenErbij.innerHTML = stemmen;
    stemmenErbij.style.display = "block";
    stemmenErbij.className += "animate";
  }

  function addStemmen(value){
      aantalStemmen += value;
      if (aantalStemmen < 0){
        aantalStemmen = 0;
      }
      stemmen.innerHTML = aantalStemmen;
      console.log(aantalStemmen);
      sessionStorage.setItem("stemmen", aantalStemmen);
  }

  function showResult(){
    let hillarybar = document.getElementById("hillarybar--js");
    let trumpbar = document.getElementById("trumpbar--js");
    let hillaryWidth = 1;
    let trumpWidth = 1;
    let hillaryMaxWidth = 0;
    let hillary = setInterval(frameH, 10);
    let trump = setInterval(frameT, 10);
    if(aantalStemmen > 91){
      hillaryMaxWidth = getRandomInt(300, 500);
    }
    if(aantalStemmen > 71 && aantalStemmen < 90){
      hillaryMaxWidth = getRandomInt(270, 440);
    }
    if(aantalStemmen > 51 && aantalStemmen < 70){
      hillaryMaxWidth = getRandomInt(270, 300);
    }
    if(aantalStemmen > 20 && aantalStemmen < 50){
      hillaryMaxWidth = getRandomInt(210, 280);
    }
    if(aantalStemmen < 20){
      hillaryMaxWidth = getRandomInt(90, 200);
    }
    let trumpMaxWidth = 538 - hillaryMaxWidth;
    let hillaryStemmen = Math.round(hillaryMaxWidth - aantalStemmen);
    showStemmenErbij(hillaryStemmen);
    addStemmen(hillaryStemmen);

    function frameH(){
      let tekst = document.getElementById("resultTekst--js");
      if(hillaryWidth >= hillaryMaxWidth){
          if(hillaryMaxWidth > 269){
              tekst.innerHTML = "You won!";
          }else{
            tekst.innerHTML = "You lost!";
          }
          clearInterval(hillary);
        }
        else{
          hillaryWidth++;
          hillarybar.style.width = hillaryWidth / 538 * 100 + "%";
          hillarybar.innerHTML = hillaryWidth;
        }
    }
    function frameT(){
      if(trumpWidth >= trumpMaxWidth){
          clearInterval(trump);
        }
        else{
          trumpWidth++;
          trumpbar.style.width = trumpWidth / 538 * 100 + "%";
          trumpbar.innerHTML = trumpWidth;
        }
    }
  }

  function getRandomInt(min, max){
    return Math.round(Math.random() * (max - min) + min);
  }


  nextButton.addEventListener("click",() => {
    vraagCounter++;
    if(sPage == "campagne.html"){
      if(vraagCounter < 3){
        addVraag(vraagCounter, campagneVragen);
        stemmenErbij.style.display = "none";
        stemmenErbij.classList.remove("animate");
        antwoorden.style.display = "grid";
      }
      else{
        location.href = "debat.html";
      }
    }
    else if(sPage  == "debat.html"){
      if(vraagCounter < 3){
        addVraag(vraagCounter, debatVragen);
        stemmenErbij.style.display = "none";
        stemmenErbij.classList.remove("animate");
        antwoorden.style.display = "grid";
      }
      else{
        location.href = "vote.html";
      }
    }
    else if(sPage == "vote.html"){
      location.href = "result.html";
    }
    else if(sPage == ""){
      location.href = "uitleg.html";
    }
    else if(sPage == "index.html"){
      location.href = "uitleg.html";
    }
    else if(sPage == "index.html"){
      sessionStorage.setItem("step", "step1");
      sessionStorage.setItem("stemmen", "0");
    }
    else if(sPage == "uitleg.html"){
      location.href = "campagne.html";
    }
  })

  function addVoteButtons(){
  trumpVoteButton.addEventListener("click",() => {
    sessionStorage.setItem("step", "step4");
    trumpVoteButton.style.backgroundColor = "#C12C28";
    trumpVoteButton.style.boxShadow = "inset 0 0 2px 2px #555";
    vote.style.gridRowStart = "3";
    var id = setInterval(moveVote, 100);
    hideButton();
  })
  clintonVoteButton.addEventListener("click",() => {
    sessionStorage.setItem("step", "step4");
    clintonVoteButton.style.backgroundColor = "#C12C28";
    clintonVoteButton.style.boxShadow = "inset 0 0 2px 2px #555";
    vote.style.gridRowStart = "3";
    var id = setInterval(moveVote, 100);
    nextButton.style.gridRowStart = "5";
    hideButton();
  })
  }

  function moveVote(){
    if(vote.style.gridRowStart = "4"){
      clearInterval();
    }
    else{
      count++;
      vote.style.gridRowStart = "count";
    }
  }

  function hideButton(){
    if(nextButton.style.display == "none"){
      nextButton.style.display = "grid";
      }
    }

  function next() {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');

    if (step === 'step1') {
      step1.classList.remove("is-active");
      step1.classList.add("is-complete");
      step2.classList.add("is-active");

    } else if (step === 'step2') {
      step1.classList.add("is-complete");
      step2.classList.remove("is-active");
      step2.classList.add("is-complete");
      step3.classList.add("is-active");

    } else if (step === 'step3') {
      step1.classList.add("is-complete");
      step2.classList.add("is-complete");
      step3.classList.remove("is-active");
      step3.classList.add("is-complete");
      step4.classList.add("is-active");

    } else if (step === 'step4') {
      step1.classList.add("is-complete");
      step2.classList.add("is-complete");
      step3.classList.add("is-complete");
      step4.classList.remove("is-active");
      step4.classList.add("is-complete");

    } else if (step === 'complete') {
      step1.classList.add("is-complete");
      step2.classList.add("is-complete");
      step3.classList.add("is-complete");
      step4.classList.remove("is-complete");
      step3.classList.remove("is-complete");
      step2.classList.remove("is-complete");
      step1.classList.remove("is-complete");
      step1.classList.add("is-active");
    }
  }
};
