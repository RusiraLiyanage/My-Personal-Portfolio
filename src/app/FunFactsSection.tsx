import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { FadeUp } from "./shared";

import hungryJacksPhoto from "../imports/Screenshot_2026-07-13_at_9.50.36_pm.png";
import bigWBadge from "../imports/400548D9-F7ED-4B2D-8BE8-3619D7A49C1D_4_5005_c.jpeg";
import kygoOperaHouse from "../imports/Screenshot_2026-07-13_at_10.07.02_pm.png";
import kygoQudosArena from "../imports/Screenshot_2026-07-13_at_10.11.17_pm.png";
import oneRepublicCrowd from "../imports/Screenshot_2026-07-13_at_10.12.10_pm.png";
import concertLights from "../imports/Screenshot_2026-07-13_at_10.11.35_pm.png";
import accorStadiumSelfie from "../imports/IMG_3604.JPG";
import accorStadiumFriends from "../imports/IMG_3651-2.JPG";
import edSheeranConcert from "../imports/IMG_3708.JPG";
import oneRepublicStage from "../imports/IMG_3740.JPG";
import edSheeranCrowd from "../imports/Screenshot_2026-07-13_at_10.37.45_pm.png";
import sunriseAudio from "../imports/Sun_Rise_hope_good_by_DJ_Rusira.mp3";
import chilloutAudio from "../imports/Chillout_By_DJ_Rusira.mp3";
import bassTrapAudio from "../imports/Bass_Trap_by_DJ_Rusira.mp3";
import jumpUpAudio from "../imports/Jump_Up_by_DJ_Rusira.mp3";
import robotDanceAudio from "../imports/The_Robert_Dance_by_DJ_Rusira.mp3";
import chasingTheLightsAudio from "../imports/Chasing_The_Lights_by_DJ_Rusira.mp3";

// ── Concert Section Component ────────────────────────────────────────────────

function ConcertSection({ 
  artistName, 
  venue, 
  date,
  color, 
  photos, 
  delay = 0 
}: { 
  artistName: string; 
  venue: string; 
  date: string;
  color: string; 
  photos: string[]; 
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
    >
      {/* Artist Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
          padding: "14px 28px",
          borderRadius: 14,
          boxShadow: `0 8px 24px ${color}40`,
          border: `1px solid ${color}`,
          marginBottom: 12
        }}>
          <span style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "0.02em"
          }}>
            {artistName}
          </span>
          <div style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.7)"
          }} />
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.95)",
            fontWeight: 500
          }}>
            {venue}
          </span>
          <div style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.7)"
          }} />
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.9rem",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontStyle: "italic"
          }}>
            {date}
          </span>
        </div>
      </div>

      {/* Photo Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
        gap: 28
      }}>
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: delay + index * 0.15 }}
            whileHover={{ scale: 1.02, y: -6 }}
            style={{
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: `0 16px 40px ${color}35`,
              border: `2px solid ${color}40`,
              cursor: "pointer"
            }}
          >
            <img
              src={photo}
              alt={`${artistName} concert photo ${index + 1}`}
              style={{
                width: "100%",
                aspectRatio: "16/11",
                minWidth: 420,
                objectFit: "cover",
                display: "block"
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Audio Player Component ────────────────────────────────────────────────

function AudioPlayer({ 
  title, 
  artist, 
  audioSrc, 
  color, 
  gradient, 
  delay = 0 
}: { 
  title: string; 
  artist: string; 
  audioSrc: string; 
  color: string; 
  gradient: string; 
  delay?: number;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    audio.currentTime = percentage * duration;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // Waveform bars animation
  const bars = Array.from({ length: 40 }, (_, i) => i);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      style={{
        background: gradient,
        borderRadius: 16,
        padding: 20,
        boxShadow: `0 12px 32px ${color}30`,
        border: `1px solid ${color}40`,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <audio ref={audioRef} src={audioSrc} />

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 150,
        height: 150,
        background: "rgba(255,255,255,0.15)",
        borderRadius: "50%",
        filter: "blur(40px)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Title */}
        <div style={{ marginBottom: 16 }}>
          <h4 style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "1.1rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 4
          }}>
            {title}
          </h4>
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 500
          }}>
            {artist}
          </p>
        </div>

        {/* Waveform Visualization */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          height: 48,
          marginBottom: 12,
          background: "rgba(0,0,0,0.15)",
          borderRadius: 8,
          padding: "0 8px"
        }}>
          {bars.map((i) => (
            <motion.div
              key={i}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.6)",
                borderRadius: 2
              }}
              animate={{
                height: isPlaying 
                  ? [Math.random() * 30 + 10, Math.random() * 40 + 8, Math.random() * 35 + 12]
                  : 12
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div
          onClick={handleSeek}
          style={{
            width: "100%",
            height: 6,
            background: "rgba(255,255,255,0.25)",
            borderRadius: 3,
            cursor: "pointer",
            marginBottom: 12,
            position: "relative"
          }}
        >
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: "#fff",
            borderRadius: 3,
            transition: "width 0.1s linear"
          }} />
        </div>

        {/* Controls */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <button
            onClick={togglePlay}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#fff",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            {isPlaying ? (
              <PauseIcon sx={{ fontSize: 24, color }} />
            ) : (
              <PlayArrowIcon sx={{ fontSize: 24, color }} />
            )}
          </button>

          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.95)",
            fontWeight: 600
          }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Fun Facts Section ──────────────────────────────────────────────────────

