'use client';

import { useEffect, useRef, useState } from "react";

export default function MiniPlayer() {
 const [currentVideo, setCurrentVideo] = useState({
  videoId: "IW0QkXpQs3k",
  title: "Nama Lagu Kamu", // bisa ganti sesuai judul
  thumbnail: "https://img.youtube.com/vi/IW0QkXpQs3k/hqdefault.jpg",
});

  useEffect(() => {
    // Tambahkan YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Cek secara berkala apakah API sudah siap
    const interval = setInterval(() => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        clearInterval(interval);
        playerRef.current = new window.YT.Player("yt-player", {
          height: "0",
          width: "0",
          videoId: currentVideo.videoId,
          playerVars: { autoplay: 1, mute: 1 },
          events: {
            onReady: (event) => {
              event.target.playVideo().catch(() => {
                console.log("Autoplay diblokir, tunggu interaksi user.");
              });
            },
          },
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentVideo.videoId]);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player) return;
    const state = player.getPlayerState();
    if (state === 1) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <>
      <div id="yt-player"></div>

      <div
        className="fixed top-24 right-4 w-48 bg-gray-800 rounded-full flex items-center p-2 shadow-lg cursor-pointer hover:scale-105 transition-transform"
        onClick={togglePlay}
      >
        <img
          src={currentVideo.thumbnail}
          alt="Thumbnail"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div className="flex-1 text-white truncate">{currentVideo.title}</div>
        <button className="text-white ml-2">▶️/⏸️</button>
      </div>
    </>
  );
}
