import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import React from "react";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  // Redirect to an external URL when end is true
  React.useEffect(() => {
    if (end) {
      window.location.href = "https://maldikurniawan.github.io/random_app/"; // Replace with your external URL
    }
  }, [end]);

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Portfolio
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">To infinity and beyond!</p>
      </div>
    </div>
  );
};
