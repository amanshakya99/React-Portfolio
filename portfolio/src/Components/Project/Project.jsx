import "../../Styles/Project.css";
import ProjectCard from "./ProjectCard";

export default function Project({ projects }) {
  return (
    <section className="Project" id="Project">
      <div className="Project-header">
        <h2>Project</h2>
        <a href="">View More</a>
      </div>
      <p className="Solid-line"></p>

      <div className="Project-container">
        {projects.map((p) => (
          <ProjectCard key={p.id} img={p.img} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}
