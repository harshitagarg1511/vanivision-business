import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Architectural Visualization',
      description: 'Photorealistic exterior and interior renders, walkthroughs, fly-throughs, and master-planning visuals to support sales, approvals, and presentations.'
    },
    {
      title: 'Event Pre-Visualization',
      description: '3D visualization of event setups including stage design, lighting, LED screens, camera angles, audience flow, and branding — helping planners visualize events before execution.'
    },
    {
      title: 'Construction Animation',
      description: 'Step-by-step animated construction sequences showcasing building processes, timelines, safety workflows, and structural details for presentations and training.'
    },
    {
      title: 'Industrial Animation',
      description: 'High-precision animations explaining industrial processes, machinery operations, plant layouts, and technical workflows in a visually engaging manner.'
    },
    {
      title: 'Educational Animation',
      description: 'Concept-driven animations for schools, institutions, ed-tech platforms, and training programs — simplifying complex topics through visuals.'
    },
    {
      title: 'Motion Graphics Animation',
      description: '2D & 3D motion graphics for brand videos, explainers, advertisements, presentations, and digital campaigns.'
    },
    {
      title: 'Product Demonstration Animation',
      description: 'Visually compelling product animations highlighting features, functionality, and usage — ideal for marketing and investor presentations.'
    },
    {
      title: 'AR / VR Experiences',
      description: 'Interactive virtual tours, immersive walkthroughs, and augmented reality solutions for real estate, exhibitions, and product showcases.'
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;