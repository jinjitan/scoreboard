homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");
home = 0;
guest = 0;

function homeOne() {
  home += 1;
  homeScore.innerText = home;

}

function homeTwo() {
  home += 2;
  homeScore.innerText = home;
}

function homeThree() {
  home += 3;
  homeScore.innerText = home;
}

function guestOne() {
  guest += 1;
  guestScore.innerText = guest;

}

function guestTwo() {
  guest += 2;
  guestScore.innerText = guest;
}

function guestThree() {
  guest += 3;
  guestScore.innerText = guest;
}



