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
    var videoContainer = document.getElementById("tiktok-video-container");
    var closeVideo = document.getElementById("close-video");

    gunungbuthakBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
    });
});