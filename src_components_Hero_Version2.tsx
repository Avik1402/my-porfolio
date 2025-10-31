import React from "react";

const Hero = () => (
  <section className="section" style={{ textAlign: "center" }}>
    <img
      src="https://avatars.githubusercontent.com/u/140222083?v=4"
      alt="Profile"
      style={{ width: 120, height: 120, borderRadius: "50%", marginBottom: 16, border: "3px solid #0073b1" }}
    />
    <h1>Avik Kumar</h1>
    <h2>Software Developer</h2>
    <p>Passionate about building web applications and learning new technologies.</p>
    <div className="social-links">
      <a
        href="https://linkedin.com/in/avik-kumar-1402"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#0073b1",
          color: "#fff",
          padding: "0.4rem 1rem",
          borderRadius: 20,
          textDecoration: "none",
          fontWeight: 500
        }}
      >
        LinkedIn
      </a>
    </div>
  </section>
);

export default Hero;