'use client';

import { useEffect, useRef, useState } from "react";

export default function MiniPlayer() {
  const [currentVideo] = useState({ videoId: "IW0QkXpQs3k" });
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState(new Array(15).fill(0));
  const [showToast, setShowToast] = useState(false);

  // Load YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const interval = setInterval(() => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        clearInterval(interval);
        playerRef.current = new window.YT.Player("yt-player", {
          height: "1",
          width: "1",
          videoId: currentVideo.videoId,
          playerVars: { autoplay: 1, mute: 0 },
          events: {
            onReady: (event) => {
              try {
                event.target.playVideo();
                setIsPlaying(true);
              } catch (e) {
                console.log("Autoplay diblokir", e);
              }
            },
            onStateChange: (event) => {
              setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            },
          },
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentVideo.videoId]);

  // Animasi bar
  useEffect(() => {
    const sim = setInterval(() => {
      setBars(prev =>
        prev.map(() => (isPlaying ? Math.random() * 30 + 10 : 5))
      );
    }, 100);
    return () => clearInterval(sim);
  }, [isPlaying]);

  // Toast muncul 1 detik setelah render, hilang 3 detik kemudian
  useEffect(() => {
    const showTimeout = setTimeout(() => setShowToast(true), 1000);
    const hideTimeout = setTimeout(() => setShowToast(false), 4000);
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const togglePlay = () => {
    const player = playerRef.current;
    if (!player || typeof player.getPlayerState !== "function") return;

    const state = player.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.unMute();
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const getBarStyle = (height, index, totalBars) => {
    const percent = index / (totalBars - 1);
    const startColor = [167, 139, 250]; // #A78BFA
    const endColor = [34, 211, 238];    // #22D3EE
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * percent);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * percent);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * percent);
    const color = `rgb(${r},${g},${b})`;

    return {
      height: `${height}px`,
      width: "6px",
      borderRadius: "999px",
      backgroundColor: color,
      transition: "height 0.1s ease-out",
      marginRight: "3px", // 🟣 Jarak antar bar biar tampak profesional
    };
  };

  return (
    <>
<div id="yt-player" style={{ position: "absolute", left: "-9999px" }}></div>

      {/* Mini Player */}
      <div
  className="flex items-center bg-black-900 rounded-2xl w-72 h-16 p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform"
  onClick={togglePlay}
>

        {/* Bar visualizer */}
        <div className="flex items-end justify-between h-12 px-2">
          {bars.map((height, index) => (
            <div key={index} style={getBarStyle(height, index, bars.length)} />
          ))}
        </div>

        {/* Tombol Play/Pause */}
        <button
          className={`text-white ml-3 text-xl font-bold transition-all duration-200 ${
            isPlaying ? "text-purple-400" : ""
          }`}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        {/* Toast di kanan bar */}
        <div
          className={`ml-4 px-3 py-1 rounded-lg text-sm whitespace-nowrap transition-all duration-500 ${
            showToast
              ? "bg-gray-800 text-white opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        >
          Wanna play music? 🎵
        </div>
      </div>
    </>
  );
}
