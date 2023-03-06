console.log("welcome to spotify");
let songIndex = 0;
let timeSt = document.getElementById("timeSt");
let audioElement = new Audio("music/0.mp3");
let masterPlay = document.getElementById("masterPlay");
let Progressbar = document.getElementById("Progressbar");
let songName = document.getElementById("songName");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Let Me Love You",
    filePath: "music/0.mp3",
    coverPath: "assets/letmeloveyou.jpeg",
  },
  {
    songName: "Poylow, Lucky Low, MAD SNAX-Freak Show",
    filePath: "music/1.mp3",
    coverPath: "assets/ncs.jpg",
  },
  {
    songName: "Warriyo - Mortals",
    filePath: "music/2.mp3",
    coverPath: "assets/warriyomortals.jpg",
  },
  {
    songName: "DJ Snake- Taki Taki ft. Selena Gomez, Ozuna, Cardi B",
    filePath: "music/3.mp3",
    coverPath: "assets/takitaki.webp",
  },
  {
    songName: "Mejor Lazer & DJ Snake-Lean On(feat. MO)",
    filePath: "music/4.mp3",
    coverPath: "assets/leanon.jpg",
  },
  {
    songName: "Naacho Naacho(RRR)",
    filePath: "music/5.mp3",
    coverPath: "assets/naatu.jpg",
  },
  {
    songName: "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie)",
    filePath: "music/6.mp3",
    coverPath: "assets/rockby.webp",
  },
  {
    songName: "Marshmello & Anne-Marie - FRIENDS",
    filePath: "music/7.mp3",
    coverPath: "assets/friends.jpg",
  },
  {
    songName: "Roman Arabic song Afara e frig",
    filePath: "music/8.mp3",
    coverPath: "assets/afaraefrig.jpeg",
  },
  {
    songName: "Rema, Selens Gomez-Calm Down",
    filePath: "music/9.mp3",
    coverPath: "assets/calmdown.jpeg",
  },
];
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});
//audioElement.play();

masterPlay.addEventListener("click", () => {
  // audioElement.paused || audioElement.currentTime <= 0 ? audioElement.play() : audioElement.pause();
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    gif;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  Progressbar.value = progress;
  // document.getElementById("timeSt").innerHTML = progress;
  /*
 // var mind = progress % (60 * 60);
 // var minutes = Math.floor(mind / 60);

  //var secd = mind % 60;
  //var seconds = Math.ceil(secd); */
  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    console.log(ret);
    return ret;
  }
  fancyTimeFormat(progress);

  // console.log(`${mins}:${secs}`);
  //document.getElementById("timeSt").innerHTML = `${minutes}:${seconds}`;
});
timeSt.addEventListener("change", () => {
  audioElement.currentTime = (Progressbar.value * audioElement.duration) / 100;
});
Progressbar.addEventListener("change", () => {
  audioElement.currentTime = (Progressbar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);

      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `music/${songIndex}.mp3`;
      songName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `music/${songIndex}.mp3`;
  songName.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `music/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  songName.innerText = songs[songIndex].songName;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