export function FunFactsSection() {
  return (
    <section id="funfacts" style={{ padding: "88px 0", background: "#FFFFFF" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ margin: "0 20px" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #FF6B35 0%, #5B4DFF 100%)", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>
              <span style={{ fontSize: "1.2rem" }}>✨</span>
              <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>Beyond the Code</span>
            </div>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "2.4rem", fontWeight: 800, color: "#0C0C0C", marginBottom: 16 }}>
              Fun Facts About Me
            </h2>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "1.05rem", color: "#71717A", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              When I'm not building software, you'll find me serving customers and managing operations at Australia's finest establishments.
            </p>
          </div>
        </FadeUp>

        {/* Work Experience Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(520px, 1fr))", gap: 32, marginBottom: 20 }}>
          {/* Hungry Jack's Card */}
          <FadeUp delay={0.1}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "linear-gradient(135deg, #E21F26 0%, #FDB913 100%)",
                borderRadius: 20,
                padding: 32,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(226, 31, 38, 0.25)"
              }}
            >
              {/* Decorative elements */}
              <div style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                filter: "blur(40px)"
              }} />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Logo Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  padding: "12px 24px",
                  borderRadius: 12,
                  marginBottom: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}>
                  <span style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    color: "#E21F26",
                    letterSpacing: "-0.02em"
                  }}>
                    HUNGRY JACK'S
                  </span>
                </div>

                <h3 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 8,
                  textShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}>
                  Back of the House Crew Member
                </h3>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.9)" }} />
                  <span style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.95)",
                    fontWeight: 500
                  }}>
                    Warrawong, NSW · Nov 2023 - Present
                  </span>
                </div>

                <p style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.7,
                  marginBottom: 24
                }}>
                  Working at Australia's most beloved fast-food restaurant, I handle food preparation, order processing, and time management while maintaining the highest standards of quality and service. From the grill to the assembly line, every whopper tells a story! 🍔
                </p>

                {/* Photo */}
                <div style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  border: "4px solid rgba(255,255,255,0.2)"
                }}>
                  <img 
                    src={hungryJacksPhoto} 
                    alt="Rusira in Hungry Jack's uniform"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </FadeUp>

          {/* Big W Card */}
          <FadeUp delay={0.2}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "linear-gradient(135deg, #0052A5 0%, #00A3E0 100%)",
                borderRadius: 20,
                padding: 32,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0, 82, 165, 0.25)"
              }}
            >
              {/* Decorative elements */}
              <div style={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 200,
                height: 200,
                background: "rgba(255,255,255,0.1)",
                borderRadius: "50%",
                filter: "blur(40px)"
              }} />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Logo Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  padding: "12px 24px",
                  borderRadius: 12,
                  marginBottom: 20,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#0052A5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12
                  }}>
                    <span style={{
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                      fontSize: "1.1rem",
                      fontWeight: 900,
                      color: "#fff"
                    }}>
                      BIG
                    </span>
                  </div>
                  <span style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    color: "#0052A5",
                    letterSpacing: "-0.02em"
                  }}>
                    W
                  </span>
                </div>

                <h3 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 8,
                  textShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}>
                  Store Team Member
                </h3>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "rgba(255,255,255,0.9)" }} />
                  <span style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.95)",
                    fontWeight: 500
                  }}>
                    Warrawong, NSW · Nov 2025 - Present
                  </span>
                </div>

                <p style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.7,
                  marginBottom: 24
                }}>
                  Part of the Woolworths Group family, I deliver exceptional customer service, manage stock inventory, and perform cashier duties at one of Australia's premier discount department stores. Every day brings new opportunities to help customers find exactly what they need! 🛒
                </p>

                {/* Badge Photo */}
                <div style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  border: "4px solid rgba(255,255,255,0.2)",
                  background: "#fff",
                  padding: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <img 
                    src={bigWBadge} 
                    alt="Big W name badge - Rusira"
                    style={{
                      width: "100%",
                      maxWidth: 400,
                      height: "auto",
                      display: "block"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* Key Skills Banner */}
        <FadeUp delay={0.3}>
          <div style={{
            background: "linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)",
            borderRadius: 16,
            padding: "24px 32px",
            marginTop: 32,
            border: "1px solid rgba(0,0,0,0.06)"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              <span style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#71717A",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}>
                Key Skills
              </span>
              {[
                "🎯 Customer Service Excellence",
                "⏱️ Time Management",
                "🤝 Team Collaboration",
                "📦 Stock Management",
                "💪 High-Pressure Performance"
              ].map((skill, i) => (
                <React.Fragment key={i}>
                  <span style={{ color: "rgba(0,0,0,0.15)" }}>•</span>
                  <span style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.9rem",
                    color: "#3F3F46",
                    fontWeight: 500
                  }}>
                    {skill}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Music Section - Divider */}
        <div style={{
          margin: "80px 0 60px",
          height: 2,
          background: "linear-gradient(90deg, transparent 0%, rgba(91,77,255,0.3) 50%, transparent 100%)"
        }} />

        {/* Music Lover Section - KYGO */}
        <FadeUp delay={0.4}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 440px", gap: 48, alignItems: "center", marginBottom: 72 }}>
            {/* LEFT: Text Content */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg, #00D4FF 0%, #FF6B35 50%, #FFD700 100%)", padding: "6px 16px", borderRadius: 20, marginBottom: 20 }}>
                <span style={{ fontSize: "1.2rem" }}>🎵</span>
                <span style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>Music Enthusiast</span>
              </div>
              
              <h2 style={{ 
                fontFamily: '"Plus Jakarta Sans", sans-serif', 
                fontSize: "2.4rem", 
                fontWeight: 800, 
                color: "#0C0C0C", 
                marginBottom: 20,
                lineHeight: 1.2
              }}>
                I am a House Music Lover 🎧
              </h2>
              
              <p style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: "1.05rem", 
                color: "#71717A", 
                lineHeight: 1.8,
                marginBottom: 24
              }}>
                <span style={{ fontWeight: 800, color: "#00D4FF" }}>Tropical House</span> is my passion, and <span style={{ fontWeight: 700, color: "#0C0C0C" }}>KYGO</span> is my all-time favorite artist—the king of sun-soaked melodies that transport you to paradise. 
              </p>
              
              <p style={{ 
                fontFamily: '"Inter", sans-serif', 
                fontSize: "1.05rem", 
                color: "#71717A", 
                lineHeight: 1.8
              }}>
                I've been fortunate to support some incredible fellow artists here in Sydney, creating unforgettable memories at some of the city's premier venues! 🌴✨
              </p>

              {/* Stats */}
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(3, 1fr)", 
                gap: 20, 
                marginTop: 32,
                padding: "24px 0"
              }}>
                {[
                  { icon: "🎵", label: "Favorite Genre", value: "Tropical House" },
                  { icon: "🎤", label: "Concerts Attended", value: "2 in Sydney" },
                  { icon: "⭐", label: "Favorite Artist", value: "KYGO" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{
                      background: "linear-gradient(135deg, #F8F9FA 0%, #E5E7EB 100%)",
                      borderRadius: 12,
                      padding: "16px 12px",
                      textAlign: "center",
                      border: "1px solid rgba(0,0,0,0.06)"
                    }}
                  >
                    <div style={{ fontSize: "1.5rem", marginBottom: 8 }}>{stat.icon}</div>
                    <div style={{ 
                      fontFamily: '"Inter", sans-serif', 
                      fontSize: "0.7rem", 
                      color: "#71717A",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                      fontWeight: 600
                    }}>
                      {stat.label}
                    </div>
                    <div style={{ 
                      fontFamily: '"Plus Jakarta Sans", sans-serif', 
                      fontSize: "0.85rem", 
                      color: "#0C0C0C",
                      fontWeight: 700
                    }}>
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: KYGO Image with Frame */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0, 212, 255, 0.25)",
                border: "1px solid rgba(0, 212, 255, 0.2)"
              }}
            >
              {/* Background gradient */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, rgba(255,107,53,0.2) 100%)",
                zIndex: 1,
                pointerEvents: "none"
              }} />
              
              {/* Image */}
              <img
                src={kygoOperaHouse}
                alt="KYGO at Sydney Opera House"
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "3/4",
                  objectFit: "cover"
                }}
              />

              {/* KYGO Badge */}
              <div style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                background: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(12px)",
                borderRadius: 12,
                padding: "16px 20px",
                zIndex: 2,
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <div style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "1.8rem",
                  fontWeight: 900,
                  color: "#00D4FF",
                  letterSpacing: "0.08em",
                  marginBottom: 4,
                  textShadow: "0 0 20px rgba(0,212,255,0.6)"
                }}>
                  KYGO
                </div>
                <div style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.9)"
                }}>
                  🌴 The King of Tropical House
                </div>
              </div>
            </motion.div>
          </div>
        </FadeUp>

        {/* Concert Experiences - Scrolling Layout */}
        <FadeUp delay={0.6}>
          <div style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            borderRadius: 20,
            padding: 48,
            marginBottom: 32
          }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h3 style={{
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontSize: "2rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 12
              }}>
                Live Concert Experiences in Sydney 🎤
              </h3>
              <p style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.6,
                maxWidth: 680,
                margin: "0 auto"
              }}>
                I was so glad I could support these incredible artists at Sydney's premier venues
              </p>
            </div>

            {/* OneRepublic Section */}
            <ConcertSection
              artistName="OneRepublic"
              venue="Qudos Bank Arena"
              date="February 2026"
              color="#00D4FF"
              photos={[kygoQudosArena, oneRepublicCrowd, concertLights, edSheeranCrowd]}
              delay={0.1}
            />

            {/* Divider */}
            <div style={{
              height: 1,
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
              margin: "56px 0"
            }} />

            {/* Ed Sheeran Section */}
            <ConcertSection
              artistName="Ed Sheeran"
              venue="Accor Stadium"
              date="February 2026"
              color="#FF6B35"
              photos={[accorStadiumSelfie, accorStadiumFriends, edSheeranConcert, oneRepublicStage]}
              delay={0.3}
            />

            {/* Music Production Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ marginTop: 80 }}
            >
              {/* Section Title */}
              <div style={{
                textAlign: "center",
                marginBottom: 48
              }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 16,
                  background: "linear-gradient(135deg, #9333EA 0%, #C026D3 100%)",
                  padding: "16px 32px",
                  borderRadius: 16,
                  boxShadow: "0 12px 32px rgba(147, 51, 234, 0.35)",
                  border: "2px solid rgba(147, 51, 234, 0.5)",
                  marginBottom: 20
                }}>
                  <span style={{
                    fontSize: "2rem"
                  }}>🎛️</span>
                  <span style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "0.02em"
                  }}>
                    I am a House Music Producer
                  </span>
                </div>

                <p style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  maxWidth: 700,
                  margin: "0 auto",
                  fontStyle: "italic"
                }}>
                  Here are some demo tracks I've been working on. 
                  <br />
                  Hoping to finish them as full songs in the future! 🎶
                </p>
              </div>

              {/* Audio Player Grid */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 24
              }}>
                <AudioPlayer 
                  title="Sunrise"
                  artist="DJ Rusira"
                  audioSrc={sunriseAudio}
                  color="#FF6B35"
                  gradient="linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)"
                  delay={0.1}
                />
                <AudioPlayer 
                  title="Chillout"
                  artist="DJ Rusira"
                  audioSrc={chilloutAudio}
                  color="#00D4FF"
                  gradient="linear-gradient(135deg, #00D4FF 0%, #0EA5E9 100%)"
                  delay={0.2}
                />
                <AudioPlayer 
                  title="Bass Trap"
                  artist="DJ Rusira"
                  audioSrc={bassTrapAudio}
                  color="#10B981"
                  gradient="linear-gradient(135deg, #10B981 0%, #059669 100%)"
                  delay={0.3}
                />
                <AudioPlayer 
                  title="Jump Up"
                  artist="DJ Rusira"
                  audioSrc={jumpUpAudio}
                  color="#F59E0B"
                  gradient="linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
                  delay={0.4}
                />
                <AudioPlayer 
                  title="The Robot Dance"
                  artist="DJ Rusira"
                  audioSrc={robotDanceAudio}
                  color="#8B5CF6"
                  gradient="linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
                  delay={0.5}
                />
                <AudioPlayer 
                  title="Chasing The Lights"
                  artist="DJ Rusira"
                  audioSrc={chasingTheLightsAudio}
                  color="#EC4899"
                  gradient="linear-gradient(135deg, #EC4899 0%, #DB2777 100%)"
                  delay={0.6}
                />
              </div>
            </motion.div>

            {/* Fun Facts Ending Transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                marginTop: 100,
                textAlign: "center",
                padding: "40px 32px",
                background: "linear-gradient(135deg, rgba(17,17,27,0.6) 0%, rgba(17,17,27,0.4) 100%)",
                borderRadius: 24,
                border: "2px solid rgba(147, 51, 234, 0.3)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Background glow */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                background: "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
                pointerEvents: "none"
              }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <span style={{
                  fontSize: "3rem",
                  display: "block",
                  marginBottom: 16
                }}>✨</span>
                
                <h3 style={{
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#fff",
                  margin: "0 0 12px 0",
                  letterSpacing: "0.01em"
                }}>
                  That's a glimpse into my world!
                </h3>
                
                <p style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.7,
                  maxWidth: 600,
                  margin: "0 auto",
                  fontStyle: "italic"
                }}>
                  Beyond the code and projects, I'm passionate about music, live experiences, 
                  and building meaningful connections. Let's grab a virtual coffee and chat! ☕
                </p>
              </div>
            </motion.div>
          </div>
        </FadeUp>
        </div>
      </div>
    </section>
  );
}
