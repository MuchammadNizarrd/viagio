//backgruound music//
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("bg-music");
    var playButton = document.getElementById("play-music-btn");
    var aboutButton = document.getElementById("our-experience-btn"); // Tombol about

    playButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
        }
    });
    // Menghentikan musik saat tombol about ditekan
    aboutButton.addEventListener("click", function () {
        if (!music.paused) {
            music.pause();
            music.currentTime = 0; // Reset posisi musik ke awal
        }
    });
});

//vidio tiktok tumpak sewu//
document.addEventListener("DOMContentLoaded", function () {
    var tumpakSewuBtn = document.getElementById("tumpak-sewu-btn");
    var videoContainer = document.getElementById("tiktok-video-container");
    var closeVideo = document.getElementById("close-video");
    var tiktokVideo = videoContainer.querySelector("iframe");

    tumpakSewuBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});

//vidio tiktok gunung buthak//
document.addEventListener("DOMContentLoaded", function () {
    var gunungbuthakBtn = document.getElementById("gunung-buthak-btn");
    var videoContainer = document.getElementById("tiktok-video-buthak");
    var closeVideo = document.getElementById("close-video-buthak");
    var tiktokVideo = videoContainer.querySelector("iframe");

    gunungbuthakBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});

// banyu meneng//
document.addEventListener("DOMContentLoaded", function () {
    var banyumenengBtn = document.getElementById("banyu-meneng-btn");
    var videoContainer = document.getElementById("tiktok-video-banyu");
    var closeVideo = document.getElementById("close-video-banyu");
    var tiktokVideo = videoContainer.querySelector("iframe");

    banyumenengBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});
//vidio budug asu//
document.addEventListener("DOMContentLoaded", function () {
    var budugasuBtn = document.getElementById("budug-asu-btn");
    var videoContainer = document.getElementById("tiktok-video-budug");
    var closeVideo = document.getElementById("close-video-budug");
    var tiktokVideo = videoContainer.querySelector("iframe");

    budugasuBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});
//ranu regulo//
document.addEventListener("DOMContentLoaded", function () {
    var ranureguloBtn = document.getElementById("ranu-regulo-btn");
    var videoContainer = document.getElementById("tiktok-video-ranu");
    var closeVideo = document.getElementById("close-video-ranu");
    var tiktokVideo = videoContainer.querySelector("iframe");

    ranureguloBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});
//private vidio//
document.addEventListener("DOMContentLoaded", function () {
    var privateBtn = document.getElementById("private-trip-btn");
    var videoContainer = document.getElementById("tiktok-video-private");
    var closeVideo = document.getElementById("close-video-private");
    var tiktokVideo = videoContainer.querySelector("iframe");

    privateBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});
//wonogoro//
document.addEventListener("DOMContentLoaded", function () {
    var privateBtn = document.getElementById("pantai-wonogoro-btn");
    var videoContainer = document.getElementById("tiktok-video-wonogoro");
    var closeVideo = document.getElementById("close-video-wonogoro");
    var tiktokVideo = videoContainer.querySelector("iframe");

    privateBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
    });

    closeVideo.addEventListener("click", function () {
        videoContainer.style.display = "none";
        tiktokVideo.src = tiktokVideo.src;
    });
});