import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1;
  });
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <a href="/">
          <img src="/title.png" alt=" MacBook Title " />
        </a>
      </div>

      <div>
        <video src="/videos/hero.mp4" autoPlay muted playsInline />
        <button>buy</button>
        <p>From $1599 or $1 for life time </p>
      </div>
    </section>
  );
};

export default Hero;
