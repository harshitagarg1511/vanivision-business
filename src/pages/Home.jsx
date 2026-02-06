import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src="/left.jpg" alt="Left decoration" className="hero-image left" />
        <div className="hero-content">
          <h1>Visualizing Ideas. Animating Possibilities.</h1>
          <p>VANIVISION is a creative visualization studio delivering architectural, industrial, event, and educational animations that communicate ideas with clarity and impact.</p>
          <div className="cta-buttons">
            <Link to="/work" className="cta-link">
              <button>View Our Work</button>
            </Link>
          </div>
        </div>
        <img src="/right.png" alt="Right decoration" className="hero-image right" />
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>VANIVISION is a multidisciplinary visualization studio specializing in high-quality 3D animation, architectural walkthroughs, event pre-visualization, and immersive AR/VR experiences. We help architects, brands, industries, and educators turn complex ideas into engaging visual stories.</p>
      </section>

      {/* Our Core Services */}
      <section className="services">
        <h2>Our Core Services</h2>
        <ul>
          <li>Architectural Visualization</li>
          <li>Event Pre-Visualization</li>
          <li>Construction Animation</li>
          <li>Industrial & Product Animation</li>
          <li>Educational Animation</li>
          <li>Motion Graphics</li>
          <li>AR / VR Experiences</li>
        </ul>
      </section>

      {/* Why VANIVISION */}
      <section className="why">
        <h2>Why VANIVISION</h2>
        <ul>
          <li>Creative + Technical Expertise</li>
          <li>Industry-Focused Visual Solutions</li>
          <li>High-Quality, On-Time Delivery</li>
          <li>International-Standard Output</li>
          <li>Strong Storytelling Approach</li>
        </ul>
      </section>

      {/* Featured Work */}
      <section className="featured-work">
        <h2>Featured Work</h2>
        <div className="thumbnails">
          <div className="thumbnail">
            <img src="/rough changed struc rite_01_05_17_13.png" alt="Luxury Residential Walkthrough" />
            <p>Luxury Residential Walkthrough</p>
          </div>
          <div className="thumbnail">
            <img src="/1.jpeg" alt="Event Stage Pre-Visualization" />
            <p>Event Stage Pre-Visualization</p>
          </div>
          <div className="thumbnail">
            <img src="/strucrite draft_01_10_18_12.png" alt="Industrial Process Animation" />
            <p>Industrial Process Animation</p>
          </div>
          <div className="thumbnail">
            <img src="/h3.png" alt="Educational Explainer Video" />
            <p>Educational Explainer Video</p>
          </div>
          <div className="thumbnail">
            <img src="/2 (1).png" alt="Product Demonstration Animation" />
            <p>Product Demonstration Animation</p>
          </div>
          <div className="thumbnail">
            <img src="/PBP_boundary day.png" alt="VR Property Tour" />
            <p>VR Property Tour</p>
          </div>
        </div>
      </section>

      {/* Clients & Industries */}
      <section className="clients">
        <h2>Clients & Industries</h2>
        <p>Architecture | Real Estate | Events | Manufacturing | Education | Marketing Agencies | Startups</p>
      </section>

    </div>
  );
};

export default Home;