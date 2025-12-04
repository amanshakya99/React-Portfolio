export default function ProjectCard({ img, title, desc }) {
  return (
    <article className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}
