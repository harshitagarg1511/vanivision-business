import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="headline">
        <div className="headline-content">
          <h1>Where Creativity Meets Visualization</h1>
          <img src="/1-copy-1.png" alt="Creative Visualization" className="headline-image" />
        </div>
      </section>

      <section className="about-text">
        <p>VANIVISION was founded to bridge the gap between imagination and execution. With a strong foundation in architectural visualization and animation, we create visuals that help clients plan better, present smarter, and communicate clearly.</p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>To become a globally trusted visualization and animation studio delivering meaningful visual experiences across industries.</p>
      </section>

      <section className="approach">
        <h2>Our Approach</h2>
        <ol>
          <li>Understand the concept</li>
          <li>Plan visual storytelling</li>
          <li>Design & animate with precision</li>
          <li>Deliver visuals that create impact</li>
        </ol>
      </section>

      <section className="industries">
        <h2>Industries We Serve</h2>
        <ul>
          <li>Architecture & Real Estate</li>
          <li>Events & Exhibitions</li>
          <li>Construction & Infrastructure</li>
          <li>Manufacturing & Industrial</li>
          <li>Education & E-Learning</li>
          <li>Marketing & Advertising</li>
        </ul>
      </section>
    </div>
  );
};

export default About;