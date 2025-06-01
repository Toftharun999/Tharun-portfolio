```jsx
import React from "react";
import "./InteriorDesignerPortfolio.css";

const projects = [
  {
    title: "Modern Living Room",
    image: "/images/living-room.jpg",
    description: "A contemporary living room with natural lighting and minimalist decor.",
  },
  {
    title: "Elegant Bedroom",
    image: "/images/bedroom.jpg",
    description: "A serene bedroom space with warm tones and cozy textures.",
  },
  {
    title: "Luxury Kitchen",
    image: "/images/kitchen.jpg",
    description: "A stylish, functional kitchen with premium finishes and smart storage.",
  },
];

export default function InteriorDesignerPortfolio() {
  return (
    <div className="portfolio-container">
      <header className="hero">
        <h1>Jane Doe Interiors</h1>
        <p>Transforming Spaces. Inspiring Lives.</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am Jane Doe, a passionate interior designer with 10+ years of experience creating beautiful, functional spaces for clients. My philosophy blends modern aesthetics with personalized comfort.
        </p>
      </section>

      <section className="services">
        <h2>Services</h2>
        <ul>
          <li>Residential Interior Design</li>
          <li>Commercial Space Planning</li>
          <li>Renovation & Remodeling</li>
          <li>Color & Material Consultation</li>
        </ul>
      </section>

      <section className="portfolio-gallery">
        <h2>Portfolio</h2>
        <div className="gallery">
          {projects.map((project, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          “Jane transformed my apartment into a dream home! Her attention to detail and creativity are unmatched.”
          <br />
          <span>— Satisfied Client</span>
        </blockquote>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How can I help you?" required />
          <button type="submit">Send</button>
        </form>
        <div>
          <a href="mailto:jane@doeinteriors.com">jane@doeinteriors.com</a>
          <br />
          <a href="https://instagram.com/janedoeinteriors" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
}
```