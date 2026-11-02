import './App.css';
import { projects } from './projectsData';
import ProjectCard from './ProjectCard';

function App() {
  return (
    <div className="portfolio-container">
      <h1>My Project Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imageUrl={project.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;