import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <section id="highlights">
      <h2>There's never been a better time to upgrade</h2>
      <h3>Here's what you get with the new Macbook Pro</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through demanding tsaks uo to 9.8x faster</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence</span>{" "}
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Upto 14 hrs more battery life.{" "}
              <span className="text-dark-100">(Upto 24hrs total)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
