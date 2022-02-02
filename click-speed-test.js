  let timer = document.getElementById("timer");
  let cps = document.getElementById("cps");
  let scor = document.getElementById("scor");
  let clickmebutton = document.getElementById("clickmebutton");
  let startbutton = document.getElementById("startbutton");
  var cpsmodal = document.getElementById("cpsmodal");
  var closecpsmodal = document.getElementById("closecpsmodal");
  let cpsrank = document.getElementById("cpsrank");
  let cpsCps = document.getElementById("cpsCps");
  let noClicks = document.getElementById("noClicks");
  let inSeconds = document.getElementById("inSeconds");
  let cpsMainmsg = document.getElementById("cpsMainmsg");
  let cpsSubmsg = document.getElementById("cpsSubmsg");
  let cpsmainimg = document.getElementById("cpsmainimg");
  let cpsmsgreset = document.getElementById("cpsmsgreset");
  let fbbutton = document.getElementById("fbbutton");
  let twbutton = document.getElementById("twbutton");
  let wabutton = document.getElementById("wabutton");
  var therank, thecps, theclicks, theseconds, themainmsg, thesubmsg, theimgurl;
  var score;
  var duration = 10;
  var startTime;
  var ended = true;

  function show(e) {
    e.style.display = 'block';
  }

  function hide(e) {
    e.style.display = 'none';
  }

  function startGame() {
    hide(startbutton);
    score = 0;
    ended = false;
    startTime = new Date().getTime();
    var timerId = setInterval(function() {
      var total = (new Date().getTime() - startTime) / 1000;
      if (total < duration) {
        timer.innerHTML = total.toFixed(3);
        cps.innerHTML = (score / total).toFixed(2);
      } else {
        ended = true;
        clearInterval(timerId);
        endGame();
      }
    }, 1);
  }

  function endGame() {
    var clicsBySeconds = (score / duration).toFixed(2);
    timer.innerHTML = duration.toFixed(3);
    cps.innerHTML = clicsBySeconds;
    show(startbutton);
    cpsReset();
    inSeconds.innerHTML = duration;
    if (clicsBySeconds > 0 && clicsBySeconds <= 5) {
      therank = "Cooter!";
      thecps = clicsBySeconds;
      theclicks = score;
      theseconds = duration;
      themainmsg = "“Dont Shy away from working hard, Keep Practicing for Better Results”";
      thesubmsg = "Try Harder to Prove Yourself";
      theimgurl = "https://joltfly.com/wp-content/uploads/2021/03/Cooter.svg";
    } else if (clicsBySeconds > 5 && clicsBySeconds <= 8) {
      therank = "Rodent!";
      thecps = clicsBySeconds;
      theclicks = score;
      theseconds = duration;
      themainmsg = "“Smart but not fast, flicker your finger even faster.”";
      thesubmsg = "Try Harder to Improve Your Rank";
      theimgurl = "https://joltfly.com/wp-content/uploads/2021/03/Rodent.svg";
    } else if (clicsBySeconds > 8 && clicsBySeconds <= 10) {
      therank = "Coney!";
      thecps = clicsBySeconds;
      theclicks = score;
      theseconds = duration;
      themainmsg = "“Time to go full throttle, you are not far from being the best.”";
      thesubmsg = "Try Again to be the Best in Business";
      theimgurl = "https://joltfly.com/wp-content/uploads/2021/03/Coney.svg";
    } else if (clicsBySeconds > 10) {
      therank = "Buffalo!";
      thecps = clicsBySeconds;
      theclicks = score;
      theseconds = duration;
      themainmsg = "“Your fingers snap at blistering speed just like the speedie cat runs. Hail to the king of clicking.”";
      thesubmsg = "Try Again to Beat Your Own Record King";
      theimgurl = "https://joltfly.com/wp-content/uploads/2021/03/Bufallo.svg";
    }
    setTimeout(function() {
      if (clicsBySeconds > 0) {
        hidecpsmsg();
        setTimeout(function() {
          fbbutton.href = "https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjoltfly.com/click-speed-test/";
          twbutton.href = "https://twitter.com/intent/tweet/?text=OMG! I Got a " + thecps + " Score in this amazing clicking game, i.e., I can click " + theclicks + " times in " + theseconds + " Second(s). Do you think you can beat my score? Try your luck! https%3A%2F%2Fjoltfly.com/click-speed-test/";
          wabutton.href = "https://wa.me/?text=OMG! I Got a " + thecps + " Score in this amazing clicking game, i.e., I can click " + theclicks + " times in " + theseconds + " Second(s). Do you think you can beat my score? Try your luck at https://joltfly.com/click-speed-test/";
          displaycpsmsg(therank, thecps, theclicks, theseconds, themainmsg, thesubmsg, theimgurl);
        });
      }
    }, 10);
  }

  function cpsClick() {
    startbutton.className += " clickMeTextHide";
    startGame();
  }
  startbutton.onclick = cpsClick;

  function cpsReset() {
    startbutton.className += " clickMeTextShow";
    startbutton.className = startbutton.className.replace(/(?:^|\s)clickMeTextHide(?!\S)/g, "");
    timer.innerHTML = "0.000";
  }

  function displaycpsmsg(rank, cps, clicks, seconds, mainmsg, submsg, imgurl) {
    cpsrank.innerHTML = rank;
    cpsCps.innerHTML = cps;
    noClicks.innerHTML = clicks;
    inSeconds.innerHTML = seconds;
    cpsMainmsg.innerHTML = mainmsg;
    cpsSubmsg.innerHTML = submsg;
    cpsmainimg.src = imgurl;
    cpsmodal.style.display = "block";
  }

  function hidecpsmsg() {
    cpsmodal.style.display = "none";
  }
  closecpsmodal.onclick = hidecpsmsg;
  window.onclick = function(event) {
    if (event.target == cpsmodal) {
      hidecpsmsg();
    }
  };

  function cpsmsgresetbutton() {
    hidecpsmsg();
    cpsReset();
  }
  cpsmsgreset.onclick = cpsmsgresetbutton;
  clickmebutton.addEventListener("click", function(e) {
    if (!ended) {
      score++;
      scor.textContent = score;
    }
  });
  window.onload = function() {
    let rippleElements = document.getElementsByClassName("myRipple");
    for (var i = 0; i < rippleElements.length; i++) {
      rippleElements[i].onclick = function(e) {
        let X = e.pageX - this.offsetLeft;
        let Y = e.pageY - this.offsetTop;
        let rippleDiv = document.createElement("div");
        rippleDiv.classList.add("ripple");
        rippleDiv.setAttribute("style", "top:" + (Y - 10) + "px; left:" + (X - 5) + "px;");
        let customColor = this.getAttribute("ripple-color");
        if (customColor) rippleDiv.style.background = customColor;
        this.appendChild(rippleDiv);
        setTimeout(function() {
          rippleDiv.parentElement.removeChild(rippleDiv);
        }, 900);
      };
    }
  };
