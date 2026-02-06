import './Work.css';

const Work = () => {
  const projects = [
    {
      name: 'Commercial Event Stage Visualization',
      category: 'Event Pre-Visualization',
      description: 'Real-time 3D visuals created to preview stage layout, lighting, and audience flow.',
      media: '/Timeline 1_01_01_25_02 (1).png',
      type: 'image',
      link: 'https://youtu.be/1XJtTI1thTE'
    },
    {
      name: 'Luxury Residential Walkthrough',
      category: 'Architecture Walkthroughs',
      description: 'Immersive 3D walkthrough of a high-end residential property.',
      media: '/Timeline 1_01_02_24_09.png',
      type: 'image',
      link: 'https://youtu.be/63n4K682stQ'
    },
    {
      name: 'Industrial Process Animation',
      category: 'Industrial Animation',
      description: 'High-precision animations explaining industrial processes, machinery operations, plant layouts, and technical workflows.',
      media: '/Timeline 1_01_09_20_09.png',
      type: 'image',
      link: 'https://youtu.be/fmbn0PV_TA8'
    }
  ];

  return (
    <div className="work">
      <section className="intro">
        <h1>Projects That Speak Visually</h1>
        <p>Explore a curated selection of our architectural visuals, animations, and immersive experiences created for diverse industries.</p>
      </section>

      

      <section className="portfolio">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            {project.type === 'video' ? (
              <video controls>
                <source src={project.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={project.media} alt={project.name} />
            )}
            <h3>{project.name}</h3>
            <p className="category">{project.category}</p>
            <p>{project.description}</p>
          </a>
        ))}
      </section>
    </div>
  );
};

export default Work;