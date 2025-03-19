//backgruound music//
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");
    var playButton = document.getElementById("play-music-btn");

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    });
});

//vidio tiktok tumpak sewu//
document.addEventListener("DOMContentLoaded", function () {
    var tumpakSewuBtn = document.getElementById("tumpak-sewu-btn");
    var videoContainer = document.getElementById("tiktok-video-container");
    var closeVideo = document.getElementById("close-video");

    tumpakSewuBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});

//vidio tiktok gunung buthak//
document.addEventListener("DOMContentLoaded", function () {
    var gunungbuthakBtn = document.getElementById("gunung-buthak-btn");
    var videoContainer = document.getElementById("tiktok-video-buthak");
    var closeVideo = document.getElementById("close-video-buthak");

    gunungbuthakBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});

//vidio banyu meneng//
document.addEventListener("DOMContentLoaded", function () {
    var banyumenengBtn = document.getElementById("banyu-meneng-btn");
    var videoContainer = document.getElementById("tiktok-video-banyu");
    var closeVideo = document.getElementById("close-video-banyu");

    banyumenengBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});
//vidio budug asu//
document.addEventListener("DOMContentLoaded", function () {
    var budugasuBtn = document.getElementById("budug-asu-btn");
    var videoContainer = document.getElementById("tiktok-video-budug");
    var closeVideo = document.getElementById("close-video-budug");

    budugasuBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});
//ranu regulo//
document.addEventListener("DOMContentLoaded", function () {
    var ranureguloBtn = document.getElementById("ranu-regulo-btn");
    var videoContainer = document.getElementById("tiktok-video-ranu");
    var closeVideo = document.getElementById("close-video-ranu");

    ranureguloBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});
//private vidio//
document.addEventListener("DOMContentLoaded", function () {
    var privateBtn = document.getElementById("private-trip-btn");
    var videoContainer = document.getElementById("tiktok-video-private");
    var closeVideo = document.getElementById("close-video-private");

    privateBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});